import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import View from "./components/view/viewjobs";
import Home from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </>
  );
};

export default App;
