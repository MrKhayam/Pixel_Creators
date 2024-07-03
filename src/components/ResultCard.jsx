import React from 'react'
import Para from './Para'

const ResultCard = () => {
  return (
    <>
      <div className='mt-14 w-[80%] m-auto bg-gradient-to-b border-t border-[#118D9E] from-[#2A034A] via-[#0E0019] to-[#000] p-4 rounded-t-3xl h-auto flex flex-col gap-7 items-center'>
        <p className='text-white font-semibold'>OUR CLIENTS</p>
        <h1 className='text-white text-3xl text-center w-[87%]'>Our Clients Are Breaking the Algorithm</h1>
        <Para mart = {4} text = {'One Client at a time, We are transforming their growth on Social Media, by providing them best thumbnails.'} />
        <div className="flex text-white items-center flex-col gap-0">
          <h1 className='text-9xl font-bold bg-gradient-to-tr from-[#9400FE] via-[#6200DF] to-[#1F0047] bg-clip-text text-transparent'>35</h1>
          <h2>Total Clients</h2>
        </div>
      </div>
    </>
  )
}

export default ResultCard
