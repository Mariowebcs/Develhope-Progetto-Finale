import React, { useEffect, useState } from "react";
import CreateEvent from "./components/events/CreateEvent";
import Events from "./components/events/Events";
import "./Index.css";
import CreatedEvents from "./components/assets/CreatedEvents.json";
import EventSearch from "./components/Searchbar/EventSearch";
import ResultsPage from "./components/Searchbar/ResultPage";
import Login from "./pages/Login";
import Navbar from "./components/shared/Navbar";
import MobileMenu from "./components/shared/MobileMenu";
import CreateEventForm from "./components/events/CreateEventForm";
import SearchBar from "./components/Searchbar/SearchBar";
import Step1 from "./pages/components/Step1";
import Step2 from "./pages/components/Step2";
import Step3 from "./pages/components/Step3";
import { Route, Router, Routes } from "react-router-dom";

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
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/searchTerm/:searchTerm"
          element={<ResultsPage items={filteredEventsSearch} />}
        />
        <Route
          path="/events"
          element={<Events events={CreatedEvents} filterTerm={term} />}
        />
        <Route
          path="/addevent"
          element={<CreateEventForm onAddEvent={AddEventHandler} />}
        />
        <Route
          path="/search"
          element={<EventSearch onAddTerms={dataTermHandler} />}
        />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
      </Routes>
    </div>
  );
}

export default App;
