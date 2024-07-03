import React, {useRef} from 'react'

const MainCont = () => {
  const targetRef = useRef(null);
  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className="w-full h-auto flex flex-col mt-12 items-center justify-center">
        <img className='w-[80%]' src="image1.png" alt="" />
        <h1 className='text-white font-[poppins] font-bold text-3xl w-[90%] text-center m-auto'>Double Up Your Views on Youtube With Top Thumbnails</h1>
        <button onClick={handleScroll} className='text-white mt-12 text-lg rounded-md font-semibold bg-gradient-to-br from-[#171233] via-[#43107e] to-[#171233] px-14 py-4 transition-all duration-150 hover:scale-95'>Visit Portfolio</button>
      </div>
    </>
  )
}

export default MainCont
