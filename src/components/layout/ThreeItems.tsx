import React, { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { navigate } from 'gatsby';
import { a } from '@react-spring/three';
import { useSpring } from '@react-spring/three';
import { useGltf } from './gltf';
import { Html } from '@react-three/drei';
import * as S from './styled';

export interface IStoreOuter {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}
// 지구
export const Earth = ({ setProgress }: IStoreOuter) => {
  const { model, progress } = useGltf('/earth/scene.gltf');
  useEffect(() => {
    setProgress(progress);
  }, [progress]);
  const [active, setActive] = useState(0);
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  useEffect(() => {
    document.body.style.cursor = active ? 'pointer' : 'auto';
  }, [active]);
  const scale = spring.to([0, 40], [40, 200]);

  const onClick = () => {
    navigate('/resume');
  };
  const onPointHover = () => {
    setActive(1);
    const tag = document.getElementById('earth-tag');
    tag?.classList.remove('isWide');
  };
  const onPointOut = () => {
    setActive(0);
    const tag = document.getElementById('earth-tag');
    tag?.classList.add('isWide');
  };
  const mesh = useRef<any>();
  useFrame(() => {
    mesh.current.rotation.x += 0.001;
  });

  return (
    <>
      <group>
        <Html zIndexRange={[100, 10]}></Html>
        <a.mesh
          ref={mesh}
          onClick={() => onClick()}
          onPointerOver={() => onPointHover()}
          onPointerOut={() => onPointOut()}
          scale-x={scale}
          scale-y={scale}
          scale-z={scale}
          receiveShadow
          castShadow
        >
          {model && <primitive object={model.scene} />}
        </a.mesh>
      </group>
    </>
  );
};

// 별
export const Star = ({ setProgress }: IStoreOuter) => {
  const { model, progress } = useGltf('/star/scene.gltf');
  const mesh = useRef<any>();
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
// 바깥
export const Outer = ({ setProgress }: IStoreOuter) => {
  const { model, progress } = useGltf('/gallaxy/scene.gltf');
  const mesh = useRef<any>();
  useEffect(() => {
    setProgress(progress);
  }, [progress]);
  useFrame(() => {
    mesh.current.rotation.x += 0.001;
  });

  return (
    <a.mesh scale={[10, 10, 10]} ref={mesh} receiveShadow castShadow>
      {model && <primitive object={model.scene} receiveShadow castShadow />}
    </a.mesh>
  );
};
// export const PlanetEarth = () => {
//   const [model, setModel] = useState<GLTF>();
//   useMemo(
//     () =>
//       new GLTFLoader().load('/earth/scene.gltf', (e: GLTF) => {
//         setModel(e);
//       }),
//     ['/earth/scene.gltf'],
//   );
//   const [active, setActive] = useState(0);
//   const { spring } = useSpring({
//     spring: active,
//     config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
//   });
//   useEffect(() => {
//     document.body.style.cursor = active ? 'pointer' : 'auto';
//   }, [active]);

//   const scale = spring.to([0, 40], [40, 200]);
//   const tooltip: Element | null = document.querySelector('#tooltip');
//   let timerA: NodeJS.Timeout;
//   const onPointHover = () => {
//     if (timerA) {
//       clearTimeout(timerA);
//     }
//     timerA = setTimeout(function() {
//       setActive(1);
//       if (tooltip) {
//         tooltip.classList.add('isvisible');
//         tooltip.innerHTML = `
//             <h1>#JIGGLYPOP</h1>
//             <h3>무언가 만드는 것을 좋아합니다</h3>
//             <h3>REACT 프론트 엔드에 관심이 많고 VUE, ANGULAR를 모두 사용합니다.</h3>
//             <h3>DJANGO, express, nest.js, spring boot 백엔드도 다룹니다.</h3>
//             <h3>3D 웹에 관심이 많으며 항상 프로젝트를 쉬지 않고 합니다.</h3>
//             <h2><<  행성을 클릭하면 이력서 페이지로 이동합니다.</h2>
//         `;
//       }
//     }, 200);
//   };
//   let timerB: NodeJS.Timeout;
//   const onPointOut = () => {
//     if (timerB) {
//       clearTimeout(timerB);
//     }
//     timerB = setTimeout(function() {
//       setActive(0);
//       if (tooltip) {
//         tooltip.classList.remove('isvisible');
//       }
//     }, 200);
//   };

//   const onClick = () => {
//     navigate('/resume');
//   };
//   const mesh: any = useRef();
//   useFrame(() => (mesh.current.rotation.y += 0.001));
//   return (
//     <group>
//       <a.mesh
//         onClick={() => onClick()}
//         onPointerOver={() => onPointHover()}
//         onPointerOut={() => onPointOut()}
//         ref={mesh}
//         scale-x={scale}
//         scale-y={scale}
//         scale-z={scale}
//         receiveShadow
//         castShadow
//       >
//         {model && <primitive object={model.scene} receiveShadow castShadow />}
//       </a.mesh>
//     </group>
//   );
// };
