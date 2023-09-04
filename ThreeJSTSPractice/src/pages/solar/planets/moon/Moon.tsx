import {useTexture} from '@react-three/drei'
import React, { useRef, useCallback} from 'react'

import moonImg from '../../../../assets/photos/textures/2k_moon.jpg'

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';




export const Moon= React.memo((props:any)=>{

    const moonRef  = useRef(null);
  const clockRef = useRef(new THREE.Clock());
 

    const [moonTexture]= useTexture([moonImg]);

    const updatePos = useCallback(()=>{

//const clock = new THREE.Clock();
   const xAxis = 4;
               //orbit rot
 moonRef.current.position.x = Math.sin(clockRef.current.getElapsedTime()*1.1)* xAxis;
 moonRef.current.position.z = Math.cos(clockRef.current.getElapsedTime()*1.1)* xAxis;

        //axis rot
        moonRef.current.rotation.y += 0.003;
    },[])

    useFrame(()=>{

updatePos();        

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
})