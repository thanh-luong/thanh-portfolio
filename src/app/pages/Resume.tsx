import { motion } from "motion/react";
import { capabilities, experience, profile } from "../data/portfolio";

export function Resume() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pb-8"
      >
        <div>
          <h1
            className="text-[2.2rem] font-extralight leading-[1] tracking-[-0.06em] md:text-[4.2rem]"
            style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
          >
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted-foreground)]">
            {profile.title}
          </p>
          <a
            href={`mailto:${profile.email}?subject=Resume%20Request`}
            className="cargo-link mt-4 inline-block text-sm"
          >
            Request PDF resume
          </a>
        </div>
      </motion.div>

      <section className="py-8">
        <div>
          {experience.map((item) => (
            <div
              key={`${item.role}-${item.company}`}
              className="grid gap-2 py-4 md:grid-cols-[220px_1fr]"
            >
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                {item.period}
              </div>
              <div>
                <h2 className="text-lg">{item.role}</h2>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{item.company}</p>
                <p className="mt-3 max-w-2xl text-sm leading-6">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm text-[var(--muted-foreground)]">
          {capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
