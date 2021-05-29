import React, { useState, useMemo, useRef, useEffect } from "react";

import { useFrame } from "react-three-fiber";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring } from "@react-spring/three";
import { navigate } from "gatsby";
import { a } from "@react-spring/three";

// 지구
export const PlanetEarth = () => {
  const [model, setModel] = useState<GLTF>();
  useMemo(
    () =>
      new GLTFLoader().load("/earth/scene.gltf", (e: GLTF) => {
        setModel(e);
      }),
    ["/earth/scene.gltf"]
  );
  const [active, setActive] = useState(0);
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  useEffect(() => {
    document.body.style.cursor = active ? 'pointer' : 'auto'
  }, [active])

  const scale = spring.to([0, 40], [40, 200]);
  const tooltip : Element | null = document.querySelector("#tooltip");
  let timerA: NodeJS.Timeout;
  const onPointHover = () => {
    if (timerA) {
      clearTimeout(timerA);
    }
    timerA = setTimeout(function() {
      setActive(1)
      if (tooltip) {
        tooltip.classList.add("isvisible");
        tooltip.innerHTML = `
            <h1>#JIGGLYPOP</h1>
            <h3>무언가 만드는 것을 좋아합니다</h3>
            <h3>REACT 프론트 엔드에 관심이 많고 VUE, ANGULAR를 모두 사용합니다.</h3>
            <h3>DJANGO, express, nest.js, spring boot 백엔드도 다룹니다.</h3>
            <h3>3D 웹에 관심이 많으며 항상 프로젝트를 쉬지 않고 합니다.</h3>
            <h2><<  행성을 클릭하면 이력서 페이지로 이동합니다.</h2>
        `;
      }
    }, 200);
  };
  let timerB : NodeJS.Timeout;
  const onPointOut = () => {
    if (timerB) {
      clearTimeout(timerB);
    }
    timerB = setTimeout(function() {
      setActive(0)
      if (tooltip){
        tooltip.classList.remove("isvisible");
      }
    }, 200);
  };

  const onClick = () => {
    navigate("/resume");
  };
  const mesh : any = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.001));
  return (
      <group>
        <a.mesh
          onClick={() => onClick()}
          onPointerOver={() => onPointHover()}
          onPointerOut={() => onPointOut()}
          ref={mesh}
          scale-x={scale}
          scale-y={scale}
          scale-z={scale}
          receiveShadow
          castShadow
        >
          {model && <primitive object={model.scene} receiveShadow castShadow />}
        </a.mesh>
      </group>
  );
};

// 바깥
export const Outer = () => {
  const [model, setModel] = useState<GLTF>();
  useMemo(
    () =>
      new GLTFLoader().load("/gallaxy/scene.gltf", (e: GLTF) => {
        setModel(e);
      }),
    ["/gallaxy/scene.gltf"]
  );
  const mesh : any = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.001));
  return (
    <group>
      <a.mesh scale={[10, 10, 10]} ref={mesh} receiveShadow castShadow>
        {model && <primitive object={model.scene} receiveShadow castShadow />}
      </a.mesh>
    </group>
  );
};



