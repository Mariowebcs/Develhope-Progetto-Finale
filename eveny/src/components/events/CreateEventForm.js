import React, { useState } from "react";
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

  const submitHandler = (event) => {
    event.preventDefault();
    const dataEvent = {
      title: eventTitle.toLowerCase(),
      description: eventDescription.toLowerCase(),
      date: new Date(eventDate),
      membersNumber: numMembers,
      eventImage: imgSelected,
    };
    console.log(dataEvent);
    props.onSaveEvent(dataEvent);
    setEventTitle("");
    setEventDescription("");
    setEventDate("");
    setImgSelected("");
    setNumMembers(2);
    props.onCancel();
  };

  return (
    <div>
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
          <label htmlFor="user-img">Scegli la tua immagine</label>
          <input
            type="file"
            value={imgSelected}
            id="user-img"
            onChange={changeImgSelectedHandler}
          />
        </div>
        <button
          type="submit"
          className="mt-6 py-4 px-6 text-white bg-[#ff0066] mx-4"
        >
          Crea Evento
        </button>
        <button
          onClick={props.onCancel}
          className="mt-6 py-4 px-6 text-white bg-sky-900"
        >
          Annulla
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm;
