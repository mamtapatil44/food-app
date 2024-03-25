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
      <div className='mx-auto w-3/5'>
        <div>
        {cartItems.map((cartItem,index)=> <CartList key={index}  resData={cartItem?.card?.info}/>)}
       </div>
       <div>
        
        {totalCartAmout ? ( <span className='flex justify-around'>
        <h3 className='3/4 mr-4'>Total ammount of your cart </h3>
        <p className='1/4 mx-8 mr-0'> Rs {totalCartAmout}</p>
       </span>) :(<span className='relative flex'>
        <img className='m-auto' src={Empty_Cart_Img} alt='Empty Cart'/>
       </span>)}
      
       </div>
        </div>
     
    
    </div>
  )
}

export default Cart