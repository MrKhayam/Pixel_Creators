import React from 'react';
import Navbar from './components/Navbar';
import MainCont from './components/MainCont';
import Horizontal from './components/Horizontal';
import Para from './components/Para';
import BigCard from './components/BigCard';

const App = () => {
  return (
    <>
      <div className="w-full h-auto pt-4 bg-[#000]">
      <Navbar />
      <MainCont />
      <Horizontal />
      <Para />
      <BigCard />
      </div>
    </>
  );
}

export default App;
