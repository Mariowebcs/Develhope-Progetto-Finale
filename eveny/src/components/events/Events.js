import React from "react";
import Card from "../UI/Card";
import CreatedEvents from "../assets/CreatedEvents.json";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar";
import EventsSearch from "../Searchbar/EventSearch";
import Navbar from '../shared/Navbar'
import MobileMenu from '../shared/MobileMenu'

const Events = (props) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/addevent");
  };
  const searchHandler = () => {
    navigate("/search");
  };
  return (
    <div className="w-full">
      <Navbar/>
      {/* <div className="flex flex-col justify-center items-center">
        <button
          className="mt-6 py-4 px-6 text-white  bg-[#ff0066] mx-4"
          type="button"
          onClick={clickHandler}
        >
          Crea il tuo evento
        </button>
      </div> */}

      <div className="flex flex-col justify-between items-center mt-8 w-[90%] flex-wrap my-0 mx-auto md:flex-row">
        {props.events?.map((event) => (
          <Card
            title={event.title}
            description={event.description}
            date={event.date}
            memNUm={event.membersNumber}
            key={event.id}
            // image={event.eventImage}
          />
        ))}
      </div>
      <MobileMenu/>
    </div>
  );
};

export default Events;
