import React, { useRef } from "react";
import {
  MapControls,
  OrbitControls,
} from "three/examples/jsm/controls/OrbitControls";

import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import { ThreeWrapper } from "./styled";

import { Outer, PlanetEarth } from "./ThreeItems";

extend({
  MapControls,
  OrbitControls,
});
export default function Three() {
  const Controls = () => {
    const orbitRef = useRef();
    const { camera, gl } = useThree();

    // 카메라 현재 포지션이 궁금할때
    // useFrame(() => {
    //   console.log(camera.position);
    // });
    useFrame(() => {
      orbitRef.current.update();
      orbitRef.current.minDistance = 80;
      orbitRef.current.maxDistance = 150;
    });
    return <mapControls args={[camera, gl.domElement]} ref={orbitRef} />;
  };
  return (
    <ThreeWrapper>
      <Canvas
        camera={{
          position: [100, 10, 10],
          far: 10000,
        }}
      >
        <Controls />
        <fog attach="fog" args={["black"]} position={[0, 100, -100]} />
        <Outer />
        <PlanetEarth />
        <directionalLight
          intensity={0.3}
          color={"#12c2e9"}
          position={[5, 40, 10]}
          castShadow
        />
        <directionalLight
          intensity={0.7}
          color={"#f64f59"}
          position={[-10, -10, -10]}
          castShadow
        />
      </Canvas>
    </ThreeWrapper>
  );
}
