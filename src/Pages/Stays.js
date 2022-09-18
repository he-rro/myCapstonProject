import React from 'react'
import Recommend from '../components/Recommend'

export default function Stays() {
  return (
    <div>
      <Recommend/>
    </div>
  )
}


/* import React from 'react'
import Hero2 from '../components/Hero2'
import { carData } from '../componentData/carFields'
import Card from '../components/Card'

export default function Stays() {
  return (
    <div>
   {
    carData.map( value => {
       <Card
       key={value.id}
       image = { value.image}
       title = { value.title }
       subTitle = { value.subTitle }
       info1 = { value.info1 }
       info2 = { value.info2 }
       info3 = { value.info3 }
       cost = { value.cost }
       distance = { value.distance }
       duration = { value.duration }

       /> 
     }
     )
    }
    </div>
  )
}


/* import React,{useEffect} from 'react'
import scrollreveal from 'scrollreveal'
import Card from '../components/Cardd'
import { cardData }  from "../constants/cardFields"

export default function Stays() {
  const data=cardData;
  let dataState = { };
  data.forEach( value => dataState [ value.id ] = '' ) ;
  const [carState,setcarState]=useState(dataState);

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div> <div>
      
    {
     data.map( value => {
       <Card
       key={value.id}
       image = { value.image}
       title = { value.title }
       subTitle = { value.subTitle }
       info1 = { value.info1 }
       info2 = { value.info2 }
       info3 = { value.info3 }
       cost = { value.cost }
       distance = { value.distance }
       duration = { value.duration }

       /> 
     }
     )
    }
     
   </div></div>
  )
}
 */ 