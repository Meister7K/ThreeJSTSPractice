import {Stars} from '@react-three/drei'
import { useRef} from 'react'
import {useFrame} from '@react-three/fiber'

export const StarsComp = () =>{
const starsRef = useRef<THREE.Mesh>(null);

useFrame(()=>{
    if(starsRef.current){
        starsRef.current.rotation.y +=0.0001;
    starsRef.current.rotation.x +=0.0001;
    starsRef.current.rotation.z +=0.0001;
    }
    
})

    return(
        <>
        <Stars ref={starsRef}/>
        </>
    )
}