import {useTexture} from '@react-three/drei'
import { useRef, useState } from 'react'

import sunImg from '../../../../assets/photos/textures/2k_sun.jpg'

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Sun=(props:any)=>{
    
    const sunRef  = useRef(null);
    const[hover, setHover] = useState(false);
    //const xAxis = 8

    const [sunTexture]= useTexture([sunImg]);

    useFrame(()=>{
//hover
if(hover){
            sunRef.current.scale.set(1.1,1.1,1.1);
            // sunRef.current.
        }else{
            sunRef.current.scale.set(1,1,1); 
        }

        //orbit rot
//  sunRef.current.position.x = Math.sin(clock.getElapsedTime()*0.2)* xAxis;
//  sunRef.current.position.z = Math.cos(clock.getElapsedTime()*0.2)* xAxis;

        //axis rot
        sunRef.current.rotation.y -= 0.003;

        

    })
    
    return(
        <>
        <mesh 
        {...props}
        ref={sunRef}
        onPointerOver={()=>setHover(true)}
        onPointerOut={()=>setHover(false)}
        >
            <sphereGeometry args={[2,36,36]} />
            <meshPhongMaterial map={sunTexture} emissiveMap={sunTexture} emissiveIntensity={1} emissive={0xffffff}/>
            <pointLight castShadow intensity={1000}/>
        </mesh>
        </>
    )
}