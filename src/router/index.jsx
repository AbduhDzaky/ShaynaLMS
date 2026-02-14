import { createBrowserRouter } from "react-router-dom";
import ManagerHomePage from "../pages/manager/home";
import SignInPage from "../pages/Signin";
import SignUpPage from "../pages/Signup";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import LayoutDashoard from "../components/layout";
import ManageCoursePage from "../pages/manager/courses";
import ManageCreateCoursePage from "../pages/manager/create-course";
import ManagerCourseDetailPage from "../pages/manager/course-detail";
import CourseContentCreatePage from "../pages/manager/course-content-create";

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
      {
        path: "/manager/courses/create",
        element: <ManageCreateCoursePage />,
      },
      {
        path: "/manager/courses/:id",
        element: <ManagerCourseDetailPage />,
      },
      {
        path: "/manager/courses/:id/create",
        element: <CourseContentCreatePage />,
      },
    ],
  },
]);

export default router;
