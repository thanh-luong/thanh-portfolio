import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { profile } from "../data/portfolio";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("_subject", "Portfolio inquiry from a new connection");
    formData.set("_captcha", "false");
    formData.set("_template", "table");

    try {
      const response = await fetch(`https://formsubmit.co/${profile.email}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

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
            Say hello.
          </h1>
        </div>

        <section className="max-w-[42rem]">
          <p className="max-w-[38rem] text-base leading-6 text-[var(--muted-foreground)]">
            I&apos;m always open to conversations, ideas, and unexpected connections.
            Whether it&apos;s a project, a thought, or something you&apos;re figuring out,
            feel free to reach out.
          </p>

          <div className="mt-8">
            <div
              className="text-[1.07rem] italic tracking-[0.005em] text-[var(--muted-foreground)]"
              style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
            >
              you can reach me here,
            </div>

            <div className="mt-4 flex items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="transition-opacity hover:opacity-75"
                aria-label="Email"
              >
                <MailIcon sx={{ fontSize: 28, color: "#4b433d" }} />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-75"
                aria-label="Instagram"
              >
                <InstagramIcon sx={{ fontSize: 28, color: "#4b433d" }} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-75"
                aria-label="LinkedIn"
              >
                <LinkedInIcon sx={{ fontSize: 28, color: "#4b433d" }} />
              </a>
            </div>
          </div>
        </section>

        <section className="pt-12">
          <form
            onSubmit={handleSubmit}
            className="max-w-[42rem] space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-[999px] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.34)] px-5 py-4 text-[0.98rem] text-[var(--foreground)] outline-none placeholder:text-[rgba(75,67,61,0.5)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-[999px] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.34)] px-5 py-4 text-[0.98rem] text-[var(--foreground)] outline-none placeholder:text-[rgba(75,67,61,0.5)]"
            />
            <textarea
              name="message"
              rows={7}
              placeholder="What’s on your mind?"
              required
              className="w-full rounded-[1.8rem] border border-[rgba(75,67,61,0.12)] bg-[rgba(255,255,255,0.34)] px-5 py-4 text-[0.98rem] text-[var(--foreground)] outline-none placeholder:text-[rgba(75,67,61,0.5)]"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[var(--foreground)] underline underline-offset-[0.25em]"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
            {status === "sent" && (
              <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                Message sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </section>
      </motion.div>
    </div>
  );
}
