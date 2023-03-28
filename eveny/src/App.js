import React, { useEffect, useState } from "react";
import CreateEvent from "./components/events/CreateEvent";
import Events from "./components/events/Events";
import "./Index.css";
import CreatedEvents from "./components/json/CreatedEvents.json";
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
import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";

function App() {
  const DataEvents = JSON.parse(localStorage.getItem("EventsData"));
  const userLoginData = JSON.parse(localStorage.getItem("userLoginData"));
  const navigate = useNavigate();

  // const [events, setEvents] = useState([]);
  const [CreatedEvents, setCreatedEvents] = useState(DataEvents);
  const [term, setTerm] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [userEvent, setUserEvent] = useState([]);
  window.onload = () => {
    if (userLoginData?.authenticated === true) {
      setAuthenticated(true);
    } else {
      navigate("/");
    }
  };

  const AddEventHandler = (data) => {
    const dataTemp = data;
    const newData = {
      ...data,
      userId: userLoginData?.id,
    };

    setUserEvent((state) => {
      if (state) return [dataTemp.id, ...state];
      return [dataTemp.id];
    });

    setCreatedEvents((state) => {
      if (state) return [newData, ...state];
      return [newData];
    });
  };

  const dataTermHandler = (data) => {
    setTerm(data);
    console.log(term);
  };

  useEffect(() => {
    localStorage.setItem("EventsData", JSON.stringify(CreatedEvents));
  }, [CreatedEvents]);

  useEffect(() => {
  const newUserLoginData = {
    ...userLoginData,
    eventId : [...userEvent]
  }
  localStorage.setItem("userLoginData", JSON.stringify(newUserLoginData));
  }, [userEvent]);

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
