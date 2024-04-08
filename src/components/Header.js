import React, { useEffect, useRef, useState } from "react";
import KITCHEN_LOGO from "../assets/images/MOM_Kitchen_Logo.png";
import {
  getAuth,
  GoogleAuthProvider,
  getRedirectResult,
  signOut,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { restroList } from "../utils/restroSlice";
import { auth, provider } from "../utils/firebase";
import { signInWithRedirect } from "firebase/auth";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import useCountCart from "../hooks/useCountCart";
import { toast } from "react-toastify";
import { FiLogOut } from "react-icons/fi";

export const Header = () => {
  const [user, setUser] = useState(null);
  const [logOutPopUp, setLogOutPopUp] = useState(false);
  const [menuOpen, setMenu] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.restro);
  const cartItems = useSelector((store) => store?.cart?.items);
  const cartItemCount = useCountCart();
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
  };

  const handleLogoutPopUp = () => {
    setLogOutPopUp(true);
  };

  const closePopUp = () => {
    setLogOutPopUp(false);
  };
  useEffect(() => {
    const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.

        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });
  const handleChange = () => {
    setMenu(!menuOpen);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const handleLogout = () => {
    const auth = getAuth();
    console.log("logout");
    signOut(auth)
      .then((result) => {
        console.log("result logout", result);
        setUser(null);
      })
      .catch((error) => {
        toast.error("Error in logout");
      });
    setUser(null);
    setMenu(false)
  };

  return (
    <div className="sticky w-full">
      <div>
        <div
          className={`${
            menuOpen ? "bg-gray-800" : "bg-white "
          } flex flex-row justify-between p-5 px-2 md:px-10  shadow-lg`}
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
            {!user ? (
              <button
                className="ml-1 px-3 py-1 border border-yellow-600 rounded hover:text-yellow-500 mt-0"
                onClick={handleLogin}
              >
                Login
              </button>
            ) : (
              <div className="relative ">
                <div className="flex items-center gap-1">
                  <Link
                    className="cursor-pointer "
                    id="menu-button"
                    onClick={handleLogoutPopUp}
                  >
                    {user ? (
                      <span className="">
                        <img
                          src={user?.photoURL}
                          alt="profile name"
                          className="h-10 w-10 rounded-full"
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </Link>
                </div>

                {user && logOutPopUp ? (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <span className="m-2">
                      <AiOutlineClose
                        size={20}
                        onClick={closePopUp}
                        color="black"
                        className="float-right m-4"
                      />
                    </span>
                    <span className="flex flex-row gap-2 m-8 items-center justify-center">
                      <img
                        src={user?.photoURL}
                        alt="profile name"
                        className="h-12 w-12 rounded-full"
                      />
                    </span>
                    <span className="flex flex-row gap-2 m-8 items-center justify-center">
                      <button>Logout </button>
                      <FiLogOut onClick={handleLogout} className="cursor-pointer"/>
                    </span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </nav>

          <div className="md:hidden flex items-center gap-3 ">
            <Link to="/">
              <button
                className={`${
                  menuOpen ? "text-white" : "text-black"
                } px-1 py-1 border border-yellow-600 rounded  hover:text-yellow-500 text-sm`}
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
              <AiOutlineClose size={25} onClick={handleChange} color="white" />
            ) : (
              <div className="flex flex-row">
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
              {user ? (
              <span className=" h-3 w-3 rounded-full ml-1 mt-1">
                <img className=" h-3 w-3 rounded-full" src={user?.photoURL} alt="profile name" />
              </span>
            ) : (
              ""
            )}
              </div>
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
          {!user ? (  <button
              className="my-1 px-3 py-1 w-1/3 mx-auto border border-yellow-600 rounded hover:text-yellow-500"
              onClick={handleLogin}
            >
           Login
            </button>) :(<span className="flex flex-row gap-2  items-center justify-center">Logout &nbsp;
                      <FiLogOut onClick={handleLogout} className="cursor-pointer"/>
                    </span>)}
          
          </div>
        </div>
      </div>
    </div>
  );
};
