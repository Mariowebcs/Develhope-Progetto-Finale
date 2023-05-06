import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../shared/MobileMenu";
import Navbar from "../shared/Navbar";
import tagList from "../json/items.json";
// import "../Index.css";

const CreateEventForm = (props) => {
  const date = new Date();
  const day = date.toLocaleString("it-IT", { day: "2-digit" });
  const month = date.toLocaleString("it-IT", { month: "2-digit" });
  const year = date.getFullYear();

  const [eventTitle, setEventTitle] = useState("");
  const changeEventTitleHandler = (event) => {
    setEventTitle(event.target.value);
  };

  const [eventLocation, setEventLocation] = useState("");
  const changeEventLocationHandler = (event) => {
    setEventLocation(event.target.value);
  };

  const [eventDescription, setEventDescription] = useState("");
  const changeEventDescriptionHandler = (event) => {
    setEventDescription(event.target.value);
  };

  const [eventDate, setEventDate] = useState("");
  const changeEventDateHandler = (event) => {
    setEventDate(event.target.value);
  };

  const [numMembers, setNumMembers] = useState(0);
  const changeNumMembersHandler = (event) => {
    setNumMembers(event.target.value);
  };

  //state, gestione dell'immagine
  const [imgSelected, setImgSelected] = useState("");
  const changeImgSelectedHandler = (event) => {
    setImgSelected(event.target.value);
  };

  const navigate = useNavigate();

// qui ci dovrebbe essere prima un get dell'id dell'utente che crea l'evento, lo mettiamo in dataEvent e facciamo il post
  // const postEvent = async (data) => {
  //   try {
  //     const res = await fetch("http://localhost:4500/events/api/v1/events", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "Accept": "application/json",
  //       },
  //       body: JSON.stringify(data)
  //     });
  //     const dataEvent = res.json();
  //     console.log(dataEvent);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // chiamata get per prendere l'id utente, il problema è che lui mi prende gli id di tutti gli utenti
  const fetchId = async () => {
    try {
      const res = await fetch("http://localhost:4500/users", {
        method: "GET"
      });
      const { _id } = await res.json();
      console.log("id utente:", _id);
    } catch (error) {
      console.error("Errore durante la fetch dei dati degli utenti:", error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const dataEvent = {
      userId: fetchId(),        //qui ci deve essere l'id dell'utente preso da mongoDB
      title: eventTitle,
      location: eventLocation,
      description: eventDescription,
      date: new Date(eventDate),
      membersNumber: numMembers,
      eventImage: imgSelected,
    };

    // postEvent(dataEvent);

    props.onAddEvent(dataEvent);
    setEventTitle("");
    setEventLocation("");
    setEventDescription("");
    setEventDate("");
    setImgSelected("");
    setNumMembers(2);
    navigate("/addevent2");

    localStorage.setItem("eventDetails", JSON.stringify(dataEvent));
  };

  const returnBackHandler = () => {
    navigate("/events");
  };

  return (
    <>
      <Navbar/>
      <div className="w-full mt-36 mb-24">
        <form action="" onSubmit={submitHandler} className="flex flex-col items-center justify-center h-[83vh] gap-2 ">
          <div className="w-11/12">
            <label htmlFor="ev-descr">Seleziona la data </label>
            <input type="date" min={`${year}-${month}-${day}`} onChange={changeEventDateHandler}
              value={eventDate} required className="inputRegisterStyle"/>
          </div>
          <div className="text-black w-11/12">
            <label htmlFor="ev-title">Titolo dell'evento: </label>
            <input type="text" required maxLength="30" minLength="10" id="ev-title" className="inputRegisterStyle"
              name="event-title" value={eventTitle} onChange={changeEventTitleHandler} />
          </div>
          <div className="text-black w-11/12">
            <label htmlFor="ev-locat">Luogo: </label>
            <input type="text" required id="ev-locat" className="inputRegisterStyle"
              name="event-location" value={eventLocation} onChange={changeEventLocationHandler} />
          </div>
          <div className="w-11/12">
            <label htmlFor="ev-descr">Descrizione dell'evento: </label>
            <textarea name="event-description" id="ev-descr" cols="22" rows="4" className="inputRegisterStyle"
              value={eventDescription} onChange={changeEventDescriptionHandler} required
              minLength="25" maxLength="600"></textarea>
          </div>
          <div className="w-11/12">
            <label htmlFor="ev-mem">Seleziona numero di partecipanti</label>
            <input type="range" name="event-members" id="ev-mem" min="2" max="20"
              step="1" value={numMembers} onChange={changeNumMembersHandler}/>
            <span>{numMembers}</span>
          </div>
          <div className="w-11/12">
            <label htmlFor="user-img" className=" bg-sky-900 border border-black text-white rounded-full
            shadow-md flex flex-col justify-center items-center p-6 hover:cursor-pointer">
              Scegli la tua immagine
            </label>
            <input type="file" value={imgSelected} id="user-img"
              onChange={changeImgSelectedHandler} className="hidden"/>
          </div>
          <div>
            <button onClick={returnBackHandler} className="w-32 m-4 p-4 text-white bg-sky-900 rounded-xl">
              Annulla
            </button> 
            <button className="w-32 m-4 p-4 text-white bg-gradient-to-b from-purple-800 to-pink-600 rounded-xl">
              Avanti
            </button>
          </div>
        </form>
      </div>
      <div className="mobile-menu w-full relative">
        <MobileMenu/>
      </div>
    </>
  );
};

export default CreateEventForm;
