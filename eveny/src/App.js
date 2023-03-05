import React, { useEffect, useState } from "react";
import CreateEvent from "./components/events/CreateEvent";
import Events from "./components/events/Events";
import "./Index.css";
import CreatedEvents from "./components/assets/CreatedEvents.json";
import EventSearch from "./components/Searchbar/EventSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultsPage from "./components/Searchbar/ResultPage";

function App() {
  const DataEvents = JSON.parse(localStorage.getItem("EventsData"));
  // const [events, setEvents] = useState([]);
  const [CreatedEvents, setCreatedEvents] = useState(DataEvents);
  const [term, setTerm] = useState("");

  const AddEventHandler = (data) => {
    setCreatedEvents((state) => {
      if (state) return [data, ...state];
      return [data];
    });
  };

  const dataTermHandler = (data) => {
    setTerm(data);
    console.log(term);
  };

  useEffect(() => {
    localStorage.setItem("EventsData", JSON.stringify(CreatedEvents));
  }, [CreatedEvents]);

  const filteredEventsSearch = CreatedEvents?.filter(
    (event) => event.title.includes(term) || event.description.includes(term)
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<EventSearch onAddTerms={dataTermHandler} />}
          />
          <Route
            path="/searchTerm/:searchTerm"
            element={<ResultsPage items={filteredEventsSearch} />}
          />
        </Routes>
      </Router>
      <CreateEvent onAddEvent={AddEventHandler} />
      <Events events={CreatedEvents} filterTerm={term} />
    </div>
  );
}

export default App;
