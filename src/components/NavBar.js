import React from 'react'
import { Link } from 'react-router-dom'
const links=[
    {name:'Flights' , url:"/"},
    {name:'Stays' , url:"/stays"},
    {name:'Car Rental' , url:"/carRental"},
    {name:'Packages' , url:"/packages"},
    {name:'Login' , url:"/login"},
]
export default function NavBar() {
  return (
    <nav  >
        <ul className='flex bg-green'>
           { links.map((value)=>{
           return (<li className='m-5'>
            {<Link to={value.url}> {value.name}</Link>}
           </li>)
           })
           }
        </ul>
    </nav>
  )
}
