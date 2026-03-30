import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const journalImages = [
  {
    src: "/1.PNG",
    alt: "Journal entry collage",
    objectPosition: "center center",
  },
  {
    src: "/art%20vs%20artist.PNG",
    alt: "Art versus artist reflection",
    objectPosition: "center -90px",
  },
];

export function MamiJournalEntry() {
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

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="max-w-[30rem]">
            <div className="text-[0.78rem] uppercase tracking-[0.18em] text-[rgba(75,67,61,0.62)]">
              April 2025
            </div>
            <h1
              className="mt-3 text-[2.6rem] font-extralight leading-[0.92] tracking-[-0.05em] md:text-[4.2rem]"
              style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
            >
              the part i don&apos;t usually show
            </h1>
            <p className="mt-6 max-w-[28rem] text-base leading-7 text-[var(--muted-foreground)]">
              I used AI as a thinking tool to explore uncertainty, generate alternate perspectives, and
              refine the structure of the story. Rather than centering AI visually, I focused on how it
              shaped my process, allowing me to translate a personal decision into a cohesive creative
              artifact.
            </p>
          </div>

          <div className="rounded-[2.4rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.42)] px-6 py-8 md:px-10 md:py-10">
            <Carousel
              opts={{ loop: true, align: "start" }}
              className="mx-auto w-full max-w-[34rem]"
            >
              <CarouselContent>
                {journalImages.map((image) => (
                  <CarouselItem key={image.src}>
                    <div className="overflow-hidden rounded-[2rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.5)]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-[26rem] w-full object-cover md:h-[32rem]"
                        style={{ objectPosition: image.objectPosition }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 top-[calc(100%+1.25rem)] h-11 w-11 -translate-y-0 border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.92)] text-[var(--foreground)] hover:bg-white disabled:opacity-35" />
              <CarouselNext className="right-3 top-[calc(100%+1.25rem)] h-11 w-11 -translate-y-0 border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.92)] text-[var(--foreground)] hover:bg-white disabled:opacity-35" />
            </Carousel>

            <div className="mt-16 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.8rem] bg-[rgba(247,244,238,0.92)] px-5 py-5">
                <div className="text-[0.72rem] uppercase tracking-[0.18em] text-[rgba(75,67,61,0.58)]">
                  journal note
                </div>
                <p
                  className="mt-3 text-[1.28rem] font-extralight leading-[1.1] tracking-[-0.04em]"
                  style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                >
                  some ideas come in loudly. the hard part is staying with them long enough to understand
                  what they&apos;re asking for.
                </p>
              </div>
              <div className="rounded-[1.8rem] bg-[rgba(247,244,238,0.92)] px-5 py-5">
                <div className="text-[0.72rem] uppercase tracking-[0.18em] text-[rgba(75,67,61,0.58)]">
                  what stayed
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  even when i didn&apos;t know the final shape yet, there was something worth protecting in the
                  early version. this page is for that in-between stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
