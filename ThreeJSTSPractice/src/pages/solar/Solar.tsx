import { OrbitControls, useHelper } from '@react-three/drei'
import './Solar.scss'
import {Canvas} from '@react-three/fiber'
import { StarsComp } from './starts/StarsComp'
import { Earth } from './planets/earth/Earth'
import { useRef } from 'react'
import * as THREE from 'three'
import { DirectLight } from './lights/DirectLight'
import {Perf} from 'r3f-perf'




export const Solar = ()=>{

const perfRef = useRef();



    return(<div className='canvas-div'>
    <Canvas camera={{fov:75, near:0.1, far: 1000}} shadows>
        <Perf position='bottom-right'/>
        {/* scene */}
            <OrbitControls/>
            <color attach='background' args={['black']}/>
            <DirectLight/>
        {/* components */}
        <StarsComp/>
       
        <Earth/>
        
        
    </Canvas>
    </div>)}