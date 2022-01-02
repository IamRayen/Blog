import './App.css';
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/page/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
