import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.js';

const Home = lazy(() => import("./pages/Home.js"));
const Cart = lazy(() => import("./pages/Cart.js"));
const About = lazy(() => import("./pages/About.js"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.js"));
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path : "/",
                element : <Suspense fallback={<h1>Loading...</h1>}><Home /></Suspense>
              },
              {
                path : "/restaurants/:resId",
                element : <Suspense fallback={<h1>Loading...</h1>}><RestaurantMenu /></Suspense>
              },
              {
                path : "/about",
                element : <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
              },
              {
                path : "/cart",
                element : <Suspense fallback={<h1>Loading...</h1>}><Cart /></Suspense>
              }
        ]
    }
])




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>,
  )

 