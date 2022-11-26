import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Contacts from "./pages/Contacts";
import About from "./components/About";
import Aboutt from "./components/about/Aboutt";
import Service from "./components/about/Service";
function App() {
  return (
    <>
    
      <Routes>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/aziz" element={<Aboutt />}></Route>
      <Route exact path="/service" element={<Service />}></Route>



  
      <Route exact path="/contact" element={<Contacts />}></Route>
        <Route exact path="/" element={<Navbar />}></Route>
        <Route exact path="/signin" element={<Signup />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
