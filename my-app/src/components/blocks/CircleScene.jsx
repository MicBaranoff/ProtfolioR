import {
  useEffect, memo, useRef, useState,
} from 'react';

import { useLocation } from 'react-router-dom';

import isMobile from 'ismobilejs';
import routesNames from 'configs/routesNames';

import CirclesScene from '../../scripts/circlesScene';

const isMobileDevice = isMobile(window.navigator).any;

const { REACT_APP_BASE_PATH } = process.env;

const images = [
  `${REACT_APP_BASE_PATH}static/images/me/1.png`,
  `${REACT_APP_BASE_PATH}static/images/me/2.png`,
  `${REACT_APP_BASE_PATH}static/images/me/3.png`,
  `${REACT_APP_BASE_PATH}static/images/me/4.png`,
];

const { about } = routesNames;

function CircleScene({ onLoad = () => {} }) {
  const scene = useRef();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const sceneInstance = useRef();

  const sceneRefresh = (mode) => {
    setLoading(true);

    setTimeout(() => {
      sceneInstance.current?.circlesRefresh(mode);
    }, 300);

    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  useEffect(() => {
    if (!scene) return;

    sceneInstance.current = new CirclesScene({
      el: scene.current,
      isMobile: isMobileDevice,
      images,
    });

    sceneInstance.current.loadImages(() => {
      onLoad();
      setLoading(false);
      sceneInstance.current.init();
      if (location.pathname === about) {
        sceneInstance.current?.circlesRefresh();
      }
    });

    // eslint-disable-next-line consistent-return
    return () => {
      sceneInstance.current?.destroy();
    };
  }, [scene]);

  useEffect(() => {
    if (location.pathname === about) {
      sceneRefresh(true);
    } else {
      sceneRefresh(false);
    }
  }, [location]);

  return (
    <div ref={scene} className={`circle-scene ${!loading && 'circle-scene--ready'}`} />
  );
}

export default memo(CircleScene);
