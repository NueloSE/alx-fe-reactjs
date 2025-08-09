import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <p>header</p>

      <Routes>
        <Route path="/" element="" />
      </Routes>
      <Search />
      <p>footer</p>
    </BrowserRouter>
  );
}

export default App;
