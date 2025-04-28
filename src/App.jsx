// css
import "./assets/css/responsive.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import HomePage from "./pages/Home/index";
import About from "./pages/AboutPages/About";
import Project from "./pages/Project";
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
import Contact from "./pages/Contact/Contact";
import OneMillionUzbekCoders from "./pages/Projects/OneMillionUzbekCoders";
import SingleArticle from "./pages/Articles/SingleArticle";
import JoinTeam from "./pages/AboutPages/JoinTeam";
import ProjectStudyCenters from "./pages/Projects/StudyCenters";
import Universities from "./pages/Projects/Universities";

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
          element: <Contact />,
        },
        {
          path: "/courses",
          element: <Tips />,
        },
        {
          path: "/join-team",
          element: <JoinTeam />,
        },
        {
          path: "/projects",
          children: [
            {
              index: true,
              element: <ProjectsOverview />,
            },
            {
              path: "al-xorazmiy",
              element: <Project />,
            },
            {
              path: "it-talents-dasturi",
              element: <ItTalents />,
            },
            {
              path: "bir-million-dasturchi-loyihasi",
              element: <OneMillionUzbekCoders />,
            },
            {
              path: "study-centers",
              element: <ProjectStudyCenters />,
            },
            {
              path: "universities",
              element: <Universities />,
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
        {
          path: "articles/:idx",
          element: <SingleArticle />,
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