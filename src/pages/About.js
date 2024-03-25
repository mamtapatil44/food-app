import React from 'react'
import FOOD from '../assets/images/food.avif'

const About = () => {
  return (

    <div className="relative max-w-xl mx-auto mt-20">
    <img className="h-96 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60" alt="Random image" />
    <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    <div className="absolute inset-0 w-[50%]  items-center justify-center h-[60%]  mt-0 mx-auto rounded-full shadow-lg bg-opacity-5" >
    <h1 className="text-white font-bold mt-6"> Make your choice right now!!! </h1>
        <br/>
        <h2 className="text-white text-xs justify-center ">
Moms Food delivers authentic food to your doorstep, operating seamlessly across all locations. Enjoy the rich flavored food with our convenient food delivery service</h2>
{/* <br/> */}
<button className='mx-auto px-1 border my-2 text-white rounded-lg'>
  <a href='https://github.com/mamtapatil44' target="_blank">My Github</a>
  </button>
    </div>
</div>
//     <div className=''><span className='flex  '>
      
//     <img className='m-auto object-fit  h-[30%] w-[30%] ' src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60" alt='ABout'/>
//     <div className=" absolute h-96 text-center items-center justify-center">
//           <span className="text-sm  m-auto  font-bold text-white bg-green-300 h -96 text-center">
//           Make your choice right now!
// Full Stack Biryani delivers authentic Bengali biryani to your doorstep, operating seamlessly across all locations. Enjoy the rich flavors of Bengal with our convenient food delivery service
//           </span>
          
//           </div>
    
//    </span></div>
  )
}

export default About