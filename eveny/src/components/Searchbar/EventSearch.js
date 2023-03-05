import { useState } from "react";
import { InterestingEvents } from "./MightInterestYou";
import { SearchBar } from "./SearchBar";
export function EventsSearch(props) {
  const searchData = (data) => {
    const searchTerm = data;
    console.log(searchTerm, "From parent");
    props.onAddTerms(searchTerm);
  };

  const [render, setRender] = useState(false);

  const searchingHandler = (verify) => {
    if (verify) {
      setRender(!render);
    } else {
      setRender(!render);
    }
  };

  return (
    <div>
      <SearchBar onSaveTerm={searchData} onSearching={searchingHandler} />
      {render && <InterestingEvents />}
    </div>
  );
}

export default EventsSearch;
