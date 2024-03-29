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

const Card = (props) => {
  // const data = props.date;
  // const day = data.toLocaleString("it-IT", { day: "2-digit" });
  // const month = data.toLocaleString("it-IT", { month: "2-digit" });
  // const year = data.getFullYear();
  const  navigate = useNavigate();

  const [popup, setPopup] = useState(false);
  const handleOpenPopup = () => {
    setPopup(true);

    // navigate("/cardpopu");
  }

  const handleCLosePopup = () => {
    setPopup(false);

    // navigate("/cardpopu");
  }

  const addPreferredHandler = () =>{

  }

  return (
    <div className="card w-[90%] rounded-md border border-gray-200 bg-white shadow-lg my-6 md:w-[48%]">
      <div className="flex justify-end px-4 pt-4">
        {/* <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"

            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </button> */}
        <button className="text-3xl hover:text-red-600" onClick={addPreferredHandler}>
          <FontAwesomeIcon icon={faHeart}/>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src="./mariodandrea-cv.png"
          alt="Person profile image"
          id="profile-image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-800 dark:text-white">
          Mario D'Andrea
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Cosenza Amante di anime
        </span>
        <div className="flex space-x-3 md:mt-6">
          <Button label="Scopri di più" />
          <ButtonSecondary label="Partecipa ora" />
        </div>
        <div className="h-[5rem] text-center my-8">
          <div className=" text-xl font-bold text-sky-900">{props.title}</div>
          <p className="text-base text-gray-700">{props.description}</p>
          {/* <span>{`${day}-${month}-${year}`}</span> */}
          <span>{props.date.toLocaleString("it-IT")}</span>
        </div>
      </div>
      <div className="mt-4 bg-zinc-100 px-6 pt-4 pb-2">
        <span className="card-hashtag shadow-lg">#Cinema</span>
        <span className="card-hashtag shadow-lg">#Avatar</span>
        <span className="card-hashtag shadow-lg">#Friends</span>
        <span className="card-hashtag-shop shadow-lg">@CinemaAndromeda</span>
      </div>
    </div>
  );
};

export default Card;
