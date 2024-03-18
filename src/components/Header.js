import React from 'react'
import KITCHEN_LOGO from '../assets/images/MOM_Kitchen_Logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='flex justify-between shadow-lg'>
      <img  src={KITCHEN_LOGO} className='h-20 w-20 m-2'/>
      <ul className='flex justify-around p-4'>
        <li className='m-5'>
          <Link to='/'>Home</Link>
          </li>
        <li className='m-5'>About</li>
        <li className='m-5'>Contact Us</li>
        <li className='m-5'> Cart</li>
        <button className=''>Login</button>
      </ul>
    </div>
  )
}
