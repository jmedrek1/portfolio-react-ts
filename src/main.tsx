import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff6a4d',
    },
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
