import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home'
import Sidebar from './Components/Navigation/Sidebar';
import CustomLoader from './Components/Loader/CustomLoader';
import About from './Components/Pages/About/About';
import Project from './Components/Pages/Project/Project';
import Contact from './Components/Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLoader>
          <Sidebar/>
        
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/project' element={<Project/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
        </CustomLoader>
      </Router>
      
    </div>
  );
}

export default App;
