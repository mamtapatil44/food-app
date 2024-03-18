import React ,{useState}from 'react'
import RestaurantCard from '../components/RestaurantCard'
import RestaurantCategory from '../components/RestaurantCategory'
import useRestaurant  from '../hooks/useRestaurant'

const Home = () => {
  const allRestro = useRestaurant();

  const handleFilteredList =()=>{

  }
  return (
    <>
    <div className='flex'>
      <div className='mx-auto p-4'>
        <input className='w-96 p-1' placeholder='Search Restro....'/>
        <button className='bg-yellow-500 text-white rounded-lg m-2 p-1' onClick={handleFilteredList}>Search</button>
      </div>
    </div>
    <div className='flex flex-wrap'>
    {/* <div className='mx-auto p-2'> */}
    {allRestro?.map((restraurant)=>(<RestaurantCard key={restraurant?.info?.id}  resData={restraurant?.info}/>))}
    {/* </div> */}
    </div>
    </>
  )
}

export default Home