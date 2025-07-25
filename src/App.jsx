// css
import "./assets/css/responsive.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import HomePage from "./pages/Home/index";
import About from "./pages/AboutPages/About";
import Project from "./pages/Project";
import RedirectToEducation from "./pages/RedirectToEducation";
import University from "./pages/ItUniversitet/UniversityList";
import UnifiedPage from "./pages/UnifiedPage";
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
import ItVillage from "./pages/Projects/ItVillage";
import SingleArticle from "./pages/Articles/SingleArticle";
import JoinTeam from "./pages/AboutPages/JoinTeam";
import ProjectStudyCenters from "./pages/Projects/StudyCenters";
import Universities from "./pages/Projects/Universities";
import Tot from "./pages/Projects/Tot";
import JobEdu from "./pages/Projects/JobEdu";
import Olimpiads from "./pages/Projects/Olimpiads";
import Ict from "./pages/Projects/Ict";
import Aca from "./pages/Projects/Aca";
import Apio from "./pages/Projects/Apio";
import Icpc from "./pages/Projects/Icpc";
import ItCertificates from "./pages/Projects/ItCertificates";
import DigitalScholarship from "./pages/Projects/DigitalScholarship";
import StipendiyaRegistration from "./pages/Projects/StipendiyaRegistration";
import SuccessStoryDetail from "./pages/SuccessStory/SuccessStoryDetail";

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
          path: "/stipendiya-registration",
          element: <StipendiyaRegistration />,
        },
        {
          path: "/courses",
          element: <RedirectToEducation />,
        },
        {
          path: "/join-team",
          element: <JoinTeam />,
        },
        {
          path: "/education",
          element: <UnifiedPage />,
        },
        {
          path: "/success-story/:id",
          element: <SuccessStoryDetail />,
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
              path: "it-village",
              element: <ItVillage />,
            },
            {
              path: "tot",
              element: <Tot />,
            },
            {
              path: "job-edu-fest",
              element: <JobEdu />,
            },
            {
              path: "olimpiads",
              element: <Olimpiads />,
            },
            {
              path: "ict4girls",
              element: <Ict />,
            },
            {
              path: "icpc-uzbekistan-olympiad",
              element: <Icpc />,
            },
            {
              path: "apio",
              element: <Apio />,
            },
            {
              path: "aca-navigator",
              element: <Aca />,
            },
            {
              path: "it-sertifikatlar",
              element: <ItCertificates />,
            },
            {
              path: "raqamli-texnologiyalar-stipendiyasi",
              element: <DigitalScholarship />,
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
          element: <UnifiedPage />,
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