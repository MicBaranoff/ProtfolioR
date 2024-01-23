import { Route, Routes, useLocation } from 'react-router-dom';

import Home from 'pages/home';
import Projects from 'pages/projects';
import About from 'pages/about';
import ErrorPage from 'pages/error-page';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/projects" element={<Projects />} errorElement={<ErrorPage />} />
        <Route path="/about" element={<About />} errorElement={<ErrorPage />} />
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
