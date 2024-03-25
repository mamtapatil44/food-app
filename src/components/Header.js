import React, { useState } from "react";
import KITCHEN_LOGO from "../assets/images/MOM_Kitchen_Logo.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
import useRestaurant from "../hooks/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { restroList } from "../utils/restroSlice";
import {auth ,provider} from "../utils/firebase"
import {  signInWithRedirect } from "firebase/auth";
export const Header = () => {
  const [isloggedIn ,setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.restro);
  const cartItems = useSelector((store) => store?.cart?.items);
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

  const handleLogin = () =>{
    signInWithRedirect(auth, provider);
    setLoggedIn(true)
    
  }
  return (
    <div className="flex justify-between shadow-lg sticky top-0 left-0 bg-gray-200">
      <Link to="/">
        <img src={KITCHEN_LOGO} className="h-20 w-20 m-2 object-fit" />
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
        <li className="m-5 my-12">  <Link to="/contact">Contact Us</Link></li>
        <li className="m-5 my-12">   <Link to="/cart">Cart <p className="absolute right-20 top-8 bg-yellow-500 text-white text-center rounded-full  h-6 w-6 justify-center">{cartItems.length}</p></Link>
        </li>
        <button className="my-5 mx-5" onClick={handleLogin}>{isloggedIn ? "Login" :"Logut"}</button>
      </ul>
    </div>
  );
};
