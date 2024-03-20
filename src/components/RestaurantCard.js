import React from 'react'
import { CDN_URL} from '../utils/constants'
import { FaStar } from "react-icons/fa";
const RestaurantCard = (props) => {
 const {name ,avgRating, cuisines,cloudinaryImageId,sla,costForTwo} = props?.resData;

 
  return (
    <div className='m-auto'>
    <div className='w-72 h-90 rounded-lg m-2 p-2 shadow-lg hover:bg-gray-300'>
      <img className='rounded-lg' src={CDN_URL + cloudinaryImageId}/>
      <h3 className='font-bold p-2'>{name}</h3>
      <p className='px-2 text-wrap truncate text-sm'> {cuisines.join(",")}</p>
      <ul className='flex list-type px-2 my-2'><li className='flex'> <FaStar  color='green'/>
      <span className='-mt-1'>{avgRating}</span></li>
      <li className='-mt-1'> &nbsp;| {sla?.lastMileTravel} mi</li>
      </ul>
      
    </div>
    </div>
  )
}

export default RestaurantCard