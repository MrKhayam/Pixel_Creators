import React from 'react'

const Para = ({mart,text}) => {
  return (
    <>
     <div className={`h-auto w-[90%] m-auto mt-${mart}`}>
    <p className='text-gray-400 text-center'>{text}</p>
    </div> 
    </>
  )
}

export default Para
