import {Stars} from '@react-three/drei'
import {MutableRefObject, useRef} from 'react'
import {useFrame} from '@react-three/fiber'

export const StarsComp = () =>{
const starsRef = useRef<MutableRefObject>(null);

useFrame(()=>{
    starsRef.current.rotation.y +=0.0001;
    starsRef.current.rotation.x +=0.0001;
    starsRef.current.rotation.z +=0.0001;
})

    return(
        <>
        <Stars ref={starsRef}/>
        </>
    )
}