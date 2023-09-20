import { OrbitControls } from '@react-three/drei'
import "./Solar.scss";
import { Canvas } from "@react-three/fiber";
import { StarsComp } from "./starts/StarsComp";
import { Earth } from "./planets/earth/Earth";
//import { useRef } from 'react'
//import * as THREE from 'three'
import { DirectLight } from './lights/DirectLight'
import { Perf } from "r3f-perf";
import { Sun } from "./starts/sun/Sun";
//import { CameraPosLog } from "../../helpers/CameraPosLog";
import { Mercury } from './planets/mercury/Mercury'
import { Saturn } from "./planets/saturn/Saturn";
import { Venus } from "./planets/venus/Venus";
import { Mars } from "./planets/mars/Mars";
import { Jupiter } from "./planets/jupiter/Jupiter";
import { Uranus } from "./planets/uranus/Uranus";
import { Neptune } from "./planets/neptune/Neptune";
import { Dio } from "./planets/dio/Dio";

const Solar = () => {
  return (
    <div className="canvas-div" title="click on Earth to toggle display from Earth">
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 1000}}
        shadows
      >
        <Perf position="bottom-right" />
        {/* <CameraPosLog e="mousedown" /> */}
        {/* scene */}
        <OrbitControls/>
        <DirectLight/>
        <color attach="background" args={["black"]} />

        {/* components */}
        <StarsComp />
        <Dio/>
        <Neptune/>
        <Uranus/>
        <Saturn />
        <Jupiter/>
        <Mars/>
        <Earth />
        <Venus/>
        <Mercury />
        <Sun />
      </Canvas>
    </div>
  );
};
export default Solar;