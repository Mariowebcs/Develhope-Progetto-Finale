import React from "react";
import { EventsSearch } from "./components/EventsSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultsPage from "./components/ui/Searchbar/ResultsPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsSearch />} />
        <Route path="/searchTerm/:searchTerm" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
