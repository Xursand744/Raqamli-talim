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
import Tips from "./pages/Tips";
import University from "./pages/ItUniversitet/UniversityList";
import StudyCenters from "./pages/StudyCenters";
import Analiz from "./pages/Analitic/Analitic";
import Fields from "./pages/ITFields_list/IT_fields_list";
import JobSearch from "./pages/ITFields_list/IT_fields_list";
import Dashboard from "./pages/Analitic/Analitic";

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
        // {
        //   path: "contact",
        //   element: <ContactLayout />,
        //   children: [
        //     {
        //       path: "faq",
        //       element: <Faq />,
        //     },
        //     {
        //       path: "form",
        //       element: <Form />,
        //     },
        //   ],
        // },
        // {
        //   path: "articles",
        //   element: <ArticlesLayout />,
        //   children: [
        //     {
        //       index: true,
        //       element: <Articles />,
        //     },
        //     {
        //       path: ":id",
        //       element: <ArticleDetail />,
        //     },
        //   ],
        // },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );

  return <Navbar />;
}
