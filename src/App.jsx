import React from 'react';
import Navbar from './components/Navbar';
import MainCont from './components/MainCont';

const App = () => {
  return (
    <>
      <div className="w-full h-screen pt-4 bg-[#000]">
      <Navbar />
      <MainCont />
      </div>
    </>
  );
}

export default App;
