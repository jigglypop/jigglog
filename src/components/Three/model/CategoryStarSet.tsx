import * as THREE from 'three';
import React, { useState, useMemo } from 'react';
import { Html } from '@react-three/drei';
import * as S from './style';
import { Link } from 'gatsby';

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

function RandomSpheres({ categorySet }: any) {
  const [geometry] = useState(() => new THREE.SphereGeometry(1, 32, 32));
  const data = useMemo(() => {
    return new Array(categorySet.length).fill([]).map((_, i) => ({
      x: Math.random() * 20 + xyzMap(i)[0] * 40,
      y: Math.random() * 20 + xyzMap(i)[1] * 40,
      z: Math.random() * 20 + xyzMap(i)[2] * 40,
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
              <S.SmallTag>
                <Link
                  to={`/categories/${categorySet[i].key}/1`}
                  className="smallinner"
                >
                  <h1>
                    {categorySet[i].key} {`(${length})`}
                  </h1>
                </Link>
              </S.SmallTag>
            </Html>
            <ambientLight
              intensity={0.005}
              color={'white'}
              receiveShadow
              castShadow
            />
            <meshStandardMaterial roughness={0.1} color={'white'} />
          </mesh>
        </group>
      ))}
    </>
  );
}

const CategoryStarSet = ({ categorySet }: any) => {
  return (
    <>
      <RandomSpheres categorySet={categorySet} />
    </>
  );
};

export default CategoryStarSet;
