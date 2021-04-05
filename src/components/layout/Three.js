import React, { useRef, useState, useEffect } from 'react';
import {
  MapControls,
  OrbitControls,
} from 'three/examples/jsm/controls/OrbitControls';

import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { ThreeWrapper } from './styled'


import {
  Outer,
  PlanetEarth,
  PlanetMars,
  PlanetMercury
} from './ThreeItems';


extend({
  MapControls,
  OrbitControls,
});
export default function Three({ categorySet, hasPortfolio }) {
  const Controls = () => {
    const orbitRef = useRef();
    const { camera, gl } = useThree();

    // 카메라 현재 포지션이 궁금할때
    // useFrame(() => {
    //   console.log(camera.position);
    // });
    useFrame(() => {
      orbitRef.current.update();
    });
    return <mapControls args={[camera, gl.domElement]} ref={orbitRef} />;
  };
  const domnodeRef = useRef()
  return (
    <ThreeWrapper>

        <Canvas
            camera={{
            position: [100,10,10],
            far: 10000,
            }}>
            <Controls/>
            <fog attach="fog" args={['#23074d']} position={[0,100,-100]}/>
            <Outer />
            <PlanetEarth/>
            <PlanetMars categorySet={categorySet} hasPortfolio={hasPortfolio}/>
            <PlanetMercury categorySet={categorySet} hasPortfolio={hasPortfolio} />


            <directionalLight intensity={0.3} color={'#12c2e9'} position={[5, 40, 10]} castShadow/>
            <directionalLight intensity={0.5} color={'#f64f59'} position={[-10, -10, -10]} castShadow/>
            <directionalLight intensity={0.2} color={'white'} position={[10, 20, 10]} castShadow/>

            <rectAreaLight
                width={2}
                height={2}
                intensity={200}
                color={'white'}
                position={[0,0,0]}
                rotation={[0, 180, 0]}
                castShadow
                />  
        </Canvas>
    </ThreeWrapper>);
  
}
