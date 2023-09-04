import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React, { useMemo, useRef, useCallback } from "react"
import * as THREE from "three";
//import ISSObj from 'ISSObj.glb'


export const ISS =React.memo(()=>{

    const clockRef= useRef(new THREE.Clock())
    const issRef = useRef(null);
  
    //const clock = new THREE.Clock();
const updatePos = useCallback(()=>{
    const xAxis = 3
       //orbit rot
         issRef.current.position.x = Math.sin(clockRef.current.getElapsedTime()*0.2)* xAxis;
         issRef.current.position.z = Math.cos(clockRef.current.getElapsedTime()*0.2)* xAxis;
        
                //axis rot
                issRef.current.rotation.y += 0.004;
},[])
    useFrame(()=>{
        //hover
       updatePos()
        
         
        
                
        
            })

    const memoizeISS = useMemo(()=>{
        return useGLTF('../../../src/assets/models/ISSObj.glb', true)
    },[])

    return(<>
    <mesh ref={issRef}>
        <primitive object={memoizeISS.scene} position={[0,0,0]} scale={0.002}/>
        </mesh>
    </>)
})