import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import MobileMenu from "../shared/MobileMenu";

const SavedEvents = () => {
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

//filter degli eventi salvati

  const searchHandler = () => {
    navigate("/search");
  };
  return (
    authenticated && (
      <>
      <Navbar />
        <div className="">
        
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
              <p>Nessun evento salvato.</p>
              <button className="mt-6 py-4 px-6 text-white bg-[#ff0066] mx-4"
                type="button" onClick={clickHandler}>
                  Crea il tuo evento
              </button>
            </div>)}
        </div>
        <div className="mobile-menu w-full z-20">
          <MobileMenu className="w-[90%]" />
        </div>
      </div>
      </>
    )
  );
};

export default SavedEvents;