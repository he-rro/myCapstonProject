import React, { createContext, useState } from 'react'

import { carData } from '../componentData/carFields'

export const CarContext =  createContext()

export default function CarProvider(  {children} ) {

    const [ car] = useState( carData );
    


  return (
    <CarContext.Provider value={{car }}> 
          {children}
    </CarContext.Provider>
  )
}




