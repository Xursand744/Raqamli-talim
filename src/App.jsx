import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import HomePage from "./pages/index";
import About from "./pages/About";

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
          path: "about",
          element: <About />,
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
