import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/home';
import Projects from '../pages/projects';
import About from '../pages/about';
import ErrorPage from '../pages/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
