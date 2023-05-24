import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Slider from './components/Slider';
import Housekeepers from './pages/Houskeepers';
import PhoneSignUp from './pages/PhoneSignUp';
import SearchSer from './pages/SearchSer';
import Contact from './pages/Contact';
import Auth from './pages/cmp/Auth';
import Blood from './Services/Blood';
import Ambulance from './Services/Ambulance';
import Mechanical from './Services/Mechanical';
import Admin from './pages/Admin';
import About from './pages/About';
import ListEmployeeComponent from './components/ListEmployeeComponent';
function App() {
  return (
  <BrowserRouter>
  
  
  <Routes>
       <Route path="/" element={<Home/>}  exact/>
       <Route path="/login" element={<Login/>} exact/>
  
       <Route path="/PhoneSignUp" element={<PhoneSignUp />} exact/>
       <Route path="/signup" element={<Signup exact/>}/>
       {/* <Route path="/about" element={<Base/>} exact/> */}
       <Route path="/housekeeper" element={<Housekeepers/>} exact/>
       <Route path="/searchSer" element={<SearchSer/>} exact/>
       <Route path="/Contact" element={<Contact/>}exact/>
       <Route path="/Admin" element={<Admin/>}exact/>
      <Route path="/Auth" element={<Auth/>}exact/>
      <Route path="/Blood" element={<Blood/>}exact/>
      <Route path="/Ambulance" element={<Ambulance/>}exact/>
      <Route path='/Mechanical' element={<Mechanical/>}exact/>
      <Route path="/About" element={<About/>}exact/>
      <Route path = "/employees" component = {ListEmployeeComponent}></Route>
      
  </Routes>
  
  
  
 
  </BrowserRouter>
  );
}

export default App;
