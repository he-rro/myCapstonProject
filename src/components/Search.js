import React from 'react'
import { FaSearchLocation } from "react-icons/fa";

export default function Search() {

    const searchItems=[
        { display:' Where to Travle ?' ,type:'text',placeholder:'Search for Places'},
        { display:' Chech-In' ,type:'date'},
        { display:' Check-Out' ,type:'date'}
    ];
  return (
    <div className='flex bg-bg-search p-2 rounded-full'>
        {
   searchItems.map( value => {
    return (
        <div className='flex items-center justify-center flex-col p-4'>
    <label className='text-light text-label-color' > {value.display} </label>
    <input
    className=' bg-transparent  text-center text-black px-6 placeholder-gray-800'
     type = { value.type }  
     placeholder={value.placeholder}
      />
   </div>
    )
   })
        }
  
   <button
    className='px-4 my-6 mr-12 rounded-full cursor-pointer text-white bg-blue-800 
    text-sm font-thin uppercase  transition ease-in-out duration-500 hover:bg-green ' > Search |
      <FaSearchLocation className='inline ml-2'/></button>

    </div>
  )
}


 /* <div className='flex items-center justify-center flex-col p-6'>
    <label className='text-light text-label-color' >  Where to Travle ?</label>
    <input
    className=' bg-transparent  text-center text-black '
     type = { 'text' } name='place' placeholder='search for places' />
   </div>
   <div>
    <label> Check-In</label>
    <input type={'date'} />
   </div>
   <div>
    <label> Check-Out</label>
    <input type={'date'} />
   </div> */