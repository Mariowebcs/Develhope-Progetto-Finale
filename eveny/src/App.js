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
import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";

function App() {
  const DataEvents = JSON.parse(localStorage.getItem("EventsData"));
  const userLoginData = JSON.parse(localStorage.getItem("userLoginData"));
  const userEvents = [];
  const navigate = useNavigate();

  // const [events, setEvents] = useState([]);
  const [CreatedEvents, setCreatedEvents] = useState(DataEvents);
  const [term, setTerm] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  window.onload = () => {
    if (userLoginData?.authenticated === true) {
      setAuthenticated(true);
    } else {
      navigate("/");
    }
  };

  const AddEventHandler = (data) => {
    const newData = {
      ...data,
      userId : userLoginData?.id
    }
    const userEvent = [];
    if(userEvent.length===0){
      userEvent.push(data.id);
    }
    userLoginData["eventId"] = userEvent;
    localStorage.setItem("userLoginData",JSON.stringify(userLoginData));
    const dataTemp = JSON.parse(localStorage.getItem("userLoginData"));
    if(dataTemp.eventId.length!==0){
      setCreatedEvents((state) => {
        if (state) return [newData, ...state];
        return [newData];
      });
    }else{
      alert("Hai già creato un evento")
    }


    //controllo e pusho l'id evento nel mio array.
    // if (userLoginData.userEvent.length !== 0) {
    //   userEvent.push(data.id);
    //   //setto di nuovo il local storage per avere anche questi dati
    // }
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
