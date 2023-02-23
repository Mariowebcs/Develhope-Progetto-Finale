import React, { useState } from "react";
import CreateEvent from "./components/events/CreateEvent";
import Events from "./components/events/Events";
import "./Index.css";

function App() {
  const [events, setEvents] = useState([]);

  const AddEventHandler = (dataEvents) => {
    setEvents((prevState) => {
      return [dataEvents, ...prevState];
    });
  };

  console.log("nuovo", events);

  return (
    <div>
      <CreateEvent onAddEvent={AddEventHandler} />
      <Events events={events} />
    </div>
  );
}

export default App;
