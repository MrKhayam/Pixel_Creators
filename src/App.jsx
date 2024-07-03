import React from 'react';
import Navbar from './components/Navbar';
import MainCont from './components/MainCont';
import Horizontal from './components/Horizontal';
import Para from './components/Para';
import BigCard from './components/BigCard';
import ResultCard from './components/ResultCard';
import SmmCard from './components/SmmCard';

const App = () => {
  return (
    <>
      <div className="w-full h-auto pt-4 text-white bg-[#000]">
      <Navbar />
      <MainCont />
      <Horizontal />
      <Para mart = {14} text = {'Unlock the power of first impressions with our expertly crafted thumbnails. At Pixel Creators, we blend creativity with precision to transform ideas into captivating visuals that demand attention. Our designs are tailored to amplify your message and drive engagement. Explore how we can elevate your online presence with thumbnails that intrigue, inspire, and leave a lasting impression.'} />
      <BigCard />
      <ResultCard />
      <SmmCard />
      </div>
    </>
  );
}

export default App;
