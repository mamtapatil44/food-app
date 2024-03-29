import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { deleteItem } from "../utils/cartSlice";

export const CartList = (props) => {
const dispatch = useDispatch();
 const cartQuntity = props?.cartQuantity;
  const { id,name, cloudinaryImageId, price,defaultPrice, imageId } = props?.resData;
  const handleRemove =(id)=>{
    dispatch(deleteItem(id))

  }
  return (
    <div className="flex w-full justify-between  m-4 p-4 shadow-lg">
      <span className="flex  items-center w-1/2">
        {imageId ? (
          <img
            className="h-20 w-20 md:h-24 md:w-24 object-cover"
            src={CDN_URL + imageId}
            alt="product-logo"
          />
        ) : (
          <img
            className="h-20 w-20 md:h-24 md:w-24 object-cover"
            src={CDN_URL + cloudinaryImageId}
            alt="product-logo"
          />
        )}
        <h1 className="m-4 text-xs">{name}</h1>
        <p className="m-3 text-xs">Qty: {cartQuntity}</p>
      </span>

      <span className="flex  items-center w-1/2 justify-around">
        <p className="m-4 text-xs">Rs {price ? (price / 100) * cartQuntity : (defaultPrice / 100) * cartQuntity}</p>
        <button className="m-2 p-2 py-3 rounded-lg text-yellow-900 shadow-lg" onClick={()=>handleRemove(id)}>Remove</button>
      </span>
    </div>
  );
};
