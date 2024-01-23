import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./routing/Landing";
import Undp from "./routing/Undp";
import Log from "./routing/Solution";
import Product from "./routing/Casues";
import WeatherDetailsComponent from "./routing/Weather";
import CustomNavbar from "./routing/Navbar";
import Casuses from "./routing/Casues";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<CustomNavbar />, <Landing />]} />
          <Route path="/Landing" element={[<CustomNavbar />, <Landing />]} />
          <Route path="/Undp" element={[<CustomNavbar />, <Undp />]} />
          <Route path="/" element={[<CustomNavbar />, <Log />]} />
          <Route path="/Causes" element={[<CustomNavbar />, <Casuses />]} />
          <Route path="/Weather" element={[<WeatherDetailsComponent />]} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
