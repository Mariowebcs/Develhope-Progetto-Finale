import React from "react";
import { Route, Routes } from "react-router-dom";
import Step2 from "./components/Step2";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Step1 from "./components/Step1";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Step1 />} />
          {/* <Route path=":step" element={<Step1 />} /> */}
        <Route path="/register/:step" element={<Step2 />} />
        
      </Routes>
  );
}

export default App;
