import React from 'react'
import { vector3 } from "@/assets";
const SetUp = ({label,images,className}) => {
  return (
    <>
    <div className="w-full flex flex-col relative    items-center ">
        <img
            className=" scale-[0.3] z-10 object-contain"
            src={vector3}
            alt="Image 1"
        />

        <div className="w-[2px] h-[30px]  bg-black absolute top-[27%] z-0 text-yellow-500 text-center font-extrabold"></div>

        <div className="rounded-lg  bg-black p-2 absolute top-[12%] text-yellow-500 text-center font-extrabold">
            <span>{label}</span>
        </div>
        <img
            className={`${className}  absolute z-20`}
            src={images}
            alt="Image 1"
        />

    </div>
</>
  )
}

export default SetUp
