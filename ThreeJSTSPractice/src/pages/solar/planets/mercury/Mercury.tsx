import { useTexture } from "@react-three/drei";
import React, { useRef, useCallback, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import mercImg from "../../../../assets/photos/textures/mercMap.jpg";

export const Mercury = React.memo((props: any) => {
  const mercRef = useRef(null);
  //const mercPosRef = useRef(new THREE.Vector3(20,0,0));
  //const clock = new THREE.Clock();
  const clockRef = useRef(new THREE.Clock());
  const { camera } = useThree();

  const [hovered, setHovered] = useState(false);
  const [camFollowM, setCamFollowM] = useState(false);
  const [camPosM, setCamPosM] = useState(new THREE.Vector3(25, 0, 20));
  const [camTargetM, setCamTargetM] = useState(new THREE.Vector3(0, 0, 0));
  //const originalCameraPos =  new THREE.Vector3(25,10,20);
  //const originalCamTarget = new THREE.Vector3(0,0,0);

  const [mercTexture] = useTexture([mercImg]);

  const updatePos = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.6;
    const distance = 10;
    const x = Math.sin(angle) * distance;
    const z = Math.cos(angle) * distance;
    mercRef.current.position.set(x, 0, z);
    mercRef.current.rotation.y += 0.01;
  }, []);

  const toggleCam = () => {
    setCamFollowM((prevCam) => !prevCam);
  };

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const tweenAnimate = useCallback(() => {
    TWEEN.update();

    const mercPosRef = mercRef.current.position;

    if (camFollowM) {
      // const cameraTargetPos = new THREE.Vector3(
      //     mercPosRef.x + 10,
      //     mercPosRef.y + 2,
      //     mercPosRef.z + 5
      // );

      new TWEEN.Tween(camPosM)
        .to(camTargetM, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          setCamPosM(camPosM);
        })
        .start();

      new TWEEN.Tween(camTargetM)
        .to(mercPosRef, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          setCamTargetM(camTargetM);
        })
        .start();

      // camera.lookAt(camTargetM); // Update to look at camTargetM
      // camera.position.copy(cameraTargetPos);
    } else {
      const originalCameraPos = new THREE.Vector3(25, 10, 20);
      const originalCamTarget = new THREE.Vector3(0, 0, 0);

      new TWEEN.Tween(camPosM)
        .to(originalCameraPos, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          setCamPosM(camPosM);
        })
        .start();

      new TWEEN.Tween(camTargetM)
        .to(originalCamTarget, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          setCamTargetM(camTargetM);
        })
        .start();
    }
    camera.lookAt(camTargetM); // Update to look at camTargetM
    camera.position.copy(camPosM);
    camera.updateProjectionMatrix(); // Update projection matrix
  }, [camFollowM]);

  useFrame(() => {
    updatePos();
    tweenAnimate();
  });

  return (
    <group {...props} ref={mercRef}>
      <mesh
        receiveShadow
        castShadow
        onClick={toggleCam}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      >
        <sphereGeometry args={[0.3, 36, 36]} />
        <meshStandardMaterial
          map={mercTexture}
          emissive={0xffffff}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
});
