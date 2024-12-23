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
<<<<<<< HEAD
import  University  from "./pages/ItUniversitet/UniversityList";
=======
import StudyCenters from "./pages/StudyCenters";
>>>>>>> ce1a07b623e6a9f7d2184f179f71625e4df65eaf

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
          element: <Tips />,
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
