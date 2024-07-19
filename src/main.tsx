import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import App from './App';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#88dae3',
      dark: '#1e6d75',
    },
    secondary: {
      main: '#fef8dc',
      light: '#fffbeb',
    }
  },
  typography: {
    fontFamily: 'Neue Haas Grotesk Display Pro'
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/projects',
    element: <ProjectGallery />
  },
  // TODO: figure out how to route individual projects
  {
    path: '/contact',
    element: <Contact />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
