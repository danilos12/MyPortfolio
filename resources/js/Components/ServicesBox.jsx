import React from 'react'

const ServicesBox = ({titles,message,icons}) => {
  return (
    <div className="grid w-[350px] h-full bg-[#0D0D0D] bg-opacity-50 p-12 gap-y-3">
    <img src={icons} alt="box" />
    <span className='font-semibold text-xl '>{titles}</span>
    <p className='font-light text-base'>
      {message}
    </p>
</div>
  )
}

export default ServicesBox
