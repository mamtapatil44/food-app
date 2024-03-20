import {  useEffect, useState } from "react";
import { RES_API } from "../utils/constants";
import RestroContext from "./restroContext";



// const RestroContextProvider = ({ children }) => {
//   let [allRestraurants, setAllRestraunts] = useState([]);
//   let [filteredRestro, setFilteredRestro] = useState([]);
//   let   [searchText,setSearchText] = useState([]);

//   useEffect(() => {
//     getRestroList();
//   }, []);

//   const getRestroList = async () => {
//     const data = await fetch(RES_API);
//     const json = await data.json();
//     let checkJSONData = (json) => {
//       for (let i = 0; i < json?.data?.cards.length; i++) {
//         let resData =
//           json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
//             ?.restaurants;

//         if (resData !== undefined) {
//           return resData;
//         }
//       }
//     };
//     const restro = checkJSONData(json);
//     setAllRestraunts(restro);
//     setFilteredRestro(restro)
//     console.log("restro===",restro)
//   };

//   return 
//   (<RestroContext.Provider 
//   value={{allRestraurants,setAllRestraunts,filteredRestro, setFilteredRestro,searchText,setSearchText}}>
//     {children}</RestroContext.Provider>);
// }
// export default RestroContextProvider;
