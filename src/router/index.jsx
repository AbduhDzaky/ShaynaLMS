import { createBrowserRouter } from "react-router-dom";
import ManagerHomePage from "../pages/manager/home";
import SignInPage from "../pages/Signin";
import SignUpPage from "../pages/Signup";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import LayoutDashoard from "../components/layout";
import ManageCoursePage from "../pages/manager/courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage />,
  },
  {
    path: "/manager/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/manager/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckoutPage />,
  },
  {
    path: "/manager",
    element: <LayoutDashoard />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: "/manager/courses",
        element: <ManageCoursePage />,
      },
    ],
  },
]);

export default router;
