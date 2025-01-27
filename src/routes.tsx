import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./_pages/start/start";
import { AuthLayout } from "./_layouts/auth";
import { SignUp } from "./_pages/auth/sign-up";
import { SignIn } from "./_pages/auth/sign-in";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Landing />,
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
