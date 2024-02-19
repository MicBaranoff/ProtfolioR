import { useEffect, useRef } from 'react';

import isMobile from 'ismobilejs';

import CirclesScene from '../../scripts/circlesScene';

const isMobileDevice = isMobile(window.navigator).any;

function CircleScene() {
  const scene = useRef();

  let sceneInstance = null;

  useEffect(() => {
    if (!scene) return;

    sceneInstance = new CirclesScene({
      el: scene.current,
      isMobile: isMobileDevice,
    });

    sceneInstance.init();

    // eslint-disable-next-line consistent-return
    return () => {
      sceneInstance.destroy();
      sceneInstance = null;
    };
  }, [scene]);
  return (
    <div ref={scene} className="circle-scene" />
  );
}

export default CircleScene;
