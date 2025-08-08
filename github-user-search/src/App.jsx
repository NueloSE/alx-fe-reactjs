import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <p>header</p>

      <Routes>
        <Route path="/" element="" />
      </Routes>

      <p>footer</p>
    </BrowserRouter>
  );
}

export default App;
