import React from "react";
import FOOD from "../assets/images/food.avif";

const About = () => {
  return (
    <div className=" min-h-full flex flex-row justify-between items-center lg:px-32 px-5 
    bg-[url('https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60')] 
    bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 p-4 bg-opacity-50 bg-gray-900 opacity-50">
        <h1 className="text-white font-bold">
          Make your choice right now!!!
        </h1>
        <h2 className="text-white text-xs justify-center ">
          Moms Food delivers authentic food to your doorstep, operating
          seamlessly across all locations. Enjoy the rich flavored food with our
          convenient food delivery service
        </h2>

        <button className="mx-auto px-1 border my-2 text-white rounded-lg ">
          <a href="https://github.com/mamtapatil44" target="_blank">
            My Github
          </a>
        </button>
      </div>
    </div>
   
  );
};

export default About;
