import React, { useRef, useEffect } from 'react';
import { a } from '@react-spring/three';
import { useGltf } from '../util/gltf';

export interface IStoreOuter {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

// 별
export const Star = ({ setProgress }: IStoreOuter) => {
  const { model, progress } = useGltf('/star/scene.gltf');
  const mesh = useRef<THREE.Mesh>();
  useEffect(() => {
    setProgress(progress);
  }, [progress]);

  return (
    <>
      <group>
        <a.mesh scale={[0.13, 0.13, 0.13]} ref={mesh} receiveShadow castShadow>
          {model && <primitive object={model.scene} />}
        </a.mesh>
      </group>
    </>
  );
};
