import React from 'react'
import Para from './Para'

const SmmCard = () => {
  return (
    <>
      <div className="flex flex-col mt-14 items-center">
        <p className='text-[#9202DE]'>The SMM AGENCY</p>
        <h1 className='text-3xl font-semibold mt-2 w-[85%] text-center'>The Best Thumbnail Providing Agency.</h1>
        <div className="rounded-3xl flex w-[90%] h-56 p-5 bg-gradient-to-b border-t border-[#118D9E] from-[#2A034A] via-[#0E0019] to-[#000] items-center justify-center my-5">
            <img src="/1.png" className='w-[60%]' alt="" />
        </div> 
        <h1 className='text-[#9202DE]'>PIXEL CREATORS</h1>       
        <h1 className='text-3xl font-semibold mt-2 w-[90%] text-center mb-3'>Grow Fast On Social Media</h1>
        <Para mart = {2} text = {'Get your desired thumbnail designs for your social posts to boost them up and engage more...'} />
      </div>
    </>
  )
}

export default SmmCard
