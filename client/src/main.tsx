import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "@/providers/theme.tsx";
import router from './config/router.tsx';

import NextTopLoader from 'nextjs-toploader';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <NextTopLoader color="#d3d3d3" showSpinner={false} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)