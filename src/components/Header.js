import React, { useState } from "react";
import KITCHEN_LOGO from "../assets/images/MOM_Kitchen_Logo.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
import useRestaurant from "../hooks/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { restroList } from "../utils/restroSlice";
import { auth, provider } from "../utils/firebase";
import { signInWithRedirect } from "firebase/auth";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import { AiOutlineClose } from "react-icons/ai";
import useCountCart from "../hooks/useCountCart";
export const Header = () => {
  const [isloggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenu] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.restro);
  const cartItems = useSelector((store) => store?.cart?.items);
  const cartItemCount =  useCountCart();
  const allRestraurants = data.allRestraurants;

  const handleTopRatedSearch = () => {
    closeMenu();
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

  const handleLogin = () => {
    closeMenu();
    signInWithRedirect(auth, provider);
    setLoggedIn(true);
  };

  const handleChange = () => {
    setMenu(!menuOpen);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="sticky w-full">
      <div>
        <div
          className={`${
            menuOpen ? "bg-gray-800" : "bg-white "
          } flex flex-row justify-between p-5 md:px-10  shadow-lg`}
        >
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="/">
              <img src={KITCHEN_LOGO} className="h-20 w-20 m-2 object-fit" />
            </Link>
          </div>

          <nav className="hidden md:flex flex-row items-center font-md text-md gap-6">
            <Link to="/">
              <button
                className="px-2 py-1 border border-yellow-600 rounded hover:text-yellow-500"
                onClick={handleTopRatedSearch}
              >
                Top Rated Restro
              </button>
            </Link>

            <Link
              to="/"
              className="hover:text-yellow-400 transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition-all cursor-pointer"
            >
              Contact Us
            </Link>

            <Link
              to="/cart"
              className="hover:text-yellow-400 transition-all cursor-pointer flex flex-row"
            >
              Cart
              <p className="bg-yellow-500 text-white text-center rounded-full  h-6 w-6 justify-center -mt-2">
                {cartItemCount}
              </p>
            </Link>

            <button
              className="m-5 px-3 py-1 border border-yellow-600 rounded hover:text-yellow-500"
              onClick={handleLogin}
            >
              {isloggedIn ? "Login" : "Logout"}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-4 ">
            <Link to="/">
              <button
                className={ `${
                  menuOpen ? "text-white" : "text-black"
                } px-2 py-1 border border-yellow-600 rounded  hover:text-yellow-500`}
                onClick={handleTopRatedSearch}
              >
                Top Rated Restro
              </button>
            </Link>
            <Link
              to="/cart"
              className={`${
                menuOpen ? "text-white" : "text-black"
                } hover:text-yellow-400 transition-all cursor-pointer flex flex-row`}
              onClick={closeMenu}
            >
              Cart
              <p className="bg-yellow-500 text-white text-center rounded-full  h-6 w-6 justify-center -mt-2">
                {cartItemCount}
              </p>
            </Link>
            {menuOpen ? (
              <AiOutlineClose
                size={25}
                onClick={handleChange}
                color="white"
              />
            ) : (
              <AiOutlineMenuUnfold
                size={25}
                onClick={handleChange}
               
              />
            )}
          </div>

          <div
            className={`${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-opacity-100 bg-gray-800 text-white left-0 top-28 font-semibold text-xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 z-auto opacity-100`}
          >
            <Link
              to="/"
              className="hover:text-yellow-400 transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition-all cursor-pointer"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <button  className="m-5 px-3 py-1 border border-yellow-600 rounded hover:text-yellow-500" onClick={handleLogin}>
              {isloggedIn ? "Login" : "Logout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
