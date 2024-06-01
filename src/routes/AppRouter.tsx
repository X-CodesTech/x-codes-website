import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts";
import Error from "../components/shared/Error";
import Home from "../pages/Home";
import Features from "../pages/Features";
import ContactUs from "../pages/ContactUs";
import Screenshots from "../pages/Screenshots";
import Downloads from "../pages/Downloads";
import HowItWorks from "../pages/HowItWorks";
import FAQs from "../pages/FAQs";
import MySmartersAccount from "../pages/MySmartersAccount";
import Blog from "../pages/Blog";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "features",
          element: <Features />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
        {
          path: "screenshots",
          element: <Screenshots />,
        },
        {
          path: "blogs",
          element: <Blog />,
        },
        {
          path: "downloads",
          element: <Downloads />,
        },
        {
          path: "how-it-works",
          element: <HowItWorks />,
        },
        {
          path: "faqs",
          element: <FAQs />,
        },
        {
          path: "account",
          element: <MySmartersAccount />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
