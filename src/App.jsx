// css
import "./assets/css/responsive.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import HomePage from "./pages/index";
import About from "./pages/About";
import Project from "./pages/Project";
import ProjectLayout from "./layouts/ProjectLayout";
import Tips from "./pages/Tip";
import University from "./pages/ItUniversitet/UniversityList";
import StudyCenters from "./pages/StudyCenters";
import JobSearch from "./pages/ITFields_list/IT_fields_list";
import Dashboard from "./pages/Analitic/Analitic";
import OpenInformations from "./pages/AboutPages/OpenInformations";
import Leadership from "./pages/AboutPages/Leadership";
import Structure from "./pages/AboutPages/Structure";
import Departments from "./pages/AboutPages/Departments";
import AntiCorruption from "./pages/AboutPages/AntiCorruption";
import HigherStandingOptimization from "./pages/AboutPages/HigherStandingOptimization";
import ItTalents from "./pages/Projects/ItTalents";
import News from "./pages/News/News";
import ProjectsOverview from "./pages/Projects/ProjectsOverview";
import NewsSinglePage from "./pages/News/NewsSinglePage";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/open-informations",
          element: <OpenInformations />,
        },
        {
          path: "/structure",
          element: <Structure />,
        },
        {
          path: "/leadership",
          element: <Leadership />,
        },
        {
          path: "/departments",
          element: <Departments />,
        },
        {
          path: "/anti-corruption",
          element: <AntiCorruption />,
        },
        {
          path: "higher-standing-organization",
          element: <HigherStandingOptimization />,
        },
        {
          path: "/universities",
          element: <University />,
        },
        {
          path: "/contact",
          element: <Tips />,
        },
        {
          path: "/projects",
          element: <ProjectsOverview />,
          children: [
            {
              path: "/projects/al-xorazmiy-vorislari",
              element: <Project />,
            },
            {
              path: "/projects/it-talents-dasturi",
              element: <ItTalents />,
            },
          ],
        },
        {
          path: "/tips",
          children: [
            {
              index: true,
              element: <JobSearch />,
            },
            {
              path: ":slug",
              element: <Dashboard />,
            },
          ],
        },
        {
          path: "/study-centers",
          element: <StudyCenters />,
        },
        {
          path: "/news",
          children: [
            {
              index: true,
              element: <News />,
            },
            {
              path: ":id",
              element: <NewsSinglePage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

// {
//   path: "/about",
//   children: [
//     {
//       index: true,
//       element: <About />,
//     },
//     {
//       path: "open-informations",
//       element: <OpenInformations />,
//     },
//     // {
//     //   path: "/open-data",
//     // },
//   ],
//   // path: "/about",
//   // element: <About />,
// },
