import {useTexture} from '@react-three/drei'
import { useRef, useState } from 'react'

import moonImg from '../../../../assets/photos/textures/2k_moon.jpg'

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';



export const Moon= ()=>{
const clock = new THREE.Clock();
    const moonRef  = useRef(null);
    const[hover, setHover] = useState(false);
    const xAxis = 8

    const [moonTexture]= useTexture([moonImg]);

    useFrame(()=>{
//hover
if(hover){
            moonRef.current.scale.set(1.1,1.1,1.1);
            // moonRef.current.
        }else{
            moonRef.current.scale.set(1,1,1); 
        }

        //orbit rot
 moonRef.current.position.x = Math.sin(clock.getElapsedTime()*0.2)* xAxis;
 moonRef.current.position.z = Math.cos(clock.getElapsedTime()*0.2)* xAxis;

        //axis rot
        moonRef.current.rotation.y += 0.003;

        

    })
    
    return(
        <>
        <mesh ref={moonRef}
        onPointerOver={()=>setHover(true)}
        onPointerOut={()=>setHover(false)}
        
        castShadow receiveShadow>
            <sphereGeometry args={[0.25,36,36]} />
            <meshStandardMaterial map={moonTexture}  />
        </mesh>
        </>
    )
}