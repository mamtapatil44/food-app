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
  console.log("filteredRestro ",filteredRestro)

  const dispatch =useDispatch()
  

  const handleFilteredList =()=>{
    const filteredData = allRestraurants.filter((item)=> {
       return item?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    });
    dispatch(restroList({allRestraurants:allRestraurants,filteredRestro:filteredData}))

  }
  

   
  return (
    <div className=''>
    <div className='flex flex-row'>
      <div className='mx-auto p-2 md:p-4 '>
        <input className='w-[71] md:w-96 p-1 border border-yellow-500 rounded-lg ' placeholder='Search Restro.... ' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button className='border border-yellow-500 rounded-lg m-1 p-1' onClick={handleFilteredList}>Search</button>
      </div>
    </div> 
   
    <div className='flex flex-wrap items-center justify-center'>
      { filteredRestro?.length !== 0 ? (filteredRestro?.map((restraurant)=>(
      <Link key={restraurant?.info?.id}   to={"/restaurant/" + restraurant?.info?.id}>  <RestaurantCard  resData={restraurant?.info}/></Link>
    ))) : (<p className='m-2 p-2'> Searched Restro not found.....</p>)}
      </div>

    </div>
  )
}

export default Home