import React from "react";
import thumbnail from "../assets/file.jpg";
import avatar1 from "../assets/avatar1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faBookmark,
    faSearch,
    faUser,
    faCirclePlus,
    faHouse,
    faHeart,
    faChevronLeft,
  } from "@fortawesome/free-solid-svg-icons";
  

const CardEvent = (props) => {
    const { title, description, location, date, memNUm, key} = props;
    console.log(title, description, location, date, memNUm, key);
    return (
        <>
        {/* background grigio */}
        <div className="w-full rounded-xl border border-gray-200 bg-white relative">
            <img src={thumbnail} alt="Eveny" className="w-full object-cover"/>
            <div className="flex justify-between w-11/12 m-auto absolute top-2 left-4">
                <button onClick={""} className="z-10 border shadow-2xl flex items-center justify-center h-8 w-8 rounded-full bg-white">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={""} className="z-10 border shadow-2xl flex items-center justify-center h-8 w-8 rounded-full bg-white">
                    <FontAwesomeIcon icon={faBookmark} />
                </button> 
            </div>
            <div>
            <div className="flex flex-col gap-1 ml-2 mt-2">
              <div className="w-full flex items-center gap-2">
                <img className="h-10 w-10 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
                <p className="text-lg">Mario D'Andrea</p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-xl">Titolo</p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-xl">Descrizione evento</p>
                <p>Qui ci sarà la descrizione dell'evento...<strong>Mostra di più</strong></p>
              </div>
              {/* <div className="text-center mr-4 border border-zinc-100 bg-zinc-100 h-fit rounded-lg py-2 px-4">
                    {renderClock === "ore" && <p>Inizia tra: <p>{time}</p></p>}
                    {renderClock === "giorni" && <p>Inizia il: <p>{time}</p></p>}
                    {renderClock === "terminato" && <p>Evento iniziato!</p>}
                </div> */}
              <div className="flex gap-2 py-2">
                <span className="card-hashtag shadow-lg">#Cinema</span>
                <span className="card-hashtag shadow-lg">#Avatar</span>
                <span className="card-hashtag shadow-lg">#Friends</span>
              </div>
              <div>
                <p className="text-xl ">
                  <strong>Partecipanti</strong>
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <img className="h-10 w-10 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
                    Mario D'Andrea
                  </li>
                  <li className="flex items-center gap-2">
                    <img className="h-10 w-10 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
                    Andrea Ciambriello
                  </li>
                  <li className="flex items-center gap-2">
                    <img className="h-10 w-10 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
                    Manuel Luppino
                  </li>
                  <li className="flex items-center gap-2">
                    <img className="h-10 w-10 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
                    Giuseppe Meli
                  </li>
                  <li className="flex items-center gap-2">
                    <img className="h-10 w-10 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
                    Moreno Maroccia
                  </li>
                  <li className="flex items-center gap-2">
                    <img className="h-10 w-10 rounded-full shadow-lg" src={avatar1} alt="UserAvatar"/>
                    Silvio Craparotta
                  </li>
                </ul>
              </div>
            </div>
            
            </div>
        </div>
        </>
    )
}

export default CardEvent;