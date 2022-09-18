import './style.css';
import {Routes ,Route,} from "react-router-dom"

import NavBar from './components/NavBar';

import Flights from './Pages/Flights';
import Stays from './Pages/Stays';
import CarRental from './Pages/CarRental';
import Login from './Pages/Login';
import Footer from './components/Footer';
import SignUp from './Pages/SignUp';
import Subscribe from './components/Subscribe';


function App() {
 
       
      
  return (
    <div className="App">
      <NavBar/>

     <Routes>
      <Route path='/' element={<Flights/>} />
      <Route path='/stays' element={<Stays/>} />
      <Route path='/carRental' element={<CarRental/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/subscribe' element={<Subscribe/>} />
     </Routes>

     <Footer />
    </div>
  );
}

export default App;
