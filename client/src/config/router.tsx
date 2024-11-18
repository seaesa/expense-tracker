import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '@/app/components/protected';
import MainLayout from '@/app/layouts/main/main';
import Landing from '@/app/layouts/landing/landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: '',
        element: <ProtectedRoute />,
        children: [
          {
            path: '',
            lazy: () => import('@/app/pages/landing'),
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'login',
        lazy: () => import('@pages/login'),
      },
      {
        path: 'signup',
        lazy: () => import('@pages/signup'),
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/dashboard',
        lazy: () => import('@/app/pages/dashboard'),
      },
      {
        path: '/table',
        lazy: () => import('@/app/components/task'),
      },
      {
        path: '/analytics',
        lazy: () => import('@/app/components/analytics/analytics'),
      },
      {
        path: '/categories',
        lazy: () => import('@/app/components/categories/categories'),
      },
      {
        path: '/settings',
        lazy: () => import('@/app/components/categories/categories'),
      },
    ],
  },
]);
export default router;
