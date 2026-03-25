import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import { featuredProjects, getFeaturedProjectById } from "../data/portfolio";

function ChannelIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-current stroke-[1.7]">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.8" className="fill-current stroke-none" />
      </svg>
    );
  }

  if (label === "Linktree") {
    return (
      <img
        src="/linktree%20logo.webp"
        alt=""
        aria-hidden="true"
        className="h-8 w-8 opacity-60"
      />
    );
  }

  if (label === "Website") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-current stroke-[1.7]">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.8 12h16.4" />
        <path d="M12 3.5c2.4 2.3 3.8 5.3 3.8 8.5s-1.4 6.2-3.8 8.5" />
        <path d="M12 3.5c-2.4 2.3-3.8 5.3-3.8 8.5s1.4 6.2 3.8 8.5" />
      </svg>
    );
  }

  if (label === "Depop") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
        <path d="M14.2 3.2h4.4c.9 0 1.6.7 1.6 1.6v14.4c0 .9-.7 1.6-1.6 1.6H9.3c-3.4 0-5.9-2.5-5.9-5.9S5.9 9 9.3 9h4.9V4.8c0-.9.7-1.6 1.6-1.6Zm0 9.3H9.6c-1.4 0-2.4 1-2.4 2.4 0 1.5 1 2.5 2.4 2.5h4.6v-4.9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
      <path d="M14.8 3.5c1 1.6 2.1 2.7 3.8 3.1v2.8c-1.2 0-2.5-.4-3.8-1.2v5.8c0 3.3-2.2 5.6-5.6 5.6-3 0-5.2-2.1-5.2-4.9 0-2.9 2.2-5 5.3-5 .4 0 .8 0 1.2.1v3c-.4-.1-.7-.1-1-.1-1.3 0-2.3.9-2.3 2 0 1.2.9 2 2.1 2 1.4 0 2.2-.9 2.2-2.7V3.5h3.3Z" />
    </svg>
  );
}

