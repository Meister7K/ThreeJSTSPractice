import { useGLTF } from "@react-three/drei"
//import { useFrame } from "@react-three/fiber"
import { useMemo } from "react"
//import ISSObj from 'ISSObj.glb'

export const ISS =()=>{

    const memoizeISS = useMemo(()=>{
        return useGLTF('../../../src/assets/models/ISSObj.glb', true)
    },[])

    return(<>
    <mesh>
        <primitive object={memoizeISS.scene} position={[2,2,2]} scale={0.0009}/>
        </mesh>
    </>)
}