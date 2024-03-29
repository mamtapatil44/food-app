import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCountCart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    getCartCount();
  });
  const getCartCount = () => {
    const totalCount = cartItems.reduce((accumulator, item) => {
      accumulator += item?.cartQuantity;

      return accumulator;
    }, 0);
    setCartCount(totalCount)
  }

 return cartCount;
};
export default useCountCart;
