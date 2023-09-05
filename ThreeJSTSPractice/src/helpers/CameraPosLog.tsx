import { useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"

export const CameraPosLog=({e}: any)=>{
    const {camera} = useThree();
    const cameraRef = useRef();

    useEffect(()=>{
        const logCameraPosition = ()=>{
            const {x,y,z} = cameraRef.current.position;
            console.log(`pos x:${x}, y:${y}, z:${z}`)
        }
        cameraRef.current = camera;
        window.addEventListener(e, logCameraPosition)

        return ()=>{
            window.removeEventListener(e, logCameraPosition)
        }
    },[])
    return null;
}