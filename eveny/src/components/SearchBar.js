import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronLeft,
  faClock,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
  const inputRef = useRef();

  const [input, setInput] = useState("");
  const [events, setEvents] = useState([]);

  const handleSearching = (e) => {
    setInput(e.target.value);
  };

  const clickSearch = () => {
    const filteredEvents = events.filter((prev, current) => prev !== current);
    if(!filteredEvents.includes(input)){
      setEvents([...filteredEvents, input]);
    }
    let text = ''
    inputRef.current.value = text;
    
  };

  const removeEvent = (ev) => {
    const NewEvents = events.filter((event, j) => ev !== j);
    setEvents(NewEvents);
  };

  return (
    <div className="flex-col">
      <div className="flex w-[95%] my-3 ml-3 gap-4 justify-around">
        {/* back button */}
        <button className="active:text-[#ff0066]">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {/* searchbar */}
        <div className="relative">
          <label htmlFor="search">
            <input
              className="rounded-full w-[250px] pl-8 focus:border-[#ff0066] focus:outline-none"
              type="search"
              id="search"
              placeholder="Cerca un evento..."
              ref={inputRef}
              onChange={handleSearching}
            />
            <button className="absolute left-2 pointer-events-none">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </label>
        </div>
        {/* search button */}
        <button
          className="text-[#ff0066] mr-2 active:text-[#0C4A6E] hover:text-[#0C4A6E]"
          onClick={clickSearch}
        >
          Cerca
        </button>
      </div>
      {/* already searched events */}
      <div>
        <ul>
          {events?.map((event, index) => (
            <div className="ml-4 mt-4 flex relative" key={event}>
              <li>
                {event && <FontAwesomeIcon className="mr-2" icon={faClock} />}
                {
                  <a className="hover:text-[#ff0066]" href="#">
                    {event}
                  </a>
                }{" "}
                {event && (
                  <button id="addSearch" type="button" onClick={() => removeEvent(index)}>
                    <FontAwesomeIcon
                      className="absolute right-10 bottom-0.5"
                      icon={faXmark}
                    />
                  </button>
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
