import React from 'react'
import { CDN_URL} from '../utils/constants'
import { FaStar } from "react-icons/fa";
const RestaurantCard = (props) => {
 const {name ,avgRating, cuisines,cloudinaryImageId,sla,costForTwo} = props?.resData;

 
  return (
    <div className='mx-auto'>
    <div className='w-72 h-90 rounded-lg m-2 p-2 shadow-lg'>
      <img className='rounded-lg' src={CDN_URL + cloudinaryImageId}/>
      <h3 className='font-bold p-2'>{name}</h3>
      <p className='px-2 text-wrap truncate'> {cuisines.join(",")}</p>
      <ul className='flex list-type px-2'><li className='flex'> <FaStar  color='green'/>
      <span className='-mt-1'>{avgRating}</span></li>
      <li className='-mt-1'> &nbsp;| {sla?.lastMileTravel} mi</li>
      {/* <li> . {costForTwo}</li> */}
      </ul>
      
    </div>
    </div>
  )
}

export default RestaurantCard