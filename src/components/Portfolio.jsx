import React from 'react'

const Portfolio = () => {
  return (
    <>
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
    </>
  )
}

export default Portfolio
