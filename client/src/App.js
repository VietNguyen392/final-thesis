import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './components/layout'
import { Home, Doctor, Spectality, Notfound } from './pages'

const App = () => {
  return (
    <React.Fragment>
      <Main>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='doctor' element={<Doctor />} />
          <Route path='spectality' element={<Spectality />} />
          <Route path='*' element={<Notfound />} />
        </Routes>  
     
      </Main>
    </React.Fragment>
  )
}

export default App