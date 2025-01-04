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
<<<<<<< HEAD
import Tips from "./pages/Tip";
=======
import Tips from "./pages/Tips";
>>>>>>> 61f1863419538ad801bea25b203eeb84fdcddc97

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
