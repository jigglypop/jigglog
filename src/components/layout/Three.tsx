import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { MainTitle, Tag, ThreeWrapper } from './styled';
import { Earth, Star } from './ThreeItems';
import { OrbitControls } from '@react-three/drei';
import Progress from './Progress';
import Stars from './star';

export default function Three({ categorySet }: any) {
  const [progress, setProgress] = useState(0);

  return (
    <ThreeWrapper>
      <MainTitle>
        <h1>JIGGLOG</h1>
        <h3>JIGGLOG에 오신 것을 환영합니다</h3>
        <Progress progress={progress} />
      </MainTitle>
      <Tag className="isWide" id="earth-tag">
        <h1>JIGGLYPOP</h1>
        <h3>무언가 만드는 것을 좋아합니다</h3>
        <h3>REACT 프론트 엔드에 관심이 많고 VUE, ANGULAR를 모두 사용합니다.</h3>
        <h3>DJANGO, express, nest.js, spring boot 백엔드도 다룹니다.</h3>
        <h3>3D 웹에 관심이 많으며 항상 프로젝트를 쉬지 않고 합니다.</h3>
        <h2>행성을 클릭하면 이력서 페이지로 이동합니다.</h2>
      </Tag>
      <Canvas
        camera={{
          position: [100, 10, 10],
          far: 10000,
        }}
      >
        <OrbitControls minDistance={80} maxDistance={120} />

        <Earth setProgress={setProgress} />
        <Star setProgress={setProgress} />
        <Stars categorySet={categorySet} />
        <directionalLight
          intensity={0.1}
          color={'#f1ffca'}
          position={[5, 40, 10]}
          castShadow
        />
        <directionalLight
          intensity={0.1}
          color={'#12c2e9'}
          position={[-10, -10, -10]}
          castShadow
        />
      </Canvas>
    </ThreeWrapper>
  );
}
