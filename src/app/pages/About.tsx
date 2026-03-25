import { motion } from "motion/react";

const aboutBody = [
  "My work lives at the intersection of storytelling, design, and production, shaping experiences that exist both online and in the real world. I am drawn to creating moments that feel intentional, where environment, visuals, and narrative come together as one.",
  "I have explored this through different forms, from curating and growing a vintage fashion community to designing products shipped worldwide, and now through mamī, a San Francisco-based matcha pop-up where I create immersive, community-driven experiences.",
  "Each project has refined how I see, helping me understand what resonates and pushing ideas further than where they began. I come from a technical background, which shapes how I think about systems, interaction, and how digital and physical experiences can connect.",
  "Alongside building mamī, I am studying film production to deepen how I tell stories and bring ideas to life.",
];

const capabilities = [
  {
    title: "Creative Direction",
    description:
      "Shaping ideas into cohesive worlds through visual language, mood, and production detail.",
  },
  {
    title: "Experiential Work",
    description: "Designing physical and digital moments people can step into.",
  },
  {
    title: "Visual Storytelling",
    description: "Building narrative across stills, motion, and content.",
  },
  {
    title: "Building from Zero",
    description:
      "Taking ideas from concept to launch across product, brand, and experience.",
  },
];

export function About() {
  return (
    <div className="mx-auto w-full max-w-none px-[25px] py-8 md:px-[50px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pb-6">
          <h1
            className="text-[2.2rem] font-extralight leading-[1] tracking-[-0.06em] md:text-[4.2rem]"
            style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
          >
            About Thanh.
          </h1>
        </div>

        <section className="max-w-[76rem]">
          <div
            className="max-w-[42rem] text-[2rem] font-extralight italic leading-[0.98] tracking-[-0.05em] text-[var(--foreground)] md:text-[2.88rem]"
            style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
          >
            on building ideas into the real world
          </div>

          <div className="mt-8 max-w-[42rem] space-y-3 text-base leading-6 text-[var(--muted-foreground)]">
            {aboutBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 h-px w-full max-w-[42rem] bg-[rgba(75,67,61,0.12)]" />
        </section>

        <section className="pt-12">
          <div
            className="max-w-[42rem] text-[2rem] font-extralight italic leading-[0.98] tracking-[-0.05em] text-[var(--foreground)] md:text-[2.88rem]"
            style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
          >
            focus
          </div>

          <div className="mt-6 grid max-w-[68rem] gap-x-10 gap-y-10 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="max-w-[30rem]"
              >
                <h2
                  className="text-[1.35rem] font-extralight leading-[1.02] tracking-[-0.04em] text-[var(--foreground)]"
                  style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
                >
                  {capability.title}
                </h2>
                <p className="mt-3 max-w-[26rem] text-[0.98rem] leading-6 text-[var(--muted-foreground)]">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
