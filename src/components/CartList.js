import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { deleteItem } from "../utils/cartSlice";

export const CartList = (props) => {
  const dispatch = useDispatch();
  const cartQuntity = props?.cartQuantity;
  const { id, name, cloudinaryImageId, price, defaultPrice, imageId } =
    props?.resData;
  const handleRemove = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className=" px-1 py-4 font-medium">
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
        </td>
        <td className=" px-1 py-4 font-medium"> {name}</td>
        <td className=" px-1 py-4 font-medium mx-2"> {cartQuntity}</td>
        <td className=" px-1 py-4 font-medium">
          Rs &nbsp;
          {price
            ? (price / 100) * cartQuntity
            : (defaultPrice / 100) * cartQuntity}
        </td>
        <td className=" px-1 py-4 font-medium">
          <button
            className="p-2  rounded-lg text-yellow-900 shadow-lg"
            onClick={() => handleRemove(id)}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};
