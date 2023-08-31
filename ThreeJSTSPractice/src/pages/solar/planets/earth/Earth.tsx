import {useTexture} from '@react-three/drei'
import { useRef, useState } from 'react'
import earthNormal from '../../../../assets/photos/textures/2k_earth_normal_map.jpg'
import earthImg from '../../../../assets/photos/textures/2k_earth_daymap.jpg'
import earthSpec from '../../../../assets/photos/textures/2k_earth_specular_map.jpg'
import { useFrame } from '@react-three/fiber';
import { Moon } from '../moon/Moon'
import {ISS} from '../iss/ISS'

export const Earth= ()=>{

    const earthRef  = useRef(null);
    const earthGroup = useRef(null);
    const[hover, setHover] = useState(false);
    

    const [earthTexture, earthNormalMap, earthSpecMap]= useTexture([earthImg, earthNormal, earthSpec]);

    useFrame(()=>{
        earthRef.current.rotation.y += 0.001;

        if(hover){
            earthRef.current.scale.set(1.1,1.1,1.1);
            // earthRef.current.
        }else{
            earthRef.current.scale.set(1,1,1); 
        }
        
    })
    
    return(
        <group ref={earthGroup}>
        <mesh receiveShadow castShadow ref={earthRef}
        onPointerOver={()=>setHover(true)}
        onPointerOut={()=>setHover(false)}>
            <sphereGeometry args={[1,36,36]} />
            <meshStandardMaterial map={earthTexture} normalMap={earthNormalMap} roughnessMap={earthSpecMap} />
        </mesh>
        <Moon/>
        <ISS/>
        </group>
    )
}