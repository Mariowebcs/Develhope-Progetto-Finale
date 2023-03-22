import { useState } from "react";
import { InterestingEvents } from "./MightInterestYou";
import { SearchBar } from "./SearchBar";
export function EventsSearch(props) {
  const searchData = (data) => {
    const searchTerm = data;
    console.log(searchTerm, "From parent");
    props.onAddTerms(searchTerm);
  };

  return (
    <div className="flex flex-col">
      <SearchBar onSaveTerm={searchData} />
      <InterestingEvents />
    </div>
  );
}

export default EventsSearch;
