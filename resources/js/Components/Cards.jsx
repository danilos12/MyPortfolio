import React from 'react'

const Cards = ({coverphoto,role,information,company,links}) => {
  return (
    <div className='w-[700px] h-[300px] md:h-full md:p-4  rounded-xl  justify-center overflow-hidden flex md:flex-col'>
      <div className="flex flex-col w-3/4 space-x-12">
 
            <div className="p-8 md:p-2 ">
              <h5 className='text-[#929292] mb-3 w-1/2'>{role}</h5>
                <h4 className='font-bold'>{company}</h4>
              <p className='text-sm text-[#929292]'>{information}</p>
              <a href={links} className='text-sm text-[#929292]'>{links}</a>
            </div>
            
   
        
      </div>
      <div className="flex w-full items-center ">
              <img className='object-cover w-auto ' src={coverphoto} alt="" />
            </div>
    </div>
  )
}

export default Cards