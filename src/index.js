import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import About from "./pages/About";
import Cart from "./pages/Cart";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const routes = createBrowserRouter([{ path: "/", element: <App /> ,
children:[
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }

]
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
