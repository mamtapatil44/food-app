import React ,{useEffect, useState}from 'react'
import RestaurantCard from '../components/RestaurantCard'
import RestaurantCategory from '../components/RestaurantCategory'
import useRestaurant  from '../hooks/useRestaurant'
import { useDispatch, useSelector } from 'react-redux'
import { restroList } from '../utils/restroSlice'
import { Link } from 'react-router-dom'

const Home = () => {
  useRestaurant();
  const [searchText,setSearchText] =useState('')
  const data = useSelector(store =>store?.restro);
  const allRestraurants =data.allRestraurants;
  const filteredRestro =data.filteredRestro;

  const dispatch =useDispatch()
  

  const handleFilteredList =()=>{
    const filteredData = allRestraurants.filter((item)=> {
       return item?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    });
    dispatch(restroList({allRestraurants:allRestraurants,filteredRestro:filteredData}))

  }
  return (
    <>
    <div className='flex'>
      <div className='mx-auto p-4'>
        <input className='w-96 p-1' placeholder='Search Restro.... ' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button className='bg-yellow-500 text-white rounded-lg m-2 p-1' onClick={handleFilteredList}>Search</button>
      </div>
    </div>
    <div className='flex flex-wrap items-center justify-center'>
      {filteredRestro?.map((restraurant)=>(
      <Link key={restraurant?.info?.id}   to={"/restaurant/" + restraurant?.info?.id}>  <RestaurantCard  resData={restraurant?.info}/></Link>
    ))}
      </div>
    </>
  )
}

export default Home