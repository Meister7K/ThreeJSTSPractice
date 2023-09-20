import { useTexture } from "@react-three/drei";
import { useRef, useCallback, useEffect, useState } from "react";
import earthNormal from "../../../../assets/photos/textures/2k_earth_normal_map.jpg";
import earthImg from "../../../../assets/photos/textures/2k_earth_daymap.jpg";
import earthSpec from "../../../../assets/photos/textures/2k_earth_specular_map.jpg";
import earthNight from "../../../../assets/photos/textures/2k_earth_nightmap.jpg";
import { useFrame, useThree } from "@react-three/fiber";
import { Moon } from "../moon/Moon";
import { ISS } from "../iss/ISS";
import * as THREE from "three";
// @ts-ignore
import * as TWEEN from "@tweenjs/tween.js";
import React from "react";

export const Earth = React.memo(() => {
  const earthRef = useRef<THREE.Group>(null);

  
  //const earthPosRef = useRef(new THREE.Vector3(20,0,0));
  //const clock = new THREE.Clock();
  const clockRef = useRef(new THREE.Clock());
  const { camera } = useThree();

  const [hovered, setHovered] = useState(false);
  const [camFollow, setCamFollow] = useState(false);
  const [camPos, setCamPos] = useState(new THREE.Vector3(60, 40, 0));
  const [camTarget, setCamTarget] = useState(new THREE.Vector3(0,0,0));
  //const originalCameraPos =  new THREE.Vector3(25,10,20);
  //const originalCamTarget = new THREE.Vector3(0,0,0);

  const [earthTexture, earthNormalMap, earthSpecMap, earthEmissiveMap] =
    useTexture([earthImg, earthNormal, earthSpec, earthNight]);



  const updatePos = useCallback(() => {

    if(earthRef.current){
      const angle = clockRef.current.getElapsedTime() * 0.5;
    const distance = 9;
    const x = Math.sin(angle) * distance;
    const z = Math.cos(angle) * distance;
    earthRef.current.position.set(x, 0, z);
    
    earthRef.current.rotation.y += 0.01;
    }
    
  }, []);

  const toggleCam = () => {
    setCamFollow((prevCam) => !prevCam);
  };

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const tweenAnimate = useCallback(() => {
    TWEEN.update();

    if(earthRef.current){
      const earthPosRef = earthRef.current.position;
  
    

    if (camFollow) {
      const angle = clockRef.current.getElapsedTime() * 0.4;
    const distance = 7;
    const camTargetPos = new THREE.Vector3(
      earthPosRef.x + Math.sin(angle) * distance,
      earthPosRef.y +5,
      earthPosRef.z +Math.cos(angle) * distance
    );

      // console.log(camTargetPos)
      // console.log(earthPosRef)

      new TWEEN.Tween(camPos)
        .to(camTargetPos, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          setCamPos(camPos);
          camera.position.copy(camPos);
        })
        .start();

      new TWEEN.Tween(camTarget)
        .to(earthPosRef, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          setCamTarget(camTarget);
          camera.lookAt(camTarget);
        })
        .start();

      // camera.lookAt(camTarget); // Update to look at camTarget
      // camera.position.copy(cameraTargetPos);
    } else {
      const originalCameraPos = new THREE.Vector3(60, 40, 0);
      const originalCamTarget = new THREE.Vector3(0, 0, 0);

      new TWEEN.Tween(camPos)
        .to(originalCameraPos, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          setCamPos(camPos);
          camera.position.copy(camPos);
        })
        .start();

      new TWEEN.Tween(camTarget)
        .to(originalCamTarget, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          setCamTarget(camTarget);
          camera.lookAt(camTarget);
        })
        .start();
    }  }
    // camera.lookAt(camTarget); // Update to look at camTarget
    // camera.position.copy(camPos);
    camera.updateProjectionMatrix(); // Update projection matrix
  }, [camFollow, camPos, camTarget, camera]);

  useFrame(() => {
    updatePos();
    tweenAnimate();
  });

  return (
    <group 
    //  {...props}
     ref={earthRef}>
      <mesh
        receiveShadow
        castShadow
        onClick={toggleCam}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      >
        <sphereGeometry args={[1, 36, 36]} />
        <meshStandardMaterial
          map={earthTexture}
          normalMap={earthNormalMap}
          roughnessMap={earthSpecMap}
          emissiveMap={earthEmissiveMap}
          emissive={0xffffff}
          emissiveIntensity={1}
        />
      </mesh>
      <Moon />
      <ISS />
    </group>
  );
});
