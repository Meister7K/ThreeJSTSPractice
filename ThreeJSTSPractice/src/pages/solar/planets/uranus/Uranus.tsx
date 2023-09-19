import { useTexture } from "@react-three/drei";
import React, { useRef, useCallback, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
// import * as TWEEN from "@tweenjs/tween.js";
import uranImg from "../../../../assets/photos/textures/2k_uranus.jpg";

export const Uranus = React.memo((props: any) => {
  const uranRef = useRef(null);
  //const uranPosRef = useRef(new THREE.Vector3(20,0,0));
  //const clock = new THREE.Clock();
  const clockRef = useRef(new THREE.Clock());
  // const { camera } = useThree();

  const [hovered, setHovered] = useState(false);
  // const [camFollowM, setCamFollowM] = useState(false);
  // const [camPosM, setCamPosM] = useState(new THREE.Vector3(25, 0, 20));
  // const [camTargetM, setCamTargetM] = useState(new THREE.Vector3(0, 0, 0));
  //const originalCameraPos =  new THREE.Vector3(25,10,20);
  //const originalCamTarget = new THREE.Vector3(0,0,0);

  const [jupTexture] = useTexture([uranImg]);

  const updatePos = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.3;
    const distance = 35;
    const x = Math.sin(angle) * distance;
    const z = Math.cos(angle) * distance;
    uranRef.current.position.set(x, 0, z);
    uranRef.current.rotation.y += 0.01;
  }, []);

  // const toggleCam = () => {
  //   setCamFollowM((prevCam) => !prevCam);
  // };

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // const tweenAnimate = useCallback(() => {
  //   TWEEN.update();

  //   const uranPosRef = uranRef.current.position;

  //   if (camFollowM) {
  //     // const cameraTargetPos = new THREE.Vector3(
  //     //     uranPosRef.x + 10,
  //     //     uranPosRef.y + 2,
  //     //     uranPosRef.z + 5
  //     // );

  //     new TWEEN.Tween(camPosM)
  //       .to(camTargetM, 1000)
  //       .easing(TWEEN.Easing.Quadratic.Out)
  //       .onUpdate(() => {
  //         setCamPosM(camPosM);
  //       })
  //       .start();

  //     new TWEEN.Tween(camTargetM)
  //       .to(uranPosRef, 1000)
  //       .easing(TWEEN.Easing.Quadratic.Out)
  //       .onUpdate(() => {
  //         setCamTargetM(camTargetM);
  //       })
  //       .start();

  //     // camera.lookAt(camTargetM); // Update to look at camTargetM
  //     // camera.position.copy(cameraTargetPos);
  //   } else {
  //     const originalCameraPos = new THREE.Vector3(110, 20, 20);
  //     const originalCamTarget = new THREE.Vector3(0, 0, 0);

  //     new TWEEN.Tween(camPosM)
  //       .to(originalCameraPos, 1000)
  //       .easing(TWEEN.Easing.Quadratic.Out)
  //       .onUpdate(() => {
  //         setCamPosM(camPosM);
  //       })
  //       .start();

  //     new TWEEN.Tween(camTargetM)
  //       .to(originalCamTarget, 1000)
  //       .easing(TWEEN.Easing.Quadratic.Out)
  //       .onUpdate(() => {
  //         setCamTargetM(camTargetM);
  //       })
  //       .start();
  //   }
  //   camera.lookAt(camTargetM); // Update to look at camTargetM
  //   camera.position.copy(camPosM);
  //   camera.updateProjectionMatrix(); // Update projection matrix
  // }, [camFollowM]);

  useFrame(() => {
    updatePos();
    // tweenAnimate();
  });

  return (
    <group {...props} ref={uranRef}>
      <mesh
        receiveShadow
        castShadow
        // onClick={toggleCam}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      >
        <sphereGeometry args={[2.5, 36, 36]} />
        <meshPhongMaterial
          map={jupTexture}
        
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
});
