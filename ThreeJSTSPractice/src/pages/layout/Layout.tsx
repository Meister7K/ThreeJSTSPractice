import './Layout.scss'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

export const Layout = () =>{


    return(
        <div className='layout-container'>
            <Header/>
            <div className='content-container'>
                
            </div>
            <Footer/>
        </div>
    )
}