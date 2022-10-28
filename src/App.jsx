import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Base from './component/layout/Base';
import Home from './pages/Home';
import Dashbord from './component/layout/Dashbord';
import Hero from './component/element/Hero';
import Account from './component/element/Account';
import Swap from './component/element/Swap';
import { GrAnalytics } from 'react-icons/gr';
import Calculator from './component/element/Calculator';
import Analytics from './component/element/Analytics';


function App() {
  return (
   
   <>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route path='/' index element ={ <Home/>} />
    <Route path='/hero'  element ={ <Hero/>} />
    <Route path='/Account'  element ={ <Account/>} />
    <Route path='/Swap'  element ={ <Swap/>} />
    <Route path='/Calculator'  element ={ <Calculator/>} />

    <Route path='/Analytics'  element ={ <Analytics/>} />
    {/* <Route path='/hero'  element ={ <Document/>} /> */}


   </Routes>
   
   </Base>
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
