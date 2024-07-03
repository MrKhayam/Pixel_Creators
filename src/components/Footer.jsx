import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='mt-14 w-[90%] m-auto bg-gradient-to-b border-t border-[#118D9E] from-[#2A034A] via-[#0E0019] to-[#000] p-7 rounded-t-3xl h-auto flex flex-col gap-3 items-center '>
        <img className='w-[40%] mt-8' src="/1.png" alt="" />
        <p className='text-center text-sm mt-3 text-gray-400'>Acceptable Use | Privacy Policy | Terms & Conditions</p>
        <p className='text-center text-[10px] text-gray-400'>This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
        <p className='text-center text-[12px] text-gray-400'>©2024 agency-accelerator.io. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
