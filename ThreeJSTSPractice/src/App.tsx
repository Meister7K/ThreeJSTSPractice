
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss'
import {Layout} from './pages/layout/Layout'
import { Game } from './pages/game/Game'



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        {/* <Route index element={<Home/>}/> */}
        <Route path="game" element={<Game/>}/>
        {/* <Route path=* element={<Error/>}/> */}

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
