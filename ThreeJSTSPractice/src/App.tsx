
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss'
import {Perf} from 'r3f-perf'
import { Game } from './pages/game/Game'
import { Solar } from './pages/solar/Solar'
import { Header } from './pages/layout/header/Header'
import { Footer } from './pages/layout/footer/Footer'
import { Home } from './pages/home/Home'




function App() {
  

  return (
    <BrowserRouter>
    <Header/>
      <div className='page-container'>
        
        <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
        {/* <Route path=* element={<Error/>}/> */}
        <Route path='/solar' element={<Solar/>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
