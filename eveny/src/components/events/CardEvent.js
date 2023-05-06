import React, { useEffect } from "react";
import thumbnail from "../assets/people-neon1.png";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import userLogo from "../assets/userLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faChevronLeft,
  } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import EventPopup from "./EventPopup";

const CardEvent = () => {
    const {id} = useParams();
    const [event, setEvent] = useState([]);

    useEffect(() => {
      if(!id){
        return;
      }
      const fetchData = async () => {
        try {
          const res = await fetch(`http://localhost:4500/events/${id}`, {
            method: "GET"
          });
          const data = await res.json();
          setEvent(data)
        } catch (error) {
          console.error("Errore durante la fetch dei dati degli utenti:", error);
        }  
      };
      fetchData();
    }, [id]);

    const { title, description, membersNumber, tags } = event;

    const [time, setTime] = useState(null);
    const [renderClock, setRenderClock] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        const date = new Date(event.date);   //errore
        const now = new Date();
        const difference = date - now;

        // console.log(difference);
        if(difference > 0 && difference <= 86400000) {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor((difference / (1000 * 60)) % 60);
          const seconds = Math.floor((difference / 1000) % 60);

          setTime(`${hours}h ${minutes}m ${seconds}s`);
          setRenderClock("ore");
        } else if (difference > 86400000) {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const formattedDate = `${day}/${month}/${year}`;

          setTime(formattedDate);
          setRenderClock("giorni");
        } else {
          clearInterval(interval);
          setTime("Evento iniziato!");
          setRenderClock("terminato");
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [event.date]);

    const [showAndHide, setShowAndHide] = useState(false);

    // const handleShowDescription = () => {
    //   setShowAndHide(!showAndHide);
    // }

    const navigate = useNavigate();

    const backToEvents = () => {
      navigate("/events");
    }

    const [openPopup, setOpenPopup] = useState(false);

    return (
        <>
        {/* background grigio */}
        <div className="w-full border border-gray-200 bg-white relative">
            <img src={thumbnail} alt="Eveny" className="w-full object-cover"/>
            <div className="flex justify-between w-11/12 m-auto absolute top-2 left-4">
                <button onClick={backToEvents} className="z-10 border shadow-2xl flex items-center justify-center h-8 w-8 rounded-full bg-white">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={""} className="z-10 border shadow-2xl flex items-center justify-center h-8 w-8 rounded-full bg-white">
                    <FontAwesomeIcon icon={faBookmark} />
                </button> 
            </div>
            <div>
            <div className="flex flex-col gap-1 ml-2 mt-2">
              <div className="w-full flex items-center gap-2">
                <img className="h-10 w-10 rounded-full shadow-lg" src={userLogo} alt="UserAvatar"/>
                <p className="text-lg">Mario D'Andrea</p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-xl">{title}</p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p>
                {showAndHide ? description : `${description?.substring(0,5)}...`}
                <span className="font-bold" onClick={() => setShowAndHide(!showAndHide)}>
                  {showAndHide ? " Mostra di meno" : " Mostra di più"}
                </span>
                </p>
              </div>
              <div className="text-center border border-zinc-100 bg-zinc-100 h-fit rounded-lg py-2 px-4 mx-auto">
                    {renderClock === "ore" && <p>Inizia tra: <p>{time}</p></p>}
                    {renderClock === "giorni" && <p>Inizia il: <p>{time}</p></p>}
                    {renderClock === "terminato" && <p>Evento iniziato!</p>}
                </div>
              <div className="flex gap-2 py-2">
                {tags?.map((tag, index) => (
                <span key={index} className="card-hashtag shadow-lg">{`#${tag}`}</span>
            ))}
              </div>
              <div>
                <p className="text-xl ">
                  <strong>Partecipanti</strong>
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <img className="h-10 w-10 rounded-full shadow-lg" src={avatar2} alt="UserAvatar"/>
                    Andrea Ciambriello
                  </li>
                  <li className="flex items-center gap-2">
                    <img className="h-10 w-10 rounded-full shadow-lg" src={userLogo} alt="UserAvatar"/>
                    Manuel Luppino
                  </li>
                  <li className="flex items-center gap-2">
                    <img className="h-10 w-10 rounded-full shadow-lg" src={userLogo} alt="UserAvatar"/>
                    Giuseppe Meli
                  </li>
                  <li className="flex items-center gap-2">
                    <img className="h-10 w-10 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
                    Silvio Craparotta
                  </li>
                </ul>
              </div>
            </div>
            
            </div>
            <div className="flex justify-center">
              <button onClick={() => setOpenPopup(true)}
                className="rounded-lg border bg-sky-900 px-8 py-2 text-center text-xl font-bold shadow-lg mb-4
               text-white hover:bg-[#FF0066] hover:text-white">Partecipa ora</button>
            </div>
          {openPopup && <EventPopup closePopup={setOpenPopup} />}  
        </div>
        
        </>
    )
}

export default CardEvent;