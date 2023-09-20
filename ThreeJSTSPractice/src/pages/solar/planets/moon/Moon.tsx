import { useTexture } from "@react-three/drei";
import React, { useRef, useCallback, useState, useEffect } from "react";

import moonImg from "../../../../assets/photos/textures/2k_moon.jpg";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Moon = React.memo(() => {
  const moonRef = useRef<THREE.Mesh>(null);
  const clockRef = useRef(new THREE.Clock());

  const [hovered, setHovered] = useState(false);
  const [moonTexture] = useTexture([moonImg]);

  const updatePos = useCallback(() => {
    //const clock = new THREE.Clock();
    const xAxis = 2;
    //orbit rot
    if(moonRef.current){
       moonRef.current.position.x =
      Math.sin(clockRef.current.getElapsedTime() * 1.1) * xAxis;
    moonRef.current.position.z =
      Math.cos(clockRef.current.getElapsedTime() * 1.1) * xAxis;

    //axis rot
    moonRef.current.rotation.y += 0.003;
    }
   
  }, []);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame(() => {
    updatePos();
  });

  return (
    <>
      <mesh
        ref={moonRef}
        // {...props}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[0.25, 36, 36]} />
        <meshStandardMaterial
          map={moonTexture}
          emissiveMap={moonTexture}
          emissive={0xffffff}
          emissiveIntensity={0.05}
        />
      </mesh>
    </>
  );
});
