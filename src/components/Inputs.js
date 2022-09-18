const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass
}){
    return(
        <div className="my-5">
            <label htmlFor={labelFor} className="sr-only">
              {labelText}
            </label>
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={fixedInputClass+customClass}
              placeholder={placeholder}
            />
          </div>
    )
}




/* import React, { useState } from 'react'
import { loginFields } from '../constants/formFields';

export default function Inputs() {

    const loginFields=[
        {
            id:"email-address",
            name:"email",
            type:"email",
            autoComplete:"email",
            isRequired:true,
            placeholder:"Email address"   
        },

        {
            id:"password",
            name:"password",
            type:"password",
            autoComplete:"current-password",
            isRequired:true,
            placeholder:"Password"   
        }
    ]
    
  const  [ input, setInput ] = useState( { } );

  const handlChanges = ( event ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}))
  }

  const handleSubmit = ( event ) => {
  event.preventDefault();
  }
  return (
   <form className="mt-8 space-y-6">
     <div className="-space-y-px">
    
        
        {
        loginFields.map( value => {
            return ( 
            <input 
            labelText={value.labelText}
            labelFor={value.labelFor}
            id={value.id}
            name={value.name}
            type={value.type}
            value={input.name}
            autoComplete={value.autoComplete}
            isRequired={value.isRequired}
            placeholder={value.placeholder}
            onChange={handlChanges}
            className={"rounded-md appearance-none relative block w-full px-3 py-2 my-6 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

        }

            />
            )
        })
        }
        
     
        <button 
        className='w-full bg-purple-500'
        onClick={handleSubmit} > Login </button>
    </div>
   </form>
  )
}
 */