import { Outlet, Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { profile } from "../data/portfolio";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = location.pathname === "/";
  const isMamiDetail = location.pathname === "/work/mami-matcha";
  const homeInk = "#4b433d";

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      window.requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ block: "start", behavior: "auto" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/work", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header
        className={`left-0 right-0 top-0 z-50 ${
          isHome
            ? "absolute"
            : "sticky border-b border-[var(--border)] bg-[var(--background)]"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-4 md:px-8">
          <Link
            to="/"
            className={`text-sm uppercase font-light tracking-[0.12em] ${
              isHome ? "" : ""
            }`}
            style={isHome ? { color: homeInk } : undefined}
          >
            Thanh Luong
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm uppercase font-light tracking-[0.12em] transition-colors ${
                  location.pathname === item.path
                    ? isHome
                      ? ""
                      : "text-[var(--foreground)]"
                    : isHome
                      ? ""
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
                style={
                  isHome
                    ? {
                        color:
                          location.pathname === item.path ? homeInk : "rgba(75, 67, 61, 0.72)",
                      }
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="p-1 md:hidden"
            style={isHome ? { color: homeInk } : undefined}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`px-5 py-3 md:hidden ${
              isHome
                ? "bg-[rgba(247,244,238,0.92)] backdrop-blur-sm"
                : "border-t border-[var(--border)]"
            }`}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-sm uppercase font-light tracking-[0.12em] transition-colors ${
                    location.pathname === item.path
                      ? isHome
                        ? ""
                        : "text-[var(--foreground)]"
                      : isHome
                        ? ""
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                  style={
                    isHome
                      ? {
                          color:
                            location.pathname === item.path ? homeInk : "rgba(75, 67, 61, 0.72)",
                        }
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {!isHome && !isMamiDetail && (
        <footer className={`${isMamiDetail ? "mt-12" : "mt-24"} px-6 py-8 md:px-8`}>
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
        </footer>
      )}
    </div>
  );
}
