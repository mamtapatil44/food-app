import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import useRestaurant from './hooks/useRestaurant';
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <Provider store={appStore}>
      <div className="">
        <Header/>
        <div className='h-[80vh] overflow-y-auto'>
        <Outlet/>
        </div>
      
        <Footer />
      </div>
    </Provider>
  )
}

export default App
