import './Nav.scss'
import { Link } from 'react-router-dom'

export const Nav = () =>{


    return(
        <nav className='nav'>
            <ul className='nav-ul'>
                <li>
                    <Link to='ThreeJSTSPractice/'>Home</Link>
                </li>
                <li>
                    <Link to='ThreeJSTSPractice/game'>Game</Link>
                </li>
                <li>
                    <Link to='ThreeJSTSPractice/solar'>Solar</Link>
                </li>
            </ul>
        
        </nav>
    )
}