import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronLeft,
  faClock,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "../shared/MobileMenu";
import Navbar from "../shared/Navbar";

export function SearchBar(props) {
  const navigate = useNavigate();
  const [key, setKey] = useState("");         //risultati barra
  const [searchResult, setSearchResult] = useState([]);


  useEffect(() => {
    const search = async () => {
      try {
        if(!key.trim()) {
          setSearchResult([])
          return
        }
        const res = await fetch("http://localhost:4500/events", {
        method: "GET"
      })
      const data = await res.json();
      setSearchResult(data)
      } catch (error) {
        console.log(error);
      }
    }
    search()
  }, [key]);

  const goToEvent = (e) => {
    const id = e.target.value;
    navigate(`/events/${id}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <form className="flex justify-center"
        // onSubmit={SearchEvent}
        >
        <div>
          {/* searchbar */}
            <input className="rounded-l-full w-[250px] pl-2 border-[#ff0066] focus:outline-none"
              placeholder="Cerca un evento..." onChange={(e) => setKey(e.target.value)} />
          {/* search button */}
          <button className=" rounded-r-full border border-[#ff0066] px-3 bg-[#ff0066] text-white"
            // onClick={SearchEvent} 
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        </form>
        {/* history events */}

        <div>
          {searchResult && setSearchResult.length > 0 && (
            <div>
              {searchResult.filter((event) => {
                return key.toLowerCase() === '' ? event : event.title.toLowerCase().includes(key)
              })
              .map(event => (
                
                <div className="border-b border-sky-900 pl-2 bg-white text-[#ff0066]"
                key={event._id}>
                  <button onClick={goToEvent} value={event._id}>
                  {event.title}
                  <div className="text-sky-900">
                    {event.location} partecipanti: {event.membersNumber}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {key === "" && <h2 className="text-xl mt-5">Cosa aspetti cerca il tuo evento</h2>}
    </div>
  );
}

export default SearchBar;
