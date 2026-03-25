import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { featuredProjects, personalWorks } from "../data/portfolio";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [frame, setFrame] = useState(0);
  const orderedFeaturedProjects = [
    featuredProjects.find((project) => project.id === "mami-matcha"),
    featuredProjects.find((project) => project.id === "mooshie-co"),
    featuredProjects.find((project) => project.id === "cham-studio"),
  ].filter(Boolean);

  useEffect(() => {
    if (!hoveredProject) return;

    const id = window.setInterval(() => {
      setFrame((current) => current + 1);
    }, 900);

    return () => window.clearInterval(id);
  }, [hoveredProject]);

  useEffect(() => {
    setFrame(0);
  }, [hoveredProject]);

  return (
    <div id="works-top" className="mx-auto w-full max-w-none px-[25px] py-8 md:px-[50px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pb-10"
      >
        <h1
          className="text-[2.2rem] font-extralight leading-[1] tracking-[-0.06em] md:text-[4.2rem]"
          style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
        >
          Work.
        </h1>
      </motion.div>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {orderedFeaturedProjects.map((project, index) => {
          const images = project.galleryImages ?? [project.image];
          const activeImage =
            hoveredProject === project.id
              ? images[frame % images.length]
              : images[0];
          const isMami = project.id === "mami-matcha";
          const isMooshie = project.id === "mooshie-co";

          return (
            <motion.article
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link
                to={`/work/${project.id}`}
                className="group block overflow-hidden rounded-[2.2rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.45)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[1.28/1] overflow-hidden rounded-[2.2rem]">
                  {isMami ? (
                    <video
                      src="/mami%20matcha%20portfolio%20cover.mov"
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  ) : isMooshie ? (
                    <img
                      src="/mooshie%20portfolio%20cover.jpg"
                      alt={project.name}
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                    />
                  ) : images.map((image, imageIndex) => {
                    const visible = image === activeImage;

                    return (
                      <img
                        key={image}
                        src={image}
                        alt={`${project.name} preview ${imageIndex + 1}`}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                          visible ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                        }`}
                      />
                    );
                  })}

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_36%,rgba(45,36,31,0.58)_100%)]" />
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-[#f7f4ee]">
                    <div>
                      <h2
                        className="text-[1.8rem] font-extralight leading-[0.95] tracking-[-0.05em]"
                        style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                      >
                        {project.name.toLowerCase()}
                      </h2>
                      <div className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-[rgba(247,244,238,0.8)]">
                        {project.category}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="mb-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>

                <div className="px-6 py-5">
                  <div className="flex items-center justify-between gap-4 text-[0.72rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                    <span>{project.year}</span>
                    <span>View work</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </section>

      <section className="pt-14 pb-12">
        <div className="mb-8 text-[1.15rem] uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
          Personal Stories
        </div>
        <div id="storyteller" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {personalWorks.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.04 * index }}
              className="overflow-visible"
            >
              {(() => {
                const centeredMedia =
                  work.title === "Postcards From Cavallo Point" ||
                  work.title === "The Art of Meaningful Connections" ||
                  work.title === "A Love Letter to San Francisco, the City I Almost Left Behind";
                const mediaClass = centeredMedia
                  ? "h-full w-full object-cover object-center transition-transform duration-500"
                  : "h-full w-full object-cover transition-transform duration-500";

                return work.link ? (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="relative h-[11.25rem] overflow-hidden rounded-[2.1rem] md:h-[12.75rem]">
                    {work.video ? (
                      <video
                        src={work.video}
                        className={`${mediaClass} group-hover:scale-[1.03]`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                    ) : (
                      <img
                        src={work.image}
                        alt={work.title}
                        className={`${mediaClass} group-hover:scale-[1.03]`}
                      />
                    )}
                  </div>
                  <div className="px-1 pt-3">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <div
                        className="text-[0.92rem] leading-tight tracking-[0.02em] text-[var(--foreground)]"
                        style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                      >
                        {work.title}
                      </div>
                      <div className="text-[0.58rem] uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                        {work.format}
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div>
                  <div className="relative h-[11.25rem] overflow-hidden rounded-[2.1rem] md:h-[12.75rem]">
                    {work.video ? (
                      <video
                        src={work.video}
                        className={`${mediaClass} hover:scale-[1.03]`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                    ) : (
                      <img
                        src={work.image}
                        alt={work.title}
                        className={`${mediaClass} hover:scale-[1.03]`}
                      />
                    )}
                  </div>
                  <div className="px-1 pt-3">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <div
                        className="text-[0.92rem] leading-tight tracking-[0.02em] text-[var(--foreground)]"
                        style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                      >
                        {work.title}
                      </div>
                      <div className="text-[0.58rem] uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                        {work.format}
                      </div>
                    </div>
                  </div>
                </div>
              );
              })()}
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
