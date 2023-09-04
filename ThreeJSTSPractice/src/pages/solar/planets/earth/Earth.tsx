import {useTexture} from '@react-three/drei'
import { useRef, useCallback } from 'react'
import earthNormal from '../../../../assets/photos/textures/2k_earth_normal_map.jpg'
import earthImg from '../../../../assets/photos/textures/2k_earth_daymap.jpg'
import earthSpec from '../../../../assets/photos/textures/2k_earth_specular_map.jpg'
import earthNight from '../../../../assets/photos/textures/2k_earth_nightmap.jpg'
import { useFrame } from '@react-three/fiber';
import { Moon } from '../moon/Moon'
import {ISS} from '../iss/ISS'
import * as THREE from 'three'
import React from 'react'

export const Earth= React.memo((props:any)=>{

    const earthRef  = useRef(null);
    const earthPosRef = useRef(new THREE.Vector3(20,0,0));
    //const clock = new THREE.Clock();
    const clockRef = useRef( new THREE.Clock())

    const [earthTexture, earthNormalMap, earthSpecMap, earthEmissiveMap]= useTexture([earthImg, earthNormal, earthSpec, earthNight]);

    const updatePos = useCallback(()=>{
        const angle = clockRef.current.getElapsedTime()*0.5
        const distance = 20;
        const x = Math.sin(angle) * distance;
        const z = Math.cos(angle)* distance;
        earthRef.current.position.set(x,0,z);
        earthRef.current.rotation.y += 0.01;
        earthPosRef.current = earthRef.current.position;
    },[])

    useFrame(()=>{
        
        updatePos()
        
    })
    
    return(
        <group 
        {...props}
        ref={earthRef}
        >
        <mesh receiveShadow castShadow>
            <sphereGeometry args={[1,36,36]} />
            <meshStandardMaterial map={earthTexture} normalMap={earthNormalMap} roughnessMap={earthSpecMap} emissiveMap={earthEmissiveMap}
            emissive={0xffffff}
            emissiveIntensity={1}/>
        </mesh>
        <Moon/>
        <ISS/>
        </group>
    )
})