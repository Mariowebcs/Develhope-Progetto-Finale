import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronLeft,
  faClock,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export function SearchBar(props) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [searching, setSearching] = useState(false);
  let verify;
  const searchingHandler = () => {
    setSearching(true);
    verify = true;
    props.onSearching(verify);
  };

  const focusOutHandler = ()=>{
    setSearching(false);
    verify = false;
    props.onSearching(verify);
  }

  useEffect(() => {
    const history = localStorage.getItem("searchHistory");
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const inputSearching = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const SearchEvent = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      if (!searchHistory.includes(searchTerm)) {
        const newHistory = [searchTerm, ...searchHistory];
        setSearchHistory(newHistory);
        localStorage.setItem("searchHistory", JSON.stringify(newHistory));
      }
      setSearching(false);
      props.onSaveTerm(searchTerm);
      navigate(`/searchTerm/${searchTerm}`);
    }
  };
  const removeSearchTerm = (index) => {
    const newHistory = [...searchHistory];
    newHistory.splice(index, 1);
    setSearchHistory(newHistory);
  };

  return (
    <form
      className="flex flex-col w-[350px] relative my-3 ml-3 gap-4 justify-around"
      onSubmit={SearchEvent}
    >
      <div className="relative">
        {/* back button */}
        <button className="mr-2">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {/* searchbar */}
        <label htmlFor="search">
          <input
            className="rounded-full w-[250px] pl-8 focus:border-[#ff0066] focus:outline-none"
            placeholder="Cerca un evento..."
            onChange={inputSearching}
            onFocus={searchingHandler}
            onBlur={focusOutHandler}
          />
          <button className="absolute left-7 " onClick={SearchEvent}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </label>
        {/* search button */}
        <button
          className="text-[#ff0066] ml-2 active:text-[#0C4A6E] hover:text-[#0C4A6E]"
          onClick={SearchEvent}
        >
          Cerca
        </button>
      </div>
      {/* history events */}
      {searching && (
        <div className="flex flex-col">
          <ul>
            {searchHistory?.map((term, index) => (
              <div className="ml-3 mt-4 flex relative" key={term}>
                <li>
                  {term && (
                    <FontAwesomeIcon
                      className="mr-2 text-[#0C4A6E]"
                      icon={faClock}
                    />
                  )}
                  {
                    <Link
                      to={`/searchTerm/${term}`}
                      className="hover:text-[#ff0066]"
                    >
                      {term}
                    </Link>
                  }{" "}
                  {term && (
                    <button
                      className="absolute left-56"
                      id="addSearch"
                      type="button"
                      onClick={() => removeSearchTerm(index)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  )}
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

export default SearchBar;
