import AppKit
import CoreGraphics
import Foundation
import ImageIO
import UniformTypeIdentifiers

struct RGBA {
  var r: Double
  var g: Double
  var b: Double
  var a: Double
}

func hashNoise(_ x: Int, _ y: Int, _ seed: Int) -> Double {
  var value = UInt64(bitPattern: Int64(x &* 374_761_393 &+ y &* 668_265_263 &+ seed &* 362_437))
  value = (value ^ (value >> 13)) &* 1_274_126_177
  value ^= value >> 16
  return Double(value & 0xffff) / 65535.0
}

func clamp(_ value: Int, min lower: Int, max upper: Int) -> Int {
  Swift.max(lower, Swift.min(upper, value))
}

func blend(_ base: RGBA, _ top: RGBA) -> RGBA {
  let outA = top.a + base.a * (1.0 - top.a)
  guard outA > 0.0001 else { return RGBA(r: 0, g: 0, b: 0, a: 0) }

  let outR = (top.r * top.a + base.r * base.a * (1.0 - top.a)) / outA
  let outG = (top.g * top.a + base.g * base.a * (1.0 - top.a)) / outA
  let outB = (top.b * top.a + base.b * base.a * (1.0 - top.a)) / outA

  return RGBA(r: outR, g: outG, b: outB, a: outA)
}

func mix(_ source: Double, _ target: Double, amount: Double) -> Double {
  source * (1.0 - amount) + target * amount
}

func blurAlphaAndColor(_ pixels: inout [RGBA], width: Int, height: Int, iterations: Int) {
  guard iterations > 0 else { return }

  for _ in 0..<iterations {
    var next = pixels
    for y in 1..<(height - 1) {
      for x in 1..<(width - 1) {
        let index = y * width + x
        if pixels[index].a < 0.001 { continue }

        var accum = RGBA(r: 0, g: 0, b: 0, a: 0)
        var count = 0.0
        for oy in -1...1 {
          for ox in -1...1 {
            let sample = pixels[(y + oy) * width + (x + ox)]
            accum.r += sample.r
            accum.g += sample.g
            accum.b += sample.b
            accum.a += sample.a
            count += 1
          }
        }
        next[index] = RGBA(
          r: accum.r / count,
          g: accum.g / count,
          b: accum.b / count,
          a: accum.a / count
        )
      }
    }
    pixels = next
  }
}

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let inputURL = root.appendingPathComponent("public/Thanh Luong Cover.png")
let outputURL = root.appendingPathComponent("public/Thanh Luong Cover Dissolve.png")

guard let source = CGImageSourceCreateWithURL(inputURL as CFURL, nil),
      let image = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
  fputs("Unable to read source image\n", stderr)
  exit(1)
}

let width = image.width
let height = image.height
let bytesPerRow = width * 4
let colorSpace = CGColorSpaceCreateDeviceRGB()
var raw = [UInt8](repeating: 0, count: width * height * 4)

guard let context = CGContext(
  data: &raw,
  width: width,
  height: height,
  bitsPerComponent: 8,
  bytesPerRow: bytesPerRow,
  space: colorSpace,
  bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
) else {
  fputs("Unable to create bitmap context\n", stderr)
  exit(1)
}

context.draw(image, in: CGRect(x: 0, y: 0, width: width, height: height))

var pixels = [RGBA](repeating: RGBA(r: 0, g: 0, b: 0, a: 0), count: width * height)
for y in 0..<height {
  for x in 0..<width {
    let offset = (y * width + x) * 4
    pixels[y * width + x] = RGBA(
      r: Double(raw[offset]) / 255.0,
      g: Double(raw[offset + 1]) / 255.0,
      b: Double(raw[offset + 2]) / 255.0,
      a: Double(raw[offset + 3]) / 255.0
    )
  }
}

let ivory = RGBA(r: 245.0 / 255.0, g: 241.0 / 255.0, b: 234.0 / 255.0, a: 1.0)
let regionDepth = Int(Double(height) * 0.14)
var bottomOpaque = [Int](repeating: -1, count: width)

for x in 0..<width {
  for y in stride(from: height - 1, through: 0, by: -1) {
    if pixels[y * width + x].a > 0.06 {
      bottomOpaque[x] = y
      break
    }
  }
}

