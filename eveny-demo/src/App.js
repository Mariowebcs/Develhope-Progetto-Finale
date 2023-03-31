import React from 'react';
import EventCalendar from './EventCalendar';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';



function App() {
  
  const [events, setEvents] = useState([]);
  

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };
   
        return (
         <div>
          <Sidebar />
          
          </div>
          
        )
        
}
export default App