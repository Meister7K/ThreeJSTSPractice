import { Stars, OrbitControls } from '@react-three/drei'
import './Solar.scss'
import {Canvas} from '@react-three/fiber'

export const Solar = ()=>{
    return(<div className='canvas-div'>
    <Canvas>
        <OrbitControls/>
        <color attach='background' args={['black']}/>
        <Stars/>
    </Canvas>
    </div>)}