var base = pixels
var particles = [RGBA](repeating: RGBA(r: 0, g: 0, b: 0, a: 0), count: width * height)

for x in 0..<width {
  let bottom = bottomOpaque[x]
  if bottom < 0 { continue }

  let startY = Swift.max(0, bottom - regionDepth)
  for y in startY...bottom {
    let index = y * width + x
    let pixel = pixels[index]
    if pixel.a < 0.04 { continue }

    let distance = bottom - y
    let t = 1.0 - Double(distance) / Double(regionDepth)
    let n1 = hashNoise(x, y, 17)
    let n2 = hashNoise(x, y, 53)
    let n3 = hashNoise(x, y, 97)

    let survival = 1.0 - pow(t, 1.55) * 0.94
    let dissolveAmount = max(0.0, (n1 - survival) / max(0.0001, 1.0 - survival))
    let tint = min(0.92, pow(t, 1.7) * 0.72 + n2 * 0.08)

    if dissolveAmount > 0 {
      let reducedAlpha = pixel.a * max(0.0, 1.0 - dissolveAmount * 1.08)
      base[index] = RGBA(
        r: mix(pixel.r, ivory.r, amount: tint * 0.45),
        g: mix(pixel.g, ivory.g, amount: tint * 0.45),
        b: mix(pixel.b, ivory.b, amount: tint * 0.45),
        a: reducedAlpha
      )
    } else {
      base[index] = RGBA(
        r: mix(pixel.r, ivory.r, amount: pow(t, 2.4) * 0.06),
        g: mix(pixel.g, ivory.g, amount: pow(t, 2.4) * 0.06),
        b: mix(pixel.b, ivory.b, amount: pow(t, 2.4) * 0.06),
        a: pixel.a
      )
    }

    let particleChance = pow(t, 1.9) * 0.22
    if n2 < particleChance {
      let verticalOffset = Int((4.0 + n3 * 26.0) * pow(t, 1.25))
      let horizontalOffset = Int((hashNoise(x, y, 131) - 0.5) * 8.0 * pow(t, 1.1))
      let py = clamp(y + verticalOffset, min: 0, max: height - 1)
      let px = clamp(x + horizontalOffset, min: 0, max: width - 1)
      let pIndex = py * width + px
      let mixed = RGBA(
        r: mix(pixel.r, ivory.r, amount: 0.48 + t * 0.38),
        g: mix(pixel.g, ivory.g, amount: 0.48 + t * 0.38),
        b: mix(pixel.b, ivory.b, amount: 0.48 + t * 0.38),
        a: pixel.a * (0.18 + t * 0.26) * (0.55 + n3 * 0.45)
      )
      particles[pIndex] = blend(particles[pIndex], mixed)
    }
  }
}

blurAlphaAndColor(&particles, width: width, height: height, iterations: 1)

var output = base
for i in 0..<output.count {
  output[i] = blend(output[i], particles[i])
}

var outRaw = [UInt8](repeating: 0, count: width * height * 4)
for y in 0..<height {
  for x in 0..<width {
    let pixel = output[y * width + x]
    let offset = (y * width + x) * 4
    outRaw[offset] = UInt8(clamping: Int(pixel.r * 255.0))
    outRaw[offset + 1] = UInt8(clamping: Int(pixel.g * 255.0))
    outRaw[offset + 2] = UInt8(clamping: Int(pixel.b * 255.0))
    outRaw[offset + 3] = UInt8(clamping: Int(pixel.a * 255.0))
  }
}

guard let provider = CGDataProvider(data: Data(outRaw) as CFData),
      let outImage = CGImage(
        width: width,
        height: height,
        bitsPerComponent: 8,
        bitsPerPixel: 32,
        bytesPerRow: bytesPerRow,
        space: colorSpace,
        bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.premultipliedLast.rawValue),
        provider: provider,
        decode: nil,
        shouldInterpolate: true,
        intent: .defaultIntent
      ),
      let destination = CGImageDestinationCreateWithURL(outputURL as CFURL, UTType.png.identifier as CFString, 1, nil) else {
  fputs("Unable to create output image\n", stderr)
  exit(1)
}

CGImageDestinationAddImage(destination, outImage, nil)
if !CGImageDestinationFinalize(destination) {
  fputs("Unable to write output image\n", stderr)
  exit(1)
}

print("Wrote \(outputURL.path)")
