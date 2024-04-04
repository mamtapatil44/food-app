import React from "react";
import { useSelector } from "react-redux";
import { CartList } from "../components/CartList";
import useCalculatedAmout from "../hooks/useCalculatedAmout";
import Empty_Cart_Img from "../assets/images/Empty_Cart_Img.png";

const Cart = () => {
  let cartItems = useSelector((store) => store?.cart?.items);
  const totalCartAmout = useCalculatedAmout();

  return (
    <div className="">
      <div className="mx-auto md:w-3/5">
        <div className="flex flex-col">
          <div className=" sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {totalCartAmout ? (
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-1 py-4"></th>
                        <th scope="col" className="px-1 py-4 w-1/5">
                          Name
                        </th>
                        <th scope="col" className="px-1 py-4">
                          Qty
                        </th>
                        <th scope="col" className="px-1 py-4">
                          Price
                        </th>
                        <th scope="col" className="px-1 py-4">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((cartItem, index) => (
                        <CartList
                          key={index}
                          resData={cartItem?.card?.info}
                          cartQuantity={cartItem?.cartQuantity}
                        />
                      ))}
                      <tr>
                        <td className="px-1 py-4 font-medium">Total amount :</td>
                        <td></td>
                        <td></td>
                        <td className="px-1 py-4 font-medium">Rs {parseFloat(totalCartAmout).toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div>
                    <span className=" flex items-center justify-center">
                      <img
                        className="m-auto"
                        src={Empty_Cart_Img}
                        alt="Empty Cart"
                      />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
