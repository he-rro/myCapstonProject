import './style.css';
import {Routes ,Route,} from "react-router-dom"
import NavBar from './components/NavBar';
import Flights from './Pages/Flights';
import Stays from './Pages/Stays';
import CarRental from './Pages/CarRental';
import Packages from './Pages/Packages';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <NavBar />
     <Routes>
      <Route path='/' element={<Flights/>} />
      <Route path='/stays' element={<Stays/>} />
      <Route path='/carRental' element={<CarRental/>} />
      <Route path='/packages' element={<Packages/>} />
      <Route path='/login' element={<Login/>} />
    
     </Routes>
    </div>
  );
}

export default App;
