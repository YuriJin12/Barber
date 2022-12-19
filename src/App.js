import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/sobre" element={<About />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// https://br.pinterest.com/pin/782359766508965104/?mt=login