import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AddEventPopup } from "./AddEventPopup";
import './calendar.css'
import NavbarCalendar from "./NavbarCalendar";



function EventCalendar() {
  const [eventToDelete, setEventToDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState(()=> {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [];
  })
  const [showPopup, setShowPopup] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const darkMode = localStorage.getItem("darkMode");
    return darkMode ? JSON.parse(darkMode) : false;
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const eventDates = events.map((event) => new Date(event.date).toDateString());


  const tileContent =({ date, view }) => {
    const dateString = date.toDateString();
    if (view === "month" && eventDates.includes(dateString)) {
      return <div className="relative w-1 h-1 rounded-full bg-indigo-600 -top-[0.5px] -right-[16px]"></div>;
    }
  }



  useEffect(() => {
    // Add event listener to document
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  
  const handleDocumentClick = (event) => {
    // Check if target element is inside the sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      // Target element is outside the sidebar, close the sidebar
      setSidebarOpen(false);
    }
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }; 

  const theme = darkMode ? "dark" : "light";
  
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  
  const addEvent = (e) => {
    const newEvent = {
      date: date,
      title: "New Event",
      description: "Description of the new event",
    };
    setEvents([...events, newEvent]);
    localStorage.setItem("events", JSON.stringify([...events, newEvent]));
  };

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddEventClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleSaveEvent = (title, description, eventDateTimeWithOffset) => {
    const newEvent = {
      date: eventDateTimeWithOffset,
      title: title,
      description: description,
      time: eventDateTimeWithOffset.toLocaleTimeString([], {timeZone:"Europe/Rome"    , hour: '2-digit', minute: '2-digit' }),
       };
    setEvents([...events, newEvent]);
    setShowPopup(false);
  };
  

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleDeleteEvent = (index) => {
    setEventToDelete(index);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    const newEvents = [...events];
    newEvents.splice(eventToDelete, 1);
    setEvents(newEvents);
    setEventToDelete(null);
    setConfirmDelete(false);
    localStorage.setItem("events", JSON.stringify(newEvents));
  };

  const handleCancelDelete = () => {
    setEventToDelete(null);
    setConfirmDelete(false);
  };



  const eventList = events.map((event, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4 ml-2 mr-5">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">{event.title}</h3>
        

        <button
          className="text-gray-600 font-bold hover:text-red-600"
          onClick={() => handleDeleteEvent(index)}
        >
          X
        </button>
      </div>
      <p className="text-gray-600">{event.description}</p>
      <p className="text-gray-500">
  {new Date(event.date).toLocaleString([], {
    timeZone:"Europe/Rome",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  })}
</p>

     
    </div>
  ));

  
  return (
   
   
  
         
   <div>
    
   <NavbarCalendar className={`sidebar ${sidebarOpen ? "open" : "closed"}`} />
    <div className="relative z-10" id="main-content">
    <div
   
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-black" : "bg-gradient-to-r from-purple-500 to-pink-500"
      } flex flex-col items-center justify-center `}
    >
      <div className="dark-mode-toggle ml-auto mr-4 mb-4 sm:mr-0 sm:ml-10 inline-block align-middle">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox hidden"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block w-12 h-6 mb-3 rounded-full bg-gray-300 cursor-pointer relative"
        >
          <span className="sr-only">Toggle dark mode</span>
          <span
            className={`${
              darkMode ? "translate-x-6" : "translate-x-1"
            } toggle-dot absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-200 ease-in-out bg-white`}
          ></span>
        </label>
      </div>
  
      <div className="  mb-10 flex flex-col items-center justify-center ">
        <h1
          id="center"
          className={`w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-3xl sm:text-4xl md:text-5xl ml-[122px] font-bold${
            darkMode
              ? "text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-indigo-900"
              : "bg-p"
          }`}
        >
          <main>
            <div className="wrapper">
              <span data-text="Eveny"></span>
              <span data-text="Calendar"></span>
            </div>
          </main>
         {/* <img
            className="mx-4 rounded-full bg-[#1c1d33] p-2"
            width="50"
            src="assets/images/eveny-logo-new.svg"
  alt="logo about users"
/> */}
</h1>

</div>
<Calendar
      value={date}
      onChange={handleDateChange}
      className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-[300px] p-2 mr-4 ml-4 rounded-lg shadow-md mb-7"
      tileContent={tileContent}
    />

<button 
  onClick={handleAddEventClick}
  type="button" 
  className="px-2 py-2 mb-10  bg-indigo-600 rounded-md text-white outline-none shadow-lg transform active:scale-75 transition-transform"
>
  Add Event
</button>

<div className="w-full max-w-lg">{eventList}</div>

{showPopup && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
    <AddEventPopup onClose={handlePopupClose} onSave={handleSaveEvent} />
  </div>
)}

{confirmDelete && (
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
      <div className={`inline-block align-bottom bg-white rounded-lg mb-52 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${darkMode ? 'dark' : ''}`}>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 ">
          <p className="text-lg font-medium mb-7">
            Sei sicuro di voler cancellare definitivamente questo evento?
          </p>
          <div className="flex justify-end">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-2 rounded-full shadow-md mr-7"
              onClick={handleConfirmDelete}
            >
              Conferma
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-1 px-2 rounded-full  shadow-md "
              onClick={handleCancelDelete}
            >
              Annulla
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
</div>
</div>
</div>

);
}

export default EventCalendar;
  