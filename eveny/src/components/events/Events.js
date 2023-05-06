import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import CreatedEvents from "../json/CreatedEvents.json";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar";
import EventsSearch from "../Searchbar/EventSearch";
import Navbar from "../shared/Navbar";
import MobileMenu from "../shared/MobileMenu";

const Events = (props) => {
  const navigate = useNavigate();
  const { authenticated } = JSON.parse(localStorage.getItem("userLoginData"));
  const clickHandler = () => {
    navigate("/addevent");
  };

  const [events, setEvents] = useState([]);
  // fetch degli eventi in pagina su cui eseguire il map e in un secondo momento il filter
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4500/events", {
        method: "GET"
      });
        const data = await res.json();
        setEvents(data)
      } catch (error) {
        console.error("Errore durante la fetch dei dati degli utenti:", error);
      }
    };
    fetchData();
  }, [])
console.log(events);

  const searchHandler = () => {
    navigate("/search");
  };
  return (
    authenticated && (
      <>
      <Navbar />
        {/* <div className=""> */}
        
        <div className="flex flex-col justify-between items-center w-[100%] flex-wrap gap-6 mx-auto md:flex-row relative top-28">
          {events?.length > 0 
          ? (
            events?.map((event) => (
              <Card 
                title={event.title}
                description={event.description}
                location={event.location}
                date={event.date}
                memNUm={event.membersNumber}
                id={event._id}
                image={event.eventImage}
                tags={event.tags}
                userId={event.userId}
              />
            ))
          )
          : (
            <div className="flex flex-col justify-center items-center">
              <p>Non sono presenti eventi nella tua città.</p>
              <button className="mt-6 py-4 px-6 text-white bg-[#ff0066] mx-4"
                type="button" onClick={clickHandler}>
                  Crea il tuo evento
              </button>
            </div>)}
        </div>
        <div className="mobile-menu w-full z-20">
          <MobileMenu className="w-[90%]" />
        </div>
      {/* </div> */}
      </>
    )
  );
};

export default Events;


// {props.events?.length > 0 
//   ? (
//     props.events?.map((event) => (
//       <Card
//         title={event.title}
//         description={event.description}
//         location={event.location}
//         date={event.date}
//         memNUm={event.membersNumber}
//         key={event.id}
//         // image={event.eventImage}
//       />
//     ))
//   )