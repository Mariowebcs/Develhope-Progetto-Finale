import React from "react";
import { Route, Routes } from "react-router-dom";
import Step2 from "./components/Step2";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import Step1 from "./components/Step1";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Step1 />}>
          <Route path=":step2" element={<Step2 />} />
        </Route>
      </Routes>
  );
}

export default App;
