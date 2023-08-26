import './Game.scss'
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh(geometry, material);

export const Game = () =>{


    return(
        <>
         <Link to='/'><button>Home</button></Link>
        <Canvas >
           <mesh>
                <boxGeometry args={[1,1,1]}/>
           </mesh>
        </Canvas>
        </>
       
    )
}