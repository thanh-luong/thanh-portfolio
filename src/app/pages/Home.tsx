import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { featuredProjects, profile } from "../data/portfolio";

const titleLinks = [
  { label: "self-starter," },
  { label: "world-builder," },
  { label: "storyteller." },
];

export function Home() {
  const [activeTitle, setActiveTitle] = useState("world-builder,");
  const homeInk = "#4b433d";
  const mamiProject = featuredProjects.find((project) => project.id === "mami-matcha");
  const mooshieProject = featuredProjects.find((project) => project.id === "mooshie-co");
  const chamProject = featuredProjects.find((project) => project.id === "cham-studio");
  const homeProjects = [mamiProject, mooshieProject, chamProject].filter(Boolean);

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f4ee_0%,#f7f4ee_72%,#f3ece0_88%,#efe6d9_100%)]">
      <div
        className="relative overflow-hidden bg-[#f7f4ee]"
        style={{ minHeight: "calc(max(100vh, 100vw * 1668 / 1718) + 450px)" }}
      >
        <div className="absolute inset-0 bg-[#f7f4ee]" />
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute right-0 top-0 aspect-[1718/1668] w-screen max-w-none translate-y-[450px]">
            <img
              src="/Thanh%20Luong%20Cover%20v3.png"
              alt="Thanh Luong cover cutout"
              className="absolute inset-0 h-full w-full object-contain object-bottom"
              style={{
                filter: "drop-shadow(0 10px 24px rgba(0, 0, 0, 0.18))",
              }}
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-10">
          <img
            src="/world%20builder%20post%20its.png"
            alt="World builder notes"
            className={`absolute right-[calc(6%+60px)] top-[calc(20%-110px)] w-[clamp(15.246rem,24.3936vw,27.4428rem)] transition-opacity duration-200 ${
              activeTitle === "world-builder," ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src="/storytelling%20post%20its.png"
            alt="Storytelling notes"
            className={`absolute right-[calc(6%+55px)] top-[calc(20%-98px)] w-[clamp(16.335rem,26.136vw,29.403rem)] transition-opacity duration-200 ${
              activeTitle === "storyteller." ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: "translateX(-5px)" }}
          />
        </div>
        <div className="relative z-10 flex min-h-screen items-start px-5 pt-[15.6875rem] md:px-8 md:pt-[20.6875rem]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl pl-2 md:pl-4 lg:pl-6"
          >
            <div className="pointer-events-none relative z-0 flex items-end">
              <h1
                className="text-[clamp(2.7rem,5.8vw,5.5rem)] font-light leading-[0.9] tracking-[-0.06em]"
                style={{
                  fontFamily: '"Times New Roman", Georgia, serif',
                  color: homeInk,
                }}
              >
                Thanh Luong
              </h1>
            </div>

            <div
              className="relative z-10 mt-2 ml-[0.7rem] flex flex-wrap items-end gap-x-3 gap-y-1 text-[clamp(1.35rem,2.9vw,2.75rem)] font-semibold leading-[0.95] tracking-[-0.03em] md:mt-3 md:ml-[1rem] md:flex-nowrap"
              onMouseLeave={() => setActiveTitle("world-builder,")}
              style={{
                fontFamily: '"Times New Roman", Georgia, serif',
                color: homeInk,
              }}
            >
              <span
                className="mr-1 text-[clamp(1.35rem,2.9vw,2.75rem)] font-light leading-none"
                style={{
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontStyle: "italic",
                  color: homeInk,
                }}
              >
                is a
              </span>
              {titleLinks.map((item) => (
                <span
                  key={item.label}
                  onMouseEnter={() => setActiveTitle(item.label)}
                  className={`rounded-full px-1.5 py-0.5 underline underline-offset-[0.18em] transition-all duration-200 ${
                    activeTitle === item.label
                      ? "bg-[rgba(75,67,61,0.14)] backdrop-blur-[1px]"
                      : ""
                  }`}
                  style={{
                    color: homeInk,
                    textDecorationThickness: "0.06em",
                    textShadow:
                      activeTitle === item.label
                        ? "0 0 10px rgba(75, 67, 61, 0.22)"
                        : "none",
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      <section className="px-5 py-20 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative -top-[380px] mb-[-380px] mx-auto max-w-[72rem] text-[clamp(1.75rem,3.6vw,2.95rem)] leading-[1.05] tracking-[-0.04em] text-[rgba(75,67,61,0.7)]"
          style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
        >
          I shape how ideas take form in the real world...
        </motion.p>
      </section>

      {homeProjects.length > 0 && (
        <section className="px-[25px] pb-24 pt-6 md:px-[50px] md:pb-32 -mt-[40px]">
          <div className="mx-auto w-full max-w-none">
            <div className="grid gap-6 xl:grid-cols-3">
              {homeProjects.map((project, index) => {
                const isMami = project.id === "mami-matcha";
                const isMooshie = project.id === "mooshie-co";
                const description = isMami
                  ? "A San Francisco-based matcha pop-up designed as an immersive, community-driven space. Each event blends drinks, spatial flow, and storytelling into a shared experience."
                  : isMooshie
                    ? "A plush toy brand exploring how ideas can move from imagination into physical form. At its core, Mooshie encourages young creators to bring their ideas to life."
                    : project.id === "cham-studio"
                      ? "An online vintage bag studio rooted in personal style, where each piece was selected, styled, and photographed as part of a growing visual identity. It explores how taste is formed, refined, and expressed through curation."
                      : project.description;
                const category = isMami
                  ? "Pop-up / Community / Storytelling"
                  : project.category;

                return (
                  <Link key={project.id} to={`/work/${project.id}`} className="block w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 52 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 1.1, delay: index * 0.08, ease: "easeOut" }}
                      className="overflow-hidden rounded-[2.5rem] bg-[rgba(255,255,255,0.38)]"
                    >
                      {isMami ? (
                        <video
                          src="/mami%20matcha%20portfolio%20cover.mov"
                          className="h-[24rem] w-full object-cover md:h-[28rem]"
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
                          className="h-[24rem] w-full object-cover md:h-[28rem]"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.name}
                          className="h-[24rem] w-full object-cover md:h-[28rem]"
                        />
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.65 }}
                      transition={{ duration: 0.85, delay: 0.12 + index * 0.08, ease: "easeOut" }}
                      className="pt-6"
                    >
                      <h2
                        className="text-[1.75rem] font-extralight leading-[1] tracking-[-0.05em] md:text-[2.25rem]"
                        style={{ fontFamily: '"Times New Roman", Georgia, serif', color: homeInk }}
                      >
                        {project.name.toLowerCase()}
                      </h2>
                      <div className="mt-3 text-[0.78rem] uppercase tracking-[0.18em] text-[rgba(75,67,61,0.66)]">
                        {category}
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.75 }}
                      transition={{ duration: 0.85, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                      className="pt-5 text-[0.96rem] leading-7 text-[rgba(75,67,61,0.8)]"
                    >
                      {description}
                    </motion.p>
                  </Link>
                );
              })}
            </div>
            <div className="pt-10 text-left">
              <Link
                to="/work"
                className="text-[0.78rem] uppercase tracking-[0.18em] underline underline-offset-[0.22em]"
                style={{ color: homeInk }}
              >
                See Full Works
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="px-6 pb-8 pt-10 md:px-8">
        <div
          className="flex w-full flex-col gap-8 md:flex-row md:items-end md:justify-between"
          style={{ color: homeInk }}
        >
          <div className="max-w-xl text-left">
            <div className="mb-3 text-xs uppercase tracking-[0.24em]">
              {profile.location}
            </div>
            <p className="max-w-[42rem] text-sm leading-6">
              Building immersive, story-driven experiences across brand, product, and space.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="transition-opacity hover:opacity-80"
                aria-label="Email"
              >
                <MailIcon sx={{ fontSize: 20, color: homeInk }} />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="Instagram"
              >
                <InstagramIcon sx={{ fontSize: 20, color: homeInk }} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="LinkedIn"
              >
                <LinkedInIcon sx={{ fontSize: 20, color: homeInk }} />
              </a>
            </div>
            <div className="text-xs uppercase tracking-[0.18em]">
              © 2026 {profile.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
