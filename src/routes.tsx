import { createBrowserRouter } from "react-router-dom"

import { Landing } from "./pages/landing"

import { AuthLayout } from "./layouts/auth"
import { SignUp } from "./pages/auth/sign-up"
import { SignIn } from "./pages/auth/sign-in"
import { Recovery } from "./pages/auth/recovery"
import { ResetPassword } from "./pages/auth/reset-password"

import { PharmacyLayout } from "./layouts/pharmacy"
import { Home } from "./pages/app/pharmacy/home"
import { Deposits } from "./pages/app/pharmacy/deposits"
import { Orders } from "./pages/app/pharmacy/orders"
import { VisitDeposit } from "./pages/app/pharmacy/visit-deposit"
import { DepositLayout } from "./layouts/deposit"
import { Dashboard } from "./pages/app/deposit/dashboard"
import { NotFound } from "./pages/404"
import { AdminLayouth } from "./layouts/admin"

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Landing />,
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "recovery", element: <Recovery /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },

  {
    path: "/pharmacy",
    element: <PharmacyLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "deposits", element: <Deposits /> },
      { path: "orders", element: <Orders /> },
      { path: "view-deposit", element: <VisitDeposit /> },
    ],
  },

  {
    path: "/deposit",
    element: <DepositLayout />,
    children: [{ path: "", element: <Dashboard /> }],
  },

  {
    path: "/admin",
    element: <AdminLayouth />,
  },
])
