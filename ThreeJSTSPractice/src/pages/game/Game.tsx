import './Game.scss'
// import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
// import { Link } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const cube = new THREE.Mesh(geometry, material);

const Game = () =>{


    return(
        <div className='game-container'>
            <h1 className='UD'>Under Development</h1>
        <Canvas >
        <OrbitControls/>
           <mesh>
                <boxGeometry args={[1,1,1]}/>
           </mesh>
        </Canvas>
        </div>
       
    )
}

export default Game