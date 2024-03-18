import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {

  return (
    <Provider store={appStore}>
      <div className="overflow-x-hidden relative">
        <Header/>
        <Outlet/>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
