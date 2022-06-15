// import Mainpage from "../pages/Mainpage.js";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Mainpage />} /> */}
      <Route path="/" element={<NavBar/>}/>
    </Routes>
  );
}

export default App;
