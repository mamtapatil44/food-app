import React, { useState ,useEffect} from 'react'
import { useSelector } from 'react-redux';

const useCalculatedAmout = () => {

 const cartItems = useSelector(store=>store?.cart?.items);;
 const [amount ,setAmount] =useState(null);

 useEffect (()=>{
    getAmount()
 })
 
 function getAmount() {
    const totalPrice = cartItems.reduce((accumulator ,item) => {
      if(item.card?.info?.price){
         accumulator +=  item.cartQuantity * (item.card?.info?.price/100) ;
      }
      else{
         accumulator +=  item.cartQuantity * (item.card?.info?.defaultPrice/100);
      }
      return accumulator;
         
      }, 0)
      setAmount(totalPrice)
  }

 return amount
}

export default useCalculatedAmout