import { useEffect } from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";

const resumePdfPath = "/GCF%202026%20Thanh%20Luong%20Resume%20Final.pdf";
const embeddedResumePath = `${resumePdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-fit`;

export function HiddenResume() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow,noarchive";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f4ee_0%,#f3ece0_100%)] px-5 py-8 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-[78rem]"
      >
        <h1
          className="mb-5 text-[2.2rem] font-extralight leading-[1] tracking-[-0.06em] md:text-[4.2rem]"
          style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
        >
          Resume.
        </h1>

        <div className="mx-auto w-full max-w-[58rem]">
          <div className="mb-4 flex items-center justify-end">
            <a
              href={resumePdfPath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(75,67,61,0.12)] bg-[rgba(247,244,238,0.96)] px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--foreground)] transition-opacity hover:opacity-80"
            >
              <Download size={14} />
              Download
            </a>
          </div>

          <iframe
            src={embeddedResumePath}
            title="Thanh Luong Resume"
            className="h-[78vh] w-full border-0 bg-[#f7f4ee]"
            style={{ backgroundColor: "#f7f4ee", colorScheme: "light" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
