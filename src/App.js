
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
