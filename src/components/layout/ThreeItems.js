import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  MapControls,
  OrbitControls,
} from "three/examples/jsm/controls/OrbitControls";

import { extend, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, animated } from "react-spring/three";
import { navigate } from "gatsby";

extend({
  MapControls,
  OrbitControls,
});
export const distance = 1600;
// 바깥
export const Outer = () => {
  return ImportGltf("/gallaxy/scene.gltf", "바깥", "outer", true);
};
// 지구
export const PlanetEarth = ({ categorySet, hasPortfolio }) => {
  return ImportGltf(
    "/planet_earth/scene.gltf",
    "바깥",
    "planetearth",
    true,
    [0, 0, 0],
    [2, 2, 2],
    categorySet,
    hasPortfolio
  );
};
// 화성
export const PlanetMars = ({ categorySet, hasPortfolio }) => {
  return ImportGltf(
    "/mars/scene.gltf",
    "바깥",
    "mars",
    true,
    [30, 10, 50],
    [0.05, 0.05, 0.05],
    categorySet,
    hasPortfolio
  );
};

// 수성
export const PlanetMercury = ({ categorySet, hasPortfolio }) => {
  return ImportGltf(
    "/venus/scene.gltf",
    "바깥",
    "mercury",
    true,
    [20, -20, -50],
    [0.08, 0.08, 0.08],
    categorySet,
    hasPortfolio
  );
};
export const ImportGltf = (
  URL,
  name,
  tag,
  rotate,
  position,
  scale,
  categorySet,
  hasPortfolio
) => {
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
    color: active ? "hotpink" : "white",
    pos: active ? [0, 0, 2] : [0, 0, 0],
    "material-opacity": hovered ? 0.6 : 0.25,
    scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  });
  const tooltip = document.querySelector("#tooltip");
  const onPointHover = (e) => {
    setHover(true);
    tooltip.classList.add("isvisible");
    if (tag === "planetearth") {
      tooltip.innerHTML = `
                <h1>JIGGLYPOP</h1>
                <h1>염동환</h1>
                <h3>풀스택 개발자입니다. 무언가 만드는 것을 좋아하며, 주력은 리액트 프론트엔드입니다.</h3>
                <h3>하지만 모든 것에 관심이 많고 VUE, ANGULAR를 모두 사용합니다.</h3>
                <h3>프론트엔드 뿐만 아니라 백엔드도 다룹니다.</h3>
                <h3>3D 웹에 관심이 많으며 항상 프로젝트를 쉬지 않고 합니다.</h3>
                <h2>행성을 클릭하면 이력서 페이지로 이동합니다.</h2>
            `;
    } else if (tag === "mars") {
      tooltip.innerHTML = `
                <h1>카테고리</h1>
                <h3>포스트 카테고리 페이지입니다.</h3>
                <h3>누르면 카테고리 페이지로 이동합니다.</h3>
                <h2>행성을 클릭하면 페이지로 이동합니다.</h2>
            `;
    } else if (tag === "mercury") {
      tooltip.innerHTML = `
                <h1>포트폴리오</h1>
                <h3>${hasPortfolio &&
                  hasPortfolio.map((item) => {
                    return `${item.title} `;
                  })}</h3>
                <h2>행성을 클릭하면 포트폴리오로 이동합니다.</h2>
            `;
    }
  };
  const onPointOut = (e) => {
    setHover(false);
    tooltip.classList.remove("isvisible");
  };

  const onClick = (e) => {
    if (tag === "planetearth") {
      navigate("/resume");
    } else if (tag === "mars") {
      navigate("/pages/1");
    } else if (tag === "mercury") {
      navigate("/portfolios");
    }
  };
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.001));
  return (
    <group>
      <animated.mesh
        onClick={(e) => onClick(e)}
        onPointerOver={(e) => onPointHover(e)}
        onPointerOut={(e) => onPointOut(false)}
        {...props}
      >
        <mesh
          position={position ? position : [0, 0, 0]}
          scale={scale ? scale : [1, 1, 1]}
          ref={mesh}
          receiveShadow
          castShadow
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
        </mesh>
      </animated.mesh>
    </group>
  );
};
