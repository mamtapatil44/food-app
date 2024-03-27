import React from 'react'
import { useSelector } from 'react-redux'
import { CartList } from '../components/CartList';
import useCalculatedAmout from '../hooks/useCalculatedAmout';
import Empty_Cart_Img from '../assets/images/Empty_Cart_Img.png'

const Cart = () => {
  const cartItems = useSelector(store=>store?.cart?.items);
 const totalCartAmout = useCalculatedAmout();
 
  return (
    <div className=''>
      <div className='mx-auto md:w-3/5'>
        <div>
        {cartItems.map((cartItem,index)=> <CartList key={index}  resData={cartItem?.card?.info}/>)}
       </div>
       <div className='w-full justify-center'>
        
        {totalCartAmout ? ( <span className='flex justify-between  gap-12 md:gap-40 mx-4'>
        <h3 className='w-1/2 '>Total amount : </h3>
        <p className='w-1/2 '> Rs {totalCartAmout}</p>
       </span>) :(<span className='relative flex items-center justify-center'>
        <img className='m-auto' src={Empty_Cart_Img} alt='Empty Cart'/>
       </span>)}
      
       </div>
        </div>
     
    
    </div>
  )
}

export default Cart