import React, { useState, useContext } from 'react'

import { CarContext } from '../contexts/CardProvider';

import Card from '../components/Card';

export default function CarRental() {

  const { car} = useContext(CarContext);
  
  const [term, setTerm] = useState('');
  const searchText = (event) =>{
      setTerm(event.target.value);
  }

  return (
    
   <div  className='min-h-[500px]'>
  
   

  
  <div className='flex justify-center'>
        <input 
        className=' bg-gray-200 p-3 rounded-lg w-[300px]'
        placeholder='search'
        type={'text'}
        onChange={searchText}
        />

        </div>

        <div className='grid  grid-cols-2  gap-12'>
        {
        car.filter( value => {
   if(term==''){
    return value
   }else if(
    value.title.toString().toLowerCase().includes(term.toString().toLowerCase())
    ){
  return value
   }
   else{
    return (<h3> Sorry, THe Item THat You Serached For Was Not Found</h3>)
   }
        }
        ).map( (value, index) =>{
            return(
              <div>
                <Card card={value} key={index}/>
              </div>
             
            )
        }
        )
       }

        </div>
 
   </div>
  )
}
