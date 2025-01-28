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
          path: "/universities",
          element: <University />,
        },
        {
          path: "/news",
          element: <Tips />,
        },
        {
          path: "projects",
          children: [
            {
              index: true,
              element: <ProjectLayout />,
            },
            {
              path: ":slug",
              element: <Project />,
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
