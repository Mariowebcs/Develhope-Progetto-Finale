import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../shared/MobileMenu";
import Navbar from "../shared/Navbar";
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

  const [imgSelected, setImgSelected] = useState("");
  const changeImgSelectedHandler = (event) => {
    setImgSelected(event.target.value);
  };

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const dataEvent = {
      id: crypto.randomUUID(),
      title: eventTitle.toLowerCase(),
      description: eventDescription.toLowerCase(),
      date: new Date(eventDate),
      membersNumber: numMembers,
      eventImage: imgSelected,
    };
    props.onAddEvent(dataEvent);
    setEventTitle("");
    setEventDescription("");
    setEventDate("");
    setImgSelected("");
    setNumMembers(2);
    navigate("/events");
  };

  const returnBackHandler = () => {
    navigate("/events");
  };

  return (
    <div className="w-full">
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <form action="" onSubmit={submitHandler}>
          <div className="input-form">
            <label htmlFor="ev-descr">Seleziona la data </label>
            <input
              type="date"
              min={`${year}-${month}-${day}`}
              onChange={changeEventDateHandler}
              value={eventDate}
              required
            />
          </div>
          <div className="input-form my-4 text-black">
            <label htmlFor="ev-title">Titolo dell'evento: </label>
            <input
              type="text"
              required
              maxLength="30"
              minLength="10"
              id="ev-title"
              name="event-title"
              value={eventTitle}
              onChange={changeEventTitleHandler}
            />
          </div>
          <div className="input-formE">
            <label htmlFor="ev-descr">Descrizione dell'evento: </label>
            <textarea
              name="event-description"
              id="ev-descr"
              cols="22"
              rows="5"
              value={eventDescription}
              onChange={changeEventDescriptionHandler}
              required
              minLength="25"
              maxLength="60"
            ></textarea>
          </div>
          <div className="input-form">
            <label htmlFor="ev-mem">Seleziona numero di partecipanti</label>
            <input
              type="range"
              name="event-members"
              id="ev-mem"
              min="2"
              max="20"
              step="1"
              value={numMembers}
              onChange={changeNumMembersHandler}
            />
            <span>{numMembers}</span>
          </div>
          <div className="input-form">
            <label
              htmlFor="user-img"
              className=" bg-zinc-100
            border
            border-black
            rounded-full
            shadow-md
            flex
            flex-col
            justify-center
            items-center
            p-6
            hover:cursor-pointer"
            >
              Scegli la tua immagine
            </label>
            <input
              type="file"
              value={imgSelected}
              id="user-img"
              onChange={changeImgSelectedHandler}
              className="hidden"
            />
          </div>
          <button className="mt-6 py-4 px-6 text-white bg-[#ff0066] mx-4">
            Crea Evento
          </button>
          <button
            onClick={returnBackHandler}
            className="mt-6 py-4 px-6 text-white bg-sky-900"
          >
            Annulla
          </button>
        </form>
      </div>
      <MobileMenu/>
    </div>
  );
};

export default CreateEventForm;
