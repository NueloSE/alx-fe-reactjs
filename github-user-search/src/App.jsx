import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import AdvancedSearch from "./components/AdvancedSearch";


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
