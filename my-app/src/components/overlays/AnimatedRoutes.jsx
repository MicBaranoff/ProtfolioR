import { Route, Routes, useLocation } from 'react-router-dom';

import Home from 'pages/home';
import Projects from 'pages/projects';
import Project from 'pages/project';
import About from 'pages/about';
import Contact from 'pages/contact';
import ErrorPage from 'pages/error-page';

import { AnimatePresence } from 'framer-motion';

import routesNames from 'configs/routesNames';

const {
  home,
  projects,
  about,
  contact,
} = routesNames;

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={home} element={<Home />} errorElement={<ErrorPage />} />
        <Route path={projects} element={<Projects />} errorElement={<ErrorPage />} />
        <Route path={`${projects}/:projectId`} element={<Project />} errorElement={<ErrorPage />} />
        <Route path={about} element={<About />} errorElement={<ErrorPage />} />
        <Route path={contact} element={<Contact />} errorElement={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
