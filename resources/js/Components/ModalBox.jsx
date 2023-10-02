import React from 'react'

const ModalBox = ({paragraph, images, titles,className}) => {
  return (
    <div className='w-[330px] h-[370px] border rounded-2xl bg-black text-center text-yellow-500 flex flex-col items-center justify-center p-6  '>
        <h4 className='font-black'>{titles}</h4>
        <div className="w-full h-1/2  flex items-center justify-center">
        <img className={`object-contain ${className}`} src={images}  />
        </div>

        <span className='text-white text-sm p-2'>{paragraph}</span>

    </div>
  )
}

export default ModalBox
