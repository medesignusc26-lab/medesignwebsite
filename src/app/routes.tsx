import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import Projects from "./pages/Projects";
import Archive from "./pages/Archive";
import Archive2023 from "./pages/Archive2023";
import Archive2020 from "./pages/Archive2020";
import Archive2019 from "./pages/Archive2019";
import ProjectDetail from "./pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "projects/archive", Component: Archive },
      { path: "projects/archive/2023-2024", Component: Archive2023 },
      { path: "projects/archive/2020-2021", Component: Archive2020 },
      { path: "projects/archive/2019-2020", Component: Archive2019 },
      { path: "projects/:projectId", Component: ProjectDetail },
      { path: "team", Component: Team },
      { path: "sponsors", Component: Sponsors },
    ],
  },
]);