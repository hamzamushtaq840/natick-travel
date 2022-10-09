import './App.css';
import About from './Components/About';
import Advantages from './Components/Advantages';
import Callnow from './Components/Callnow';
import Car from './Components/Car';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">

     <Navbar/>
     <Home/>
     <About/>
     <Car/>
     <Advantages/>
     <Callnow/>
     <Footer/>
    </div>
  );
}

export default App;
