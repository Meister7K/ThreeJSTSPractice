import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef, useState } from "react"
import * as THREE from "three";
//import ISSObj from 'ISSObj.glb'

export const ISS =()=>{

    const xAxis = 4
    const issRef = useRef(null);
    const[hover, setHover] = useState(false);
    const clock = new THREE.Clock();

    useFrame(()=>{
        //hover
        if(hover){
                    issRef.current.scale.set(1.1,1.1,1.1);
                    // issRef.current.
                }else{
                    issRef.current.scale.set(1,1,1); 
                }
        
                //orbit rot
         issRef.current.position.x = Math.sin(clock.getElapsedTime()*0.2)* xAxis;
         issRef.current.position.z = Math.cos(clock.getElapsedTime()*0.2)* xAxis;
        
                //axis rot
                issRef.current.rotation.y += 0.004;
        
                
        
            })

    const memoizeISS = useMemo(()=>{
        return useGLTF('../../../src/assets/models/ISSObj.glb', true)
    },[])

    return(<>
    <mesh ref={issRef}>
        <primitive onPointerOver={()=>setHover(true)}
        onPointerOut={()=>setHover(false)} object={memoizeISS.scene} position={[2,0,0]} scale={0.002}/>
        </mesh>
    </>)
}