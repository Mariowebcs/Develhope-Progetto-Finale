import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchbarRef = useRef(null);

  function handleSearchInputChange(event) {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredResults = searchItems.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }

  function handleDropdownClick() {
    setShowDropdown(!showDropdown);
  }

  function handleSearchBarFocus() {
    setShowDropdown(true);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchbarRef.current && !searchbarRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchbarRef]);

  const searchItems = ["Serata al Cinema", "Serata Pizza", "Serata gaming"];

  return (
    <div className="relative" ref={searchbarRef}>
      <div className="search-bar mr-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchInputChange}
          className="w-full rounded-full px-4 border-2 border-gray-300 focus:outline-none transition-colors duration-300 ease-in-out"
          onFocus={handleSearchBarFocus}
        />
        <button
          onClick={handleDropdownClick}
          className="absolute top-0 right-0 h-full px-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition-colors duration-300 ease-in-out"
        >
          
          <FontAwesomeIcon icon="chevron-down" />
        </button>
        
      </div>
      {showDropdown && (
        <div
          className="absolute z-10  bg-white border border-gray-300 shadow-lg rounded-b-lg overflow-hidden"
          style={{
            width: searchbarRef.current.offsetWidth,
            top: searchbarRef.current.offsetTop + searchbarRef.current.offsetHeight,
            left: searchbarRef.current.offsetLeft -210,
            right: searchbarRef.current.offsetRight,
            height: searchbarRef.current.offsetHeight + 130,
          }}
        >
          
          <ul className="py-2">
            
         <li className="ml-4 text-gray-400"> Ricerca Eveny..</li>
            {searchResults.map((result) => (
              <li
              
                key={result}
                className="px-4 py-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out flex flex-row gap-1"
              >
             <FontAwesomeIcon icon="search" className="text-neutral-400 text-sm mt-1" />
              {result} 
              
              </li>
              
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
