import React from 'react'

import {FaPlaneDeparture } from "react-icons/fa";
import {BsPersonFill } from "react-icons/bs";
 import {RiBriefcase4Fill } from "react-icons/ri";
import {GiCarDoor } from "react-icons/gi"; 
import {BsThermometerSnow } from "react-icons/bs";

export default function Card({card}) {
  return (
    <div className='destinations   '>
    <div className="destination min-h-[230px]  p-4 flex  justify-between gap-2 bg-bg-dest  rounded-2xl 
            transition ease-in-out duration-500 hover:translate-x-2 translate-y-4   shadow-lg">
  <img
  className='w-[270px]'
   src={card.image} alt="" />


<div className='flex flex-col justify-around min-w-[200px]   '> 

<div className=' mt-0'>  
<h3 className='text-center mb-6 mt-0 text-lg font-black font-serif'>{card.title}</h3>
<div className=" flex items-center justify-evenly hover:text-purple-600 ">
<div className='flex items-center'>
<BsPersonFill />
<span>{card.passengerNum}</span> 
</div>
<div className='flex items-center '>
<RiBriefcase4Fill />
<span>{card.bagNum}</span> 
</div>
<div className='flex items-center'>
<GiCarDoor />
<span>{card.doorNum}</span> 
</div>
<div className='flex items-center'>
<BsThermometerSnow />
<span>{card.airCondition}</span> 
</div>            
</div>
</div>



<div className=' '>

<hr style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#000000'
}}/>

<div className='flex items-start justify-start py-1 '> 
<FaPlaneDeparture  
className='mt-1 mr-2'
size={20}/>
<span>
<p className='text-2xs'>{card.place}</p> 
<p className='text-3xs'>{card.placeInfo}</p> 
</span>
</div>
</div>

 </div>

<div className="distance flex  flex-col justify-around items-end">
    
<span className='font-black text-2xl'>{card.cost}</span>
<button className='bg-gradient-to-r   from-pink-500 to-violet-700
      hover:from-pink-500  hover:to-yellow-500 rounded-xl px-3 py-1 text-white font-medium' > 
      View </button>
</div>
  
</div>
</div>
  )
}
