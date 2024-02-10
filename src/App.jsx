import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/not_found/Not_Found';
import Header from './components/header/Header';
import RespGuide from './dev/respGuide';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <Header />
        <RespGuide />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App