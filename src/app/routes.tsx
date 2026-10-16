import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";

const basePath =
  import.meta.env.BASE_URL.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "") || "/";

export const router = createBrowserRouter(
  [
    { path: "/", Component: HomePage },
    { path: "/projects/:projectSlug", Component: ProjectPage },
  ],
  { basename: basePath },
);
