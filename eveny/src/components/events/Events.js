import React from "react";
import Card from "../UI/Card";
import CreatedEvents from '../assets/CreatedEvents.json'

const Events = (props) => {
  return (
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
  );
};

export default Events;
