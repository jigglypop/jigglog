import React, { useRef } from "react";
import {
  MapControls,
} from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useFrame, useThree, extend, ReactThreeFiber } from "react-three-fiber";
import { ThreeWrapper } from "./styled";
import { Outer, PlanetEarth } from "./ThreeItems";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      mapControls: ReactThreeFiber.Object3DNode<
        MapControls,
        typeof MapControls
      >;
    }
  }
}

interface MapRef {
  obj: {
    update: Function;
  };
  minDistance: number;
  maxDistance: number;
}

extend({ 
  MapControls,
});

const Controls: React.FC<any> = (props) => {
  const ref = useRef<MapRef>(null);
  const { camera, gl } = useThree();
  useFrame(() => {
    ref.current?.obj?.update();
    if (ref.current){
      ref.current.minDistance = 80;
      ref.current.maxDistance = 150;
    }
  });
  return <mapControls ref={ref} args={[camera, gl.domElement]} {...props} />;
};

export default function Three() {
  return (
    <ThreeWrapper>
      <Canvas
        camera={{
          position: [100, 10, 10],
          far: 10000,
        }}
      >
        <Controls />
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
