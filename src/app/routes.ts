import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";
import { MamiJournalEntry } from "./pages/MamiJournalEntry";
import { HiddenResume } from "./pages/HiddenResume";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "work", Component: Projects },
      { path: "work/:projectId", Component: ProjectDetail },
      { path: "work/mami-matcha/the-part-i-dont-usually-show", Component: MamiJournalEntry },
      { path: "about", Component: About },
      { path: "about/gcf-2026-archive-room", Component: HiddenResume },
      { path: "resume", Component: Resume },
      { path: "contact", Component: Contact },
    ],
  },
]);
