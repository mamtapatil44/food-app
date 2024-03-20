import React, { useEffect, useState } from "react";
import { RES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { restroList } from "../utils/restroSlice";

const useRestaurant = () => {
  let dispatch = useDispatch();
 
  useEffect(() => {
    getRestroList();
  },[]);

  const getRestroList = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    let checkJSONData = (json) => {
      for (let i = 0; i < json?.data?.cards.length; i++) {
        let resData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        if (resData !== undefined) {
          return resData;
        }
      }
    };
    const restro = checkJSONData(json);

    dispatch(restroList({"allRestraurants":restro,"filteredRestro":restro}))

 
  };
};

export default useRestaurant;
