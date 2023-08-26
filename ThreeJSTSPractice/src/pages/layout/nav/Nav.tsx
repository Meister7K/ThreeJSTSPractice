import './Nav.scss'
import { Link } from 'react-router-dom'

export const Nav = () =>{


    return(
        <nav className='nav'>
            <ul className='nav-ul'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/game'>Game</Link>
                </li>
            </ul>
        
        </nav>
    )
}