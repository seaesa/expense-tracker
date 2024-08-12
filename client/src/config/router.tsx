import { createBrowserRouter } from 'react-router-dom';
import Landing from '@/components/core/layout/landing';
import ProtectedRoute from '@/components/protected';
import MainLayout from "@/components/core/layout/main";

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
            lazy: () => import('@/components/landing')
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'login',
        lazy: () => import('@/components/login/login')
      },
      {
        path: 'signup',
        lazy: () => import('@/components/signup/signup')
      }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/dashboard',
        lazy: () => import('@/components/dashboard/dashboard')
      },
      {
        path: '/table',
        lazy: () => import('@/components/task')
      },
      {
        path: '/analytics',
        lazy: () => import('@/components/analytics/analytics')
      },
      {
        path: '/categories',
        lazy: () => import('@/components/categories/categories')
      },
      {
        path: '/settings',
        lazy: () => import('@/components/categories/categories')
      }
    ]
  }
])
export default router