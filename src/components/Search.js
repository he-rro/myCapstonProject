import React from 'react'
import { FaSearchLocation } from "react-icons/fa";

export default function Search() {

    const searchItems=[
        { display:' Where to Travle ?' ,type:'text',placeholder:'Search for Places'},
        { display:' Chech-In' ,type:'date'},
        { display:' Check-Out' ,type:'date'}
    ];
  return (
    <div className='flex justify-center bg-bg-search p-2 rounded-full '>
        {
   searchItems.map( value => {
    return (
        <div className='flex items-center justify-center flex-col p-4 '>
    <label className='text-light text-label-color' > {value.display} </label>
    <input
    className=' bg-violet-600  rounded-lg p-3 text-center text-black px-6 placeholder-gray-800'
     type = { value.type }  
     placeholder={value.placeholder}
      />
   </div>
    )
   })
        }
  
   <button
    className='px-4 mt-6 mr-12 rounded-full cursor-pointer text-white text-xl font-semibold
    bg-gradient-to-r  from-pink-600  to-yellow-500 hover:from-pink-400 hover:to-violet-900
     uppercase  transition ease-in-out duration-500 hover:bg-green ' > Search |
      <FaSearchLocation className='inline ml-2'/></button>

    </div>
  )
}


 