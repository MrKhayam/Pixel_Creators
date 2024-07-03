import React, {useRef} from 'react';
import Navbar from './components/Navbar';
import MainCont from './components/MainCont';
import Horizontal from './components/Horizontal';
import Para from './components/Para';
import BigCard from './components/BigCard';
import ResultCard from './components/ResultCard';
import SmmCard from './components/SmmCard';
import Portfolio from './components/Portfolio';
import Vertical from './components/Vertical';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const targetRef = useRef(null);
  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className="w-full h-auto pt-4 text-white bg-[#000]">
      <Navbar />
      <div className="w-full h-auto flex flex-col mt-12 items-center justify-center">
        <img className='w-[80%]' src="image1.png" alt="" />
        <h1 className='text-white font-[poppins] font-bold text-3xl w-[90%] text-center m-auto'>Double Up Your Views on Youtube With Top Thumbnails</h1>
        <button onClick={handleScroll} className='text-white mt-12 text-lg rounded-md font-semibold bg-gradient-to-br from-[#171233] via-[#43107e] to-[#171233] px-14 py-4 transition-all duration-150 hover:scale-95'>Visit Portfolio</button>
      </div>
      <Horizontal />
      <Para mart = {14} text = {'Unlock the power of first impressions with our expertly crafted thumbnails. At Pixel Creators, we blend creativity with precision to transform ideas into captivating visuals that demand attention. Our designs are tailored to amplify your message and drive engagement. Explore how we can elevate your online presence with thumbnails that intrigue, inspire, and leave a lasting impression.'} />
      <BigCard />
      <ResultCard />
      <SmmCard />
      <Horizontal />
      <div ref={targetRef} className="flex flex-col items-center gap-14 mt-14">
        <h1 className='text-white text-4xl font-bold'>PORTFOLIO</h1>
        <div className="flex flex-col gap-4 items-center w-[80%] m-auto">
        <img className='rounded-3xl border cursor-pointer hover:scale-95 transition-all duration-300' src="/thumb1.jpg" alt="" />
        <img className='rounded-3xl border cursor-pointer hover:scale-95 transition-all duration-300' src="/thumb3.jpg" alt="" />
        <img className='rounded-3xl border cursor-pointer hover:scale-95 transition-all duration-300' src="/thumb4.jpg" alt="" />
        <img className='rounded-3xl border cursor-pointer hover:scale-95 transition-all duration-300' src="/thumb5.jpg" alt="" />
        <img className='rounded-3xl border cursor-pointer hover:scale-95 transition-all duration-300' src="/thumb6.jpg" alt="" />
        </div>
      </div>
      <Vertical />
      <Contact />
      <Footer />
      </div>
    </>
  );
}

export default App;
