import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import AdvancedSearch from "./components/AdvancedSearch";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />}/>
        <Route path="/advanced" element={<AdvancedSearch/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
