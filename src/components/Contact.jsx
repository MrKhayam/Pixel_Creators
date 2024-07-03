import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="h-auto w-[90%] m-auto mt-20 flex flex-col items-center justify-center gap-12">
        <div className="text flex flex-col items-center justify-center">
            <h1 className='text-[#9202DE] text-center '>Contact Us</h1>
            <h1 className='text-white text-center text-3xl w-[60%] font-bold'>Get Access To The Right People</h1>
        </div>
        <div className="form flex flex-col gap-1 items-center justify-center w-[90%] h-auto ">
        <button className='text-white mt-0 text-lg rounded-md font-semibold bg-gradient-to-br from-[#171233] via-[#43107e] to-[#171233] px-32 py-4 cursor-default'>Let's Talk</button>
        <button disabled className='text-white mt-4 text-lg rounded-md font-semibold cursor-pointer bg-green-600 px-32 py-4 transition-all duration-150 hover:scale-95'>Whatsapp</button>
        </div>
      </div>
    </>
  )
}

export default Contact
