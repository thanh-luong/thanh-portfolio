import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "work", Component: Projects },
      { path: "work/:projectId", Component: ProjectDetail },
      { path: "about", Component: About },
      { path: "resume", Component: Resume },
      { path: "contact", Component: Contact },
    ],
  },
]);
