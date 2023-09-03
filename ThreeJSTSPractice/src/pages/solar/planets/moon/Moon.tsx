import {useTexture} from '@react-three/drei'
import { useRef, useState } from 'react'

import moonImg from '../../../../assets/photos/textures/2k_moon.jpg'

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';



export const Moon= (props:any)=>{
const clock = new THREE.Clock();
    const moonRef  = useRef(null);
  
    const xAxis = 4

    const [moonTexture]= useTexture([moonImg]);

    useFrame(()=>{

        //orbit rot
 moonRef.current.position.x = Math.sin(clock.getElapsedTime()*5)* xAxis;
 moonRef.current.position.z = Math.cos(clock.getElapsedTime()*5)* xAxis;

        //axis rot
        moonRef.current.rotation.y += 0.003;

        

    })
    
    return(
        <>
        <mesh ref={moonRef}
        {...props}
     
        
        castShadow receiveShadow>
            <sphereGeometry args={[0.25,36,36]} />
            <meshStandardMaterial map={moonTexture} emissiveMap={moonTexture} emissive={0xffffff} emissiveIntensity={0.05} />
        </mesh>
        </>
    )
}