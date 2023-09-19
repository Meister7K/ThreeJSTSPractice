import { useHelper } from '@react-three/drei'

import { useRef } from 'react'
import * as THREE from 'three'

export const DirectLight=()=>{

    const light = useRef(null);
useHelper(light, THREE.DirectionalLightHelper, 1, 'white')

    return(
        <>
        {/* <directionalLight ref={light} position={[1,1,10]} intensity={2} color='white' castShadow/> */}
        <ambientLight intensity={0.3}/>
        {/* <spotLight/> */}
        </>
    )
}