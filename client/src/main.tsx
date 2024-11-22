import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.tsx';
import ThemeProvider from '@/providers/theme.tsx';
import NextTopLoader from 'nextjs-toploader';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import './index.css';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NextTopLoader color='#d3d3d3' showSpinner={false} />
        <RouterProvider
          future={{
            v7_startTransition: true,
          }}
          router={router}
        />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
