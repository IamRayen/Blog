import './App.css';
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/page/NavBar';
import Signup from "./Components/user/Signup";
import About from './Components/page/About';
import Error from './Components/page/Error';
import Home from './Components/page/Home';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/signup" element={<Signup/>} />
      {/* <Route path="/login" element={<Signup/>} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
