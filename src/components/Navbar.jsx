import React from 'react'
import { FaGripLines } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <div className="m-auto w-[90%] rounded-lg h-auto p-4 bg-gradient-to-r from-[#1A143D] via-[#3B0F6C] to-[#1A143D] flex justify-between items-center">
      <div className="left">
      <div className="logo">
        <img className='w-[25%]' src="public/Logo White Transparent.png" alt="" />
      </div>
      </div>
      <div className="right text-white">
      <FaGripLines size={28} cursor={'pointer'} />

      </div>
      </div>
    </>
  )
}

export default Navbar
