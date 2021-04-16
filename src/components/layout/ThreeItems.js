import React, { useState, useMemo, useRef } from "react";
import {
  MapControls,
  OrbitControls,
} from "three/examples/jsm/controls/OrbitControls";

import { extend, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, animated } from "@react-spring/three";
import { navigate } from "gatsby";

extend({
  MapControls,
  OrbitControls,
});
export const distance = 1600;

// 지구

export const PlanetEarth = () => {
  const [model, setModel] = useState();
  useMemo(
    () =>
      new GLTFLoader().load("/earth/scene.gltf", (e) => {
        setModel(e);
      }),
    [URL]
  );

  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);

  const { color, pos, ...props } = useSpring({
    pos: active ? [0, 0, 2] : [0, 0, 0],
    scale: hovered ? [55, 55, 55] : [50, 50, 50],
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  });
  const tooltip = document.querySelector("#tooltip");
  const onPointHover = (e) => {
    setHover(true);
    tooltip.classList.add("isvisible");
    tooltip.innerHTML = `
        <h1>JIGGLYPOP</h1>
        <h1>염동환</h1>
        <h3>무언가 만드는 것을 좋아합니다</h3>
        <h3>리액트 프론트 엔드에 관심이 많고 VUE, ANGULAR를 모두 사용합니다.</h3>
        <h3>DJANGO, express, nest.js, spring boot 백엔드도 다룹니다.</h3>
        <h3>3D 웹에 관심이 많으며 항상 프로젝트를 쉬지 않고 합니다.</h3>
        <h2>행성을 클릭하면 이력서 페이지로 이동합니다.</h2>
    `;
  };
  const onPointOut = (e) => {
    setHover(false);
    tooltip.classList.remove("isvisible");
  };

  const onClick = (e) => {
    navigate("/resume");
  };
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.001));
  return (
    <group>
      <animated.mesh
        onClick={(e) => onClick(e)}
        onPointerOver={(e) => onPointHover(e)}
        onPointerOut={(e) => onPointOut(false)}
        ref={mesh}
        receiveShadow
        castShadow
        {...props}
      >
        {/* <rectAreaLight
          width={10}
          height={10}
          intensity={2000}
          color={"white"}
          position={[100, 100, 100]}
          rotation={[0, 180, 0]}
          castShadow
        /> */}
        {model && <primitive object={model.scene} receiveShadow castShadow />}
      </animated.mesh>
    </group>
  );
};

// 바깥
export const Outer = () => {
  return ImportGltf("/gallaxy/scene.gltf", [0, 0, 0]);
};
export const ImportGltf = (URL, position) => {
  const [model, setModel] = useState();
  useMemo(
    () =>
      new GLTFLoader().load(URL, (e) => {
        setModel(e);
      }),
    [URL]
  );

  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);

  const { color, pos, ...props } = useSpring({
    pos: active ? [0, 0, 2] : [0, 0, 0],
    scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  });
  const tooltip = document.querySelector("#tooltip");
  const onPointHover = (e) => {
    setHover(true);
    tooltip.classList.add("isvisible");
    tooltip.innerHTML = `
        <h1>JIGGLYPOP</h1>
        <h1>염동환</h1>
        <h3>무언가 만드는 것을 좋아합니다</h3>
        <h3>리액트 프론트 엔드에 관심이 많고 VUE, ANGULAR를 모두 사용합니다.</h3>
        <h3>DJANGO, express, nest.js, spring boot 백엔드도 다룹니다.</h3>
        <h3>3D 웹에 관심이 많으며 항상 프로젝트를 쉬지 않고 합니다.</h3>
        <h2>행성을 클릭하면 이력서 페이지로 이동합니다.</h2>
    `;
  };
  const onPointOut = (e) => {
    setHover(false);
    tooltip.classList.remove("isvisible");
  };

  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.001));
  return (
    <group>
      <animated.mesh
        onPointerOver={(e) => onPointHover(e)}
        onPointerOut={(e) => onPointOut(false)}
        position={position ? position : [0, 0, 0]}
        ref={mesh}
        receiveShadow
        castShadow
        {...props}
      >
        <rectAreaLight
          width={10}
          height={10}
          intensity={2000}
          color={"white"}
          position={[100, 100, 100]}
          rotation={[0, 180, 0]}
          castShadow
        />
        {model && <primitive object={model.scene} receiveShadow castShadow />}
      </animated.mesh>
    </group>
  );
};
