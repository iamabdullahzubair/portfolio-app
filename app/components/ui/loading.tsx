import React from 'react'


const Loading = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-lg font-semibold'>
       <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20 mb-4"></div>
       <span className="text-white text-xl">Loading...</span>
    </div>
  )
}

export default Loading