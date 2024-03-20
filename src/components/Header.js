import React from "react";
import KITCHEN_LOGO from "../assets/images/MOM_Kitchen_Logo.png";
import { Link } from "react-router-dom";
import useRestaurant from "../hooks/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { restroList } from "../utils/restroSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.restro);
  const allRestraurants = data.allRestraurants;

  const handleTopRatedSearch = () => {
    const filteredData = allRestraurants.filter((item) => {
      return item.info.avgRating > 4;
    });
    dispatch(
      restroList({
        allRestraurants: allRestraurants,
        filteredRestro: filteredData,
      })
    );
  };
  return (
    <div className="flex justify-between shadow-lg sticky top-0 left-0 bg-gray-50">
      <Link to="/">
        <img src={KITCHEN_LOGO} className="h-20 w-20 m-2" />
      </Link>

      <ul className="flex justify-around">
        <button
          className="bg-yellow-500 px-2 py-2 rounded-lg my-10 text-white"
          onClick={handleTopRatedSearch}
        >
          Top Rated Restro
        </button>
        <li className="m-5 my-12">
          <Link to="/">Home</Link>
        </li>
        <li className="m-5 my-12">
          <Link to="/about">About</Link>
        </li>
        <li className="m-5 my-12">Contact Us</li>
        <li className="m-5 my-12"> Cart</li>
        <button className="my-5 mx-5">Login</button>
      </ul>
    </div>
  );
};
