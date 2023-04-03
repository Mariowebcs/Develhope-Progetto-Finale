import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import ButtonSecondary from "../shared/ButtonSecondary";
import logoWhiteImage2 from "../assets/evenywhitelogo.png";
import avatar1 from "../assets/avatar1.jpg";
import thumbnail from "../assets/file.jpg";
import "./Card.css";
import Modal from "./Modal";
import "../../Index.css";
import CardEvent from "../events/CardEvent";

const Card = (props) => {
  const { title, description, location, date, memNUm, key} = props;
  const [time, setTime] = useState(null);
  const [renderClock, setRenderClock] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date(props.date);   //errore
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
        //qui è possibile aggiungere codice che rimuove l'evento dalla pagina una volta finito
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [props.date]);
 
  const  navigate = useNavigate();

  const addPreferredHandler = () =>{
    
  }

  const { username } = JSON.parse(localStorage.getItem("registerData"));

  return (
      <>
        <div className="w-[90%] rounded-xl border border-gray-200 bg-white shadow-lg md:w-[48%]">
          <div className="flex justify-between items-center p-2 z-10 relative">
            <img className="h-12 w-12 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
            <button className="text-3xl hover:text-red-600 w-fit" onClick={addPreferredHandler}>
              <FontAwesomeIcon icon={faHeart}/>
            </button>
          </div>
          <img src={thumbnail} alt="Eveny" className="w-full object-cover rounded-xl relative bottom-16 z-0"/>
          <div className="flex flex-col gap-2 relative bottom-20">
            <div className="flex relative left-2">
              <img className="h-10 w-10 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
              <img className="h-10 w-10 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
              <div className="h-10 w-10 rounded-full shadow-lg bg-sky-900 flex justify-center items-center">
                <p className="text-white text-xl">+3</p>
              </div>
            </div>
              <div className="flex justify-between">
                <div className="pl-2 flex flex-col gap-1">
                  <div className="text-xl font-bold text-sky-900">{title}</div>
                  <p>Luogo: {location} </p>
                  <p className=" text-xl font-medium text-gray-900 dark:text-white">
                    {username}
                  </p>
                  <p>Partecipanti: {memNUm}</p>
                </div>
                <div className="text-center mr-4 border border-zinc-100 bg-zinc-100 h-fit rounded-lg py-2 px-4">
                  {renderClock === "ore" && <p>Inizia tra: <p>{time}</p></p>}
                  {renderClock === "giorni" && <p>Inizia il: <p>{time}</p></p>}
                  {renderClock === "terminato" && <p>Evento iniziato!</p>}
                </div>
              </div>
              <div className="flex justify-center relative top-6">
                <ButtonSecondary label="Partecipa ora" />
              </div>
          </div>
          <div className="bg-zinc-100 flex gap-2 p-2">
            <span className="card-hashtag shadow-lg">#Cinema</span>
            <span className="card-hashtag shadow-lg">#Avatar</span>
            <span className="card-hashtag shadow-lg">#Friends</span>
          </div>
        </div>
      </>
  );
};

export default Card;
