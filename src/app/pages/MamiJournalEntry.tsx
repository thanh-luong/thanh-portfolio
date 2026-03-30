import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const journalImages = [
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%201.png",
    alt: "GCF slide 1",
    type: "image",
    objectPosition: "center center",
  },
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%202.png",
    alt: "GCF slide 2",
    type: "image",
    objectPosition: "center center",
  },
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%203.png",
    alt: "GCF slide 3",
    type: "image",
    objectPosition: "center center",
  },
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%204.png",
    alt: "GCF slide 4",
    type: "image",
    objectPosition: "center center",
  },
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%205.png",
    alt: "GCF slide 5",
    type: "image",
    objectPosition: "center center",
  },
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%20%206.mp4",
    alt: "GCF slide 6 video",
    type: "video",
    objectPosition: "center center",
  },
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%207.png",
    alt: "GCF slide 7",
    type: "image",
    objectPosition: "center center",
  },
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%208.png",
    alt: "GCF slide 8",
    type: "image",
    objectPosition: "center center",
  },
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%209.png",
    alt: "GCF slide 9",
    type: "image",
    objectPosition: "center center",
  },
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%2010.png",
    alt: "GCF slide 10",
    type: "image",
    objectPosition: "center center",
  },
  {
    src: "/GCF%20the%20reality%20of%20chasing%20a%20dream/GCF%2011.png",
    alt: "GCF slide 11",
    type: "image",
    objectPosition: "center center",
  },
];

export function MamiJournalEntry() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    };

    updateSelectedIndex();
    carouselApi.on("select", updateSelectedIndex);
    carouselApi.on("reInit", updateSelectedIndex);

    return () => {
      carouselApi.off("select", updateSelectedIndex);
      carouselApi.off("reInit", updateSelectedIndex);
    };
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f4ee_0%,#f4ede2_100%)] text-[var(--foreground)]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto w-full max-w-[82rem] px-5 pb-24 pt-8 md:px-8 md:pt-10"
      >
        <Link
          to="/work/mami-matcha"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)] transition-opacity hover:opacity-70"
        >
          <ArrowLeft size={14} />
          Back to mamī matcha
        </Link>

        <div className="mt-10">
          <div className="max-w-[68rem]">
            <div className="text-[0.78rem] uppercase tracking-[0.18em] text-[rgba(75,67,61,0.62)]">
              April 2025
            </div>
            <h1
              className="mt-3 text-[2.6rem] font-extralight leading-[0.92] tracking-[-0.05em] md:text-[4.2rem]"
              style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
            >
              the part i don&apos;t usually show
            </h1>
            <p className="mt-6 max-w-[62rem] text-base leading-7 text-[var(--muted-foreground)]">
              I created a visual narrative about choosing between two paths, using real footage and
              journal-style notes. I used Google&apos;s AI tools as a thinking tool to explore uncertainty,
              generate alternate perspectives, and refine the structure of the story. Rather than centering
              AI visually, I focused on how it shaped my process, allowing me to translate a personal
              decision into a cohesive creative artifact.
            </p>
          </div>

          <div className="mt-10 rounded-[2.4rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.42)] px-6 py-8 md:px-10 md:py-10">
            <Carousel
              opts={{ loop: true, align: "start" }}
              setApi={setCarouselApi}
              className="mx-auto w-full max-w-[36rem]"
            >
              <CarouselContent>
                {journalImages.map((image) => (
                  <CarouselItem key={image.src}>
                    <div className="overflow-hidden rounded-[2rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.5)]">
                      {image.type === "video" ? (
                        <video
                          src={image.src}
                          className="aspect-[1080/1350] w-full object-cover"
                          style={{ objectPosition: image.objectPosition }}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                        />
                      ) : (
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="aspect-[1080/1350] w-full object-cover"
                          style={{ objectPosition: image.objectPosition }}
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 top-[calc(100%+1.25rem)] h-11 w-11 -translate-y-0 border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.92)] text-[var(--foreground)] hover:bg-white disabled:opacity-35" />
              <CarouselNext className="right-3 top-[calc(100%+1.25rem)] h-11 w-11 -translate-y-0 border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.92)] text-[var(--foreground)] hover:bg-white disabled:opacity-35" />
            </Carousel>
            <div className="mt-16 text-center">
              <div className="text-[0.72rem] uppercase tracking-[0.18em] text-[rgba(75,67,61,0.58)]">
                journal note
              </div>
              <div className="mt-2 text-[0.8rem] uppercase tracking-[0.18em] text-[rgba(75,67,61,0.66)]">
                no. {selectedIndex + 1}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
