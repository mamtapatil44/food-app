import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { deleteItem } from "../utils/cartSlice";

export const CartList = (props) => {
const dispatch = useDispatch();
  const { id,name, cloudinaryImageId, price, imageId } = props?.resData;
  const handleRemove =(id)=>{
    dispatch(deleteItem(id))

  }
  return (
    <div className="flex justify-between  m-4 p-4 shadow-lg">
      <span className="flex  items-center">
        {imageId ? (
          <img
            className="h-24 w-24 object-cover"
            src={CDN_URL + imageId}
            alt="product-logo"
          />
        ) : (
          <img
            className="h-24 w-24 object-cover"
            src={CDN_URL + cloudinaryImageId}
            alt="product-logo"
          />
        )}
        <h1 className="m-4">{name}</h1>
      </span>

      <span className="flex  items-center">
        <p className="m-4">Rs {price / 100}</p>
        <button className="m-2 p-2 py-3 rounded-lg text-yellow-900 shadow-lg" onClick={()=>handleRemove(id)}>Remove</button>
      </span>
    </div>
  );
};
