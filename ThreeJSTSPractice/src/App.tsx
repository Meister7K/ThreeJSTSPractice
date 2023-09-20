import { Suspense,lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
// import { Perf } from 'r3f-perf'

const Game = lazy(()=> import('./pages/game/Game'))
const Solar = lazy(()=> import('./pages/solar/Solar'))
const Home = lazy(()=> import('./pages/home/Home'))
import { Header } from './pages/layout/header/Header'
import { Footer } from './pages/layout/footer/Footer'
//import { Home } from './pages/home/Home'




function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className='page-container'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
     
            <Route path='ThreeJSTSPractice/' index element={<Home />} />
         
            <Route path="ThreeJSTSPractice/game" element={<Game />} />
         
            <Route path='ThreeJSTSPractice/solar' element={<Solar />} />
      
          {/* <Route path='*' element={<Error/>}/> */}

        </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