export function ProjectDetail() {
  const { projectId = "" } = useParams();
  if (projectId === "mami-matcha-sf") {
    return <Navigate to="/work/mami-matcha" replace />;
  }
  const project = getFeaturedProjectById(projectId);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const galleryImages = project.galleryImages ?? [project.image];
  const isMami = project.id === "mami-matcha";
  const isMooshie = project.id === "mooshie-co";
  const mamiChannels = [
    {
      label: "Instagram",
      href: project.link,
      state: "live",
    },
    {
      label: "Linktree",
      href: "https://linktr.ee/mamimatcha",
      state: "live",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@mamimatchasf",
      state: "live",
    },
    {
      label: "Website",
      href: "",
      state: "coming soon",
    },
  ];
  const projectChannels = isMami
    ? mamiChannels
    : project.id === "cham-studio"
      ? [
          { label: "Instagram", href: project.link, state: "live" },
          { label: "Depop", href: "https://www.depop.com/chamstudio/", state: "live" },
        ]
      : [
          { label: "Website", href: project.link, state: "live" },
          { label: "Instagram", href: "https://www.instagram.com/mooshieco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", state: "live" },
        ];
  const mamiOpening = [
    "I create spaces where people can step in and feel something.\nmamī matcha is a San Francisco-based pop-up where drinks, environment, and storytelling come together to create shared experiences.",
    "I’ve hosted a series of pop-ups bringing together 30–100 guests at a time, each one designed from concept to execution, including menu, spatial flow, visual identity, and content. The goal is not just to serve matcha, but to create a space people remember being part of.",
  ];
  const mamiTimeline = [
    {
      date: "February 2025",
      title: "the beginning",
      note:
        "welcome to mamī, a space where a matcha latte can spark connection",
      cta: "founder note",
      href: "https://www.instagram.com/p/DNW0mhfvBhY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      video: "/mami%20origin%20slide%201.mp4",
    },
    {
      date: "April 2025",
      title: "the part i don’t usually show",
      note:
        "there was a version of this that never happened. this is what almost stopped me.",
      cta: "journal entry",
      href: "https://www.instagram.com/p/DNmPqN4yPzq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image: "/1.PNG",
      imagePosition: "center -90px",
    },
    {
      date: "July 2025",
      title: "mamī no. 1 — the first pour",
      note: "35 people, one room, and the first version of mamī",
      cta: "field recording",
      href: "https://www.instagram.com/p/DPKeDMzkuLz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      video: "/no.%201%20the%20first%20pour%20slide%201.mov",
    },
    {
      date: "October 2025",
      title: "everything that went wrong",
      note:
        "delays, mistakes, figuring things out in real time",
      cta: "process study",
      href: "https://www.tiktok.com/@mamimatchasf/video/7569511256055385374",
      video: "/lessons%20from%20the%20first%20three%20portfolio%20cover.mov",
      videoPosition: "center -125px",
    },
    {
      date: "Present",
      title: "holding both",
      note:
        "i was getting overwhelmed doing this alone. the people reminded me why i started",
      cta: "journal entry",
      href: "https://www.instagram.com/p/DTRfib8kU_8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image: "/art%20vs%20artist.PNG",
      imagePosition: "center -90px",
    },
    {
      date: "Present",
      title: "scenes from mamī matcha",
      note: `mamī no. 4 — opening pages
a vision boarding matcha cafe`,
      cta: "field recording",
      href: "https://www.instagram.com/p/DUcDBlcidvf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      video: "/mami%20matcha%20portfolio%20cover.mov",
    },
  ];
  const mamiFeaturedGroups = [
    {
      heading: "start here",
      items: mamiTimeline.filter((item) => item.title === "the beginning"),
    },
    {
      heading: "then this",
      items: mamiTimeline.filter((item) => item.title === "mamī no. 1 — the first pour"),
    },
    {
      heading: "then explore",
      items: [
        mamiTimeline.find((item) => item.title === "the part i don’t usually show"),
        mamiTimeline.find((item) => item.title === "everything that went wrong"),
        mamiTimeline.find((item) => item.title === "holding both"),
        mamiTimeline.find((item) => item.title === "scenes from mamī matcha"),
      ].filter(Boolean),
    },
  ];
  const renderMamiFeatureCard = (item: (typeof mamiTimeline)[number], key: string) => (
    <motion.article
      key={key}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="flex min-h-[20rem] flex-col overflow-hidden rounded-[2rem] border border-[rgba(75,67,61,0.12)] bg-transparent"
    >
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-[20rem] flex-1 flex-col bg-transparent"
        >
          {item.video ? (
            <video
              src={item.video}
              className="h-[14.75rem] w-full object-cover"
              style={item.videoPosition ? { objectPosition: item.videoPosition } : undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          ) : item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="h-[14.75rem] w-full object-cover"
              style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
            />
          ) : (
            <div className="h-[14.75rem] w-full bg-[linear-gradient(135deg,rgba(210,201,188,0.65),rgba(243,236,224,0.95))]" />
          )}
          <div className="flex flex-1 flex-col bg-[rgba(255,255,255,0.5)] px-5 py-2.5">
            <h3
              className="text-[1.2rem] font-extralight leading-[0.95] tracking-[-0.04em]"
              style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
            >
              {item.title}
            </h3>
            <p className="mt-1.5 whitespace-pre-line text-sm leading-5 text-[var(--muted-foreground)]">
              {item.note}
            </p>
            <div className="mt-auto pt-2 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--foreground)] underline underline-offset-[0.28em]">
              {item.cta}
              <ArrowUpRight size={14} />
            </div>
          </div>
        </a>
      ) : (
        <div className="flex min-h-[20rem] flex-1 flex-col bg-transparent">
          {item.video ? (
            <video
              src={item.video}
              className="h-[14.75rem] w-full object-cover"
              style={item.videoPosition ? { objectPosition: item.videoPosition } : undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          ) : item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="h-[14.75rem] w-full object-cover"
              style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
            />
          ) : (
            <div className="h-[14.75rem] w-full bg-[linear-gradient(135deg,rgba(210,201,188,0.65),rgba(243,236,224,0.95))]" />
          )}
          <div className="flex flex-1 flex-col bg-[rgba(255,255,255,0.5)] px-5 py-2.5">
            <h3
              className="text-[1.2rem] font-extralight leading-[0.95] tracking-[-0.04em]"
              style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
            >
              {item.title}
            </h3>
            <p className="mt-1.5 whitespace-pre-line text-sm leading-5 text-[var(--muted-foreground)]">
              {item.note}
            </p>
            <button
              type="button"
              className="mt-auto pt-2 text-left text-[0.72rem] uppercase tracking-[0.18em] text-[var(--foreground)] underline underline-offset-[0.28em]"
            >
              {item.cta}
            </button>
          </div>
        </div>
      )}
    </motion.article>
  );
  const mamiMilestones = [
    {
      date: "february 2025",
      note: "mamī conceptualized",
      placement: "above",
      stemHeight: "h-14",
      dotSize: "h-3.5 w-3.5",
      textOffsetClass: "pb-6",
    },
    {
      date: "march 2025",
      note: "applications denied",
      placement: "below",
      stemHeight: "h-10",
      dotSize: "h-3 w-3",
      textOffsetClass: "top-[calc(50%+2rem)]",
    },
    {
      date: "april 2025",
      note: "losing direction",
      placement: "above",
      stemHeight: "h-12",
      dotSize: "h-3.5 w-3.5",
      textOffsetClass: "pb-7",
    },
    {
      date: "may 19, 2025",
      note: "japan reset, product r&d",
      placement: "below",
      stemHeight: "h-16",
      dotSize: "h-4 w-4",
      textOffsetClass: "top-[calc(50%+2.4rem)]",
    },
    {
      date: "july 28, 2025",
      note: "private launch + tasting",
      placement: "above",
      stemHeight: "h-13",
      dotSize: "h-3 w-3",
      textOffsetClass: "pb-6",
    },
    {
      date: "august 14, 2025",
      note: "mamī launches",
      placement: "below",
      stemHeight: "h-11",
      dotSize: "h-5.5 w-5.5",
      textOffsetClass: "top-[calc(50%+2.15rem)]",
    },
    {
      date: "september 6, 2025",
      note: "no. 1 — the first pour",
      placement: "above",
      stemHeight: "h-15",
      dotSize: "h-3 w-3",
      textOffsetClass: "pb-8",
    },
    {
      date: "october 19, 2025",
      note: "no. 2 — october stories (collab)",
      placement: "below",
      stemHeight: "h-13",
      dotSize: "h-3.5 w-3.5",
      textOffsetClass: "top-[calc(50%+2.25rem)]",
    },
    {
      date: "october 25, 2025",
      note: "no. 3 — fall edition (collab)",
      placement: "above",
      stemHeight: "h-12",
      dotSize: "h-3 w-3",
      textOffsetClass: "pb-7",
    },
    {
      date: "january 3, 2026",
      note: "no. 4 — opening pages",
      placement: "below",
      stemHeight: "h-16",
      dotSize: "h-4 w-4",
      textOffsetClass: "top-[calc(50%+2.5rem)]",
    },
    {
      date: "january 31, 2026",
      note: "no. 5 — 313 wellness market (collab)",
      placement: "above",
      stemHeight: "h-14",
      dotSize: "h-3.5 w-3.5",
      textOffsetClass: "pb-8",
    },
    {
      date: "march 14, 2026",
      note: "no. 6 — [solidcore] (collab)",
      placement: "below",
      stemHeight: "h-18",
      dotSize: "h-6 w-6",
      textOffsetClass: "top-[calc(50%+2.8rem)]",
    },
    {
      date: "present day",
      note: "still building and becoming",
      placement: "above",
      stemHeight: "h-13",
      dotSize: "h-3.5 w-3.5",
      textOffsetClass: "pb-7",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-none px-[25px] py-8 md:px-[50px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)] transition-opacity hover:opacity-70"
        >
          <ArrowLeft size={14} />
          Back to works
        </Link>

        <div className="mt-8 pb-6">
          <h1
            className="text-[2.2rem] font-extralight leading-[1] tracking-[-0.06em] md:text-[4.2rem]"
            style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
          >
            {project.name.toLowerCase()}
          </h1>
          {isMami ? (
            <div className="mt-5 flex flex-wrap items-center gap-x-10 text-[0.78rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
              <div>2025 - present</div>
              <div>{project.category}</div>
            </div>
          ) : (
            <div className="mt-5 flex flex-wrap items-center gap-x-10 text-[0.78rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
              <div>{project.year}</div>
              <div>{project.category}</div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {isMami ? (
            <div>
              <div className="mt-[2px] max-w-[68rem] text-base leading-6 text-[var(--muted-foreground)]">
                <p className="whitespace-pre-line">{mamiOpening[0]}</p>
                <p className="mt-4">{mamiOpening[1]}</p>
              </div>

              <div className="mx-auto mt-5 w-full max-w-[44%] overflow-hidden rounded-[2.1rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.4)]">
                <video
                  src="/mami%20matcha%20portfolio%20cover.mov"
                  className="aspect-video w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-[10rem_minmax(0,1fr)] lg:items-center">
                <div className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                  Roles
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[rgba(255,255,255,0.42)] bg-[rgba(255,255,255,0.42)] px-3.5 py-1.5 text-[0.9rem] leading-none text-[var(--muted-foreground)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[10rem_minmax(0,1fr)] lg:items-center">
                <div className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                  Channels
                </div>
                <div className="flex flex-wrap gap-3">
                  {projectChannels.map((channel) =>
                    channel.href ? (
                      <a
                        key={channel.label}
                        href={channel.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex h-[5.3rem] w-[8.1rem] flex-col items-center justify-center rounded-[999px] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(245,240,233,0.72))] text-center text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <div className="mb-1.5 text-[rgba(0,0,0,0.58)]">
                          <ChannelIcon label={channel.label} />
                        </div>
                        <span
                          className="text-[0.72rem] leading-[1] tracking-[-0.03em] text-[var(--foreground)]"
                          style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                        >
                          {channel.label === "Website" ? "website" : channel.label.toLowerCase()}
                        </span>
                      </a>
                    ) : (
                      <div
                        key={channel.label}
                        className="flex h-[5.3rem] w-[8.1rem] flex-col items-center justify-center rounded-[999px] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(245,240,233,0.72))] px-3 text-center text-[var(--foreground)]"
                      >
                        <div className={`mb-1.5 text-[rgba(0,0,0,0.58)] ${channel.label === "Website" ? "translate-y-[5px]" : ""}`}>
                          <ChannelIcon label={channel.label} />
                        </div>
                        <div className={`flex flex-col items-center ${channel.label === "Website" ? "translate-y-[5px]" : ""}`}>
                          <span
                            className="text-[0.72rem] leading-[1] tracking-[-0.03em] text-[var(--foreground)]"
                            style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                          >
                            {channel.label === "Website" ? "website" : channel.label.toLowerCase()}
                          </span>
                          {channel.label === "Website" && (
                            <span className="mt-1 text-[0.52rem] uppercase tracking-[0.18em] text-[rgba(75,67,61,0.4)]">
                              SOON
                            </span>
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-7 h-px w-full bg-[rgba(75,67,61,0.12)]" />

            </div>
          ) : (
            <div>
              <div className="mt-[2px] max-w-[68rem] space-y-3 text-base leading-6 text-[var(--muted-foreground)]">
                {project.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {project.impact && (
                <p className="mt-4 max-w-[72rem] text-sm leading-6 text-[var(--muted-foreground)]">
                  {project.impact}
                </p>
              )}

              {isMooshie ? (
                <div className="mx-auto mt-5 w-full max-w-[44%]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block overflow-hidden rounded-[2.1rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.4)] transition-opacity hover:opacity-90"
                  >
                    <img
                      src="/mooshie%20portfolio%20cover.jpg"
                      alt={project.name}
                      className="aspect-video w-full object-cover"
                    />
                    <div
                      className="pointer-events-none absolute bottom-1 left-5 flex items-center gap-2 text-[0.92rem] font-extralight tracking-[-0.04em] text-[rgba(255,255,255,0.72)] transition-opacity duration-300 group-hover:text-[rgba(255,255,255,0.86)] md:bottom-2 md:left-6 md:text-[1.22rem]"
                      style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                    >
                      <span>mooshie-company.com</span>
                      <ArrowUpRight size={18} strokeWidth={1.5} />
                    </div>
                  </a>
                </div>
              ) : (
                <div className="mx-auto mt-5 w-full max-w-[44%] overflow-hidden rounded-[2.1rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.4)]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-video w-full object-cover"
                  />
                </div>
              )}

              <div className="mt-5 grid gap-3 lg:grid-cols-[10rem_minmax(0,1fr)] lg:items-center">
                <div className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                  Roles
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[rgba(255,255,255,0.42)] bg-[rgba(255,255,255,0.42)] px-3.5 py-1.5 text-[0.9rem] leading-none text-[var(--muted-foreground)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[10rem_minmax(0,1fr)] lg:items-center">
                <div className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                  Channels
                </div>
                <div className="flex flex-wrap gap-3">
                  {projectChannels.map((channel) =>
                    channel.href ? (
                      <a
                        key={channel.label}
                        href={channel.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex h-[5.3rem] w-[8.1rem] flex-col items-center justify-center rounded-[999px] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(245,240,233,0.72))] text-center text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <div className="mb-1.5 text-[rgba(0,0,0,0.58)]">
                          <ChannelIcon label={channel.label} />
                        </div>
                        <span
                          className="text-[0.72rem] leading-[1] tracking-[-0.03em] text-[var(--foreground)]"
                          style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                        >
                          {channel.label === "Website" ? "website" : channel.label.toLowerCase()}
                        </span>
                      </a>
                    ) : (
                      <div
                        key={channel.label}
                        className="flex h-[5.3rem] w-[8.1rem] flex-col items-center justify-center rounded-[999px] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(245,240,233,0.72))] px-3 text-center text-[var(--foreground)]"
                      >
                        <div className={`mb-1.5 text-[rgba(0,0,0,0.58)] ${channel.label === "Website" ? "translate-y-[5px]" : ""}`}>
                          <ChannelIcon label={channel.label} />
                        </div>
                        <div className={`flex flex-col items-center ${channel.label === "Website" ? "translate-y-[5px]" : ""}`}>
                          <span
                            className="text-[0.72rem] leading-[1] tracking-[-0.03em] text-[var(--foreground)]"
                            style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                          >
                            {channel.label === "Website" ? "website" : channel.label.toLowerCase()}
                          </span>
                          {channel.label === "Website" && (
                            <span className="mt-1 text-[0.52rem] uppercase tracking-[0.18em] text-[rgba(75,67,61,0.4)]">
                              SOON
                            </span>
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-7 h-px w-full bg-[rgba(75,67,61,0.12)]" />

            </div>
          )}

          {!isMami && galleryImages.length > 1 && (
            isMooshie ? (
              <div className="space-y-5">
                <div
                  className="text-[1.1rem] font-extralight leading-[1] tracking-[-0.04em] text-[var(--foreground)] md:text-[2.1rem]"
                  style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                >
                  from sketch to object
                </div>

                {galleryImages.slice(1, 2).map((image) => (
                  <div
                    key={image}
                    className="mt-[50px] ml-[calc(50%-22rem-200px)] grid w-full max-w-[34rem] items-center gap-4 md:grid-cols-[22rem_minmax(0,1fr)]"
                  >
                    <div className="w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.35)]">
                      <video
                        src={image}
                        className="aspect-[9/16] h-full w-full bg-[rgba(255,255,255,0.2)] object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                    </div>
                    <div
                      className="text-center text-[1.36rem] italic tracking-[-0.03em] text-[var(--muted-foreground)]"
                      style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                    >
                      final form
                    </div>
                  </div>
                ))}

                <div className="ml-[calc(50%+25px)] -mt-[81px] grid w-full max-w-[34rem] items-center gap-4 md:grid-cols-[minmax(0,1fr)_22rem]">
                  <div
                    className="text-center text-[1.36rem] italic tracking-[-0.03em] text-[var(--muted-foreground)]"
                    style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                  >
                    iterations
                  </div>
                  <div className="w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.35)]">
                    <video
                      src="/Mooshie%20Phases.mp4"
                      className="aspect-[9/16] h-full w-full bg-[rgba(255,255,255,0.2)] object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  </div>
                </div>

                <div className="pt-8 flex flex-wrap justify-center gap-5">
                  {galleryImages.slice(2).map((image, index, images) => (
                    <div
                      key={image}
                      className="w-full max-w-[20rem] overflow-hidden rounded-[2rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.35)]"
                    >
                      <img
                        src={image}
                        alt={project.name}
                        className="aspect-[1/1] h-full w-full object-cover"
                        style={index === images.length - 1 ? { objectPosition: "center -75px" } : undefined}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2">
                {galleryImages.slice(1).map((image) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-[2rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.35)]"
                  >
                    {image.endsWith(".mp4") || image.endsWith(".mov") ? (
                      <video
                        src={image}
                        className="aspect-[9/16] h-full w-full bg-[rgba(255,255,255,0.2)] object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                    ) : (
                      <img src={image} alt={project.name} className="aspect-[1.05/1] h-full w-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            )
          )}

          {!isMami && (
            <div className="pt-8 text-left">
              <Link
                to="/work#works-top"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[var(--foreground)] underline underline-offset-[0.25em]"
              >
                See Full Works
              </Link>
            </div>
          )}

          {isMami && (
            <section className="pt-8">
              <div>
                <div
                  className="text-[1.1rem] font-extralight leading-[1] tracking-[-0.04em] text-[var(--foreground)] md:text-[2.1rem]"
                  style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                >
                  featured work
                </div>
              </div>
              <div className="mt-5 space-y-6">
                <div className="mx-auto flex max-w-[48rem] flex-col gap-5">
                  {mamiFeaturedGroups.slice(0, 2).map((group) => (
                    <div
                      key={group.heading}
                      className="grid items-center gap-4 md:grid-cols-[8.5rem_minmax(0,1fr)]"
                    >
                      <div
                        className="text-left text-[1.36rem] italic tracking-[-0.03em] text-[var(--muted-foreground)]"
                        style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                      >
                        {group.heading}
                      </div>
                      <div>
                        {group.items.map((item) =>
                          renderMamiFeatureCard(item, `${group.heading}-${item.date}-${item.title}-card`),
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 space-y-3">
                  <div
                    className="text-center text-[1.36rem] italic tracking-[-0.03em] text-[var(--muted-foreground)]"
                    style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                  >
                    then explore
                  </div>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {mamiFeaturedGroups[2].items.map((item) =>
                      renderMamiFeatureCard(item, `Then explore-${item.date}-${item.title}-card`),
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <div
                  className="text-[1.1rem] font-extralight leading-[1] tracking-[-0.04em] text-[var(--foreground)] md:text-[2.1rem]"
                  style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                >
                  how mamī evolved
                </div>
                <p className="mt-4 max-w-[72rem] text-base leading-7 text-[var(--muted-foreground)]">
                  mamī wasn’t built all at once. it came together through iterations, setbacks, and small moments that shaped what it is now.
                </p>
              </div>

              <div className="relative mt-6 overflow-x-auto pb-4">
                <div className="relative min-w-[92rem] px-8 py-10">
                  <div className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-[rgba(39,33,28,0.6)]" />
                  <div className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[rgba(214,230,205,1)]" />
                  <div className="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[rgba(214,230,205,1)]" />

                  <div className="relative grid grid-cols-13 gap-3">
                    {mamiMilestones.map((item, index) => (
                      <motion.div
                        key={`${item.date}-${item.note}`}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55, delay: index * 0.04 }}
                        className="relative min-h-[22rem]"
                      >
                        {(() => {
                          const labelSideClass =
                            index % 2 === 0 ? "pl-8 text-left" : "pr-8 text-right";
                          const dotClass = `${item.dotSize} rounded-full bg-[rgba(214,230,205,1)]`;

                          return (
                            <>
                        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                          <div className={dotClass} />
                        </div>
                        {item.placement === "above" ? (
                          <>
                            <div className={`flex min-h-[calc(50%-0.5rem)] max-w-[12rem] -translate-y-[30px] flex-col justify-end whitespace-pre-line px-1 ${labelSideClass} ${item.textOffsetClass ?? "pb-3"}`}>
                              <div className="text-[0.72rem] uppercase leading-[1.4] tracking-[0.16em] text-[var(--muted-foreground)]">
                                {item.date}
                              </div>
                              <div
                                className="mt-1 whitespace-pre-line text-[1rem] font-extralight leading-[1.14] tracking-[-0.03em] text-[var(--foreground)]"
                                style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                              >
                                {item.note}
                              </div>
                            </div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
                              <div className={`w-px -translate-y-full bg-[rgba(39,33,28,0.72)] ${item.stemHeight}`} />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
                              <div className={`w-px bg-[rgba(39,33,28,0.72)] ${item.stemHeight}`} />
                            </div>
                            <div className={`absolute left-0 right-0 max-w-[12rem] translate-y-[30px] whitespace-pre-line px-1 ${labelSideClass} ${item.textOffsetClass ?? "top-[calc(50%+1.25rem)]"}`}>
                              <div className="text-[0.72rem] uppercase leading-[1.4] tracking-[0.16em] text-[var(--muted-foreground)]">
                                {item.date}
                              </div>
                              <div
                                className="mt-1 whitespace-pre-line text-[1rem] font-extralight leading-[1.14] tracking-[-0.03em] text-[var(--foreground)]"
                                style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                              >
                                {item.note}
                              </div>
                            </div>
                          </>
                        )}
                            </>
                          );
                        })()}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 text-left">
                <Link
                  to="/work#works-top"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[var(--foreground)] underline underline-offset-[0.25em]"
                >
                  See Full Works
                </Link>
              </div>
            </section>
          )}
        </div>
      </motion.div>
    </div>
  );
}
