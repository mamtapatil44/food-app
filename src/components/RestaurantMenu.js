import React from "react";
import useRestroMenu from "../hooks/useRestroMenu";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
const RestaurantMenu = () => {
  let constCards;
  const cartItems = useSelector((store) => store?.cart?.items);
  const { id } = useParams();
  const menuInfo = useRestroMenu(id);
  console.log("menuInfo ",menuInfo)
  const dispatch = useDispatch();
  if (!menuInfo) return null;
  let data = menuInfo?.cards[2]?.card?.card?.info;
  if (!data)
    return (
      <div className="min-h-full flex flex-row justify-between items-center lg:px-32 px-5 text-center bg-[url('assets/images/UNAVAILABLE.jpeg')] bg-no-repeat bg-contain bg-center "></div>
    );

  const {
    name,
    cuisines,
    cloudinaryImageId,
    sla,
    avgRating,
  } = data;

      for (let i = 0; i < menuInfo?.cards?.length; i++) {
        constCards  =
        menuInfo.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;
      }
      const { itemCards } = constCards



  const handleAddToCart = (item) => {
   
    if (!item?.card?.info?.cloudinaryImageId) {
      item.card.info.cloudinaryImageId = cloudinaryImageId;
    }
    dispatch(addItem(item));
  };
  
  return (
    <>
      <div className="flex h-56 bg-gray-900 text-white items-center">
        <div className=" mx-auto flex">
          <img
            className="w-44 rounded-lg"
            src={CDN_URL + cloudinaryImageId}
            alt="hotel-mg"
          />
          <span className="px-4">
            <h1 className="font-bold text-2xl md:text-4xl">{name}</h1>
            <p className="text-lg mt-2">{cuisines.join(", ")}</p>
            <h3 className="flex mt-4">
              <FaStar color="green" />
              <span className="-mt-1">{avgRating}</span>
              <span className="-mt-1">
                &nbsp; - &nbsp;{sla?.lastMileTravel} mi
              </span>
            </h3>
          </span>
        </div>
      </div>
      <div className="flex items-center">
        {!itemCards ? (
          <h1 className="mx-auto p-4 text-center font-bold">
            Currently not available
          </h1>
        ) : (
          <div className="mx-auto  justify-between">
            <h3 className="font-bold mx-9 px-4 py-2">Recommended</h3>
            {itemCards?.map((item) => (
              <div
                className="h-auto m-12 p-4 shadow-lg"
                key={item?.card?.info?.id}
              >
                <div className="hidden md:flex">
                  <span className="mr-4 pr-4 w-3/4">
                    <h3 className="font-bold">{item?.card?.info?.name}</h3>
                    <p>
                      Rs.{" "}
                      {item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100}
                    </p>
                    <p className="text-wrap text-sm mt-2">
                      {item?.card?.info?.description}
                    </p>
                  </span>
                  <span className=" overflow-hidden relative flex items-center justify-center flex-col p-3">
                    {item?.card?.info?.imageId ? (
                      <img
                        className="md:w-24 md:h-24 rounded-lg ml-20  object-cover"
                        src={CDN_URL + item?.card?.info?.imageId}
                        alt="menu-logo"
                      />
                    ) : (
                      <img
                        className="md:w-24 md:h-24  rounded-lg ml-20  object-cover"
                        src={CDN_URL + cloudinaryImageId}
                        alt="menu-logo"
                      />
                    )}

                    <span className="absolute  flex  justify-center -pb-2">
                      <button
                        className="text-yellow-500 shadow-lg bg-white mx-2  my-4 px-2 rounded-lg absolute z-1 left-2 py-2"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add
                      </button>
                    </span>
                  </span>
                </div>

                <div className="md:hidden">
                  <span className="mr-4 pr-4 w-full">
                    <h3 className="font-bold">{item?.card?.info?.name}</h3>
                    <p>
                      Rs.{" "}
                      {item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100}
                    </p>
                  </span>
                  <span className=" overflow-hidden relative flex items-center justify-end px-1 py-3 flex-row">
                    <p className="text-wrap text-sm mt-2">
                      {item?.card?.info?.description}
                    </p>
                    {item?.card?.info?.imageId ? (
                      <img
                        className="w-20 h-20 rounded-lg ml-20  object-cover"
                        src={CDN_URL + item?.card?.info?.imageId}
                        alt="menu-logo"
                      />
                    ) : (
                      <img
                        className="w-20 h-20  rounded-lg ml-20  object-cover"
                        src={CDN_URL + cloudinaryImageId}
                        alt="menu-logo"
                      />
                    )}

                    <span className="absolute align-bottom">
                      <button
                        className="text-yellow-500 shadow-lg bg-white  mb-0 px-2 rounded-lg  z-1  py-2"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add
                      </button>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
