import * as THREE from 'three';
import React, { useState, useMemo } from 'react';
import { Html } from '@react-three/drei';
import * as S from './style';
import { Link } from 'gatsby';
import { Vector2 } from 'three';

const xyzMap = (i: number) => {
  const obj = [
    [1, 1, 1],
    [1, 1, -1],
    [1, -1, 1],
    [1, -1, -1],
    [-1, 1, 1],
    [-1, 1, -1],
    [-1, -1, 1],
    [-1, -1, -1],
  ];
  return obj[i % 8];
};

const colors = [
  '#ffa49a',
  '#d36cff',
  '#3498db',
  '#e67e22',
  '#5cd9ff',
  '#e76dff',
  '#ceff47',
  '#f0fff6',
  '#ff6f9f',
  '#ff9f7a',
];

const RandomSpheres = ({ categorySet }: any) => {
  const [geometry] = useState(() => new THREE.SphereGeometry(1, 32, 32));
  const data = useMemo(() => {
    return new Array(categorySet.length).fill([]).map((_, i) => ({
      x: Math.random() * 20 + xyzMap(i)[0] * (20 + i * 10),
      y: Math.random() * 20 + xyzMap(i)[1] * (20 + i * 10),
      z: Math.random() * 20 + xyzMap(i)[2] * (20 + i * 10),
      s: 1,
    }));
  }, []);
  return (
    <>
      {data.map((props: any, i) => (
        <group key={i}>
          <mesh
            position={[props.x, props.y, props.z]}
            scale={[props.s, props.s, props.s]}
            geometry={geometry}
            receiveShadow
            castShadow
          >
            <Html zIndexRange={[1, 0]}>
              <S.SmallTag color={colors[i % 10]}>
                <Link
                  to={`/categories/${categorySet[i].key}/1`}
                  className="smallinner"
                >
                  <h1>
                    {categorySet[i].key} {`(${categorySet[i].length})`}
                  </h1>
                </Link>
              </S.SmallTag>
            </Html>
            <spotLight intensity={0.2} color={colors[i % 10]} />
            <meshStandardMaterial color={colors[i % 10]} />
          </mesh>
        </group>
      ))}
    </>
  );
};

const CategoryStarSet = ({ categorySet }: any) => {
  return (
    <>
      <RandomSpheres categorySet={categorySet} />
    </>
  );
};

export default CategoryStarSet;
