import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home/components/Home';
import Monthstatistic from './pages/Monthstatistic/components/Monthstatistic';
import { Header } from './pages/sharad/Hader/Header';
import { Popup } from './pages/sharad/Popup/Popup';


function App() {
  return (
    <div className="global__container">
       {/* <Popup />  */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monthstatistic" element={<Monthstatistic />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
