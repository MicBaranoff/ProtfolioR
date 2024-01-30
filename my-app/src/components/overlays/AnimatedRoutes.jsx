import { Route, Routes, useLocation } from 'react-router-dom';

import Home from 'pages/home';
import Projects from 'pages/projects';
import About from 'pages/about';
import ErrorPage from 'pages/error-page';

import { AnimatePresence } from 'framer-motion';

const { REACT_APP_BASE_PATH } = process.env;
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={`${REACT_APP_BASE_PATH}`} element={<Home />} errorElement={<ErrorPage />} />
        <Route path={`${REACT_APP_BASE_PATH}projects`} element={<Projects />} errorElement={<ErrorPage />} />
        <Route path={`${REACT_APP_BASE_PATH}about`} element={<About />} errorElement={<ErrorPage />} />
        <Route path={`${REACT_APP_BASE_PATH}contacts`} element={<Home />} errorElement={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
