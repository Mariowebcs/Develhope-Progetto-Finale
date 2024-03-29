import React from "react";
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
  const searchHandler = () => {
    navigate("/search");
  };
  return (
    authenticated && (
      <div className="w-full">
        <Navbar />
        <div className="flex flex-col justify-between items-center mt-8 w-[100%] flex-wrap  mb-12 mx-auto md:flex-row">
          {props.events?.length > 0 ? (
            props.events?.map((event) => (
              <Card
                title={event.title}
                description={event.description}
                date={event.date}
                memNUm={event.membersNumber}
                key={event.id}
                // image={event.eventImage}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center">
              <p>Non sono presenti eventi nella tua città.</p>
              <button
                className="mt-6 py-4 px-6 text-white  bg-[#ff0066] mx-4"
                type="button"
                onClick={clickHandler}
              >
                Crea il tuo evento
              </button>
            </div>
          )}
        </div>
        <div className="mobile-menu w-full">
          <MobileMenu className="w-[90%]" />
        </div>
      </div>
    )
  );
};

export default Events;
