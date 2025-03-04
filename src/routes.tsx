import { createBrowserRouter } from 'react-router-dom';

import { Landing } from './_pages/start/start';

import { AuthLayout } from './_layouts/auth';
import { SignUp } from './_pages/auth/sign-up';
import { SignIn } from './_pages/auth/sign-in';
import { Recovery } from './_pages/auth/recovery';
import { ResetPassword } from './_pages/auth/reset-password';

import { PharmacyLayout } from './_layouts/pharmacy';
import { Medicinals } from './_pages/app/pharmacy/medicinals/medicinal';
import { Deposits } from './_pages/app/pharmacy/deposits/deposit';
import { Pendings } from './_pages/app/pharmacy/pendings/pending';
import { PharmacyProfile } from './_pages/app/pharmacy/profile/profile';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'recovery', element: <Recovery /> },
      { path: 'reset-password', element: <ResetPassword /> },
    ],
  },

  {
    path: '/pharmacy',
    element: <PharmacyLayout />,
    children: [
      { path: '', element: <Medicinals /> },
      { path: 'medicinals', element: <Medicinals /> },
      { path: 'deposits', element: <Deposits /> },
      { path: 'pendings', element: <Pendings /> },
      { path: 'profile', element: <PharmacyProfile /> },
    ],
  },
]);
