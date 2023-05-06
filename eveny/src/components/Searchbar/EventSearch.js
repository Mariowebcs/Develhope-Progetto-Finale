import { useState } from "react";
import { InterestingEvents } from "./MightInterestYou";
import { SearchBar } from "./SearchBar";
import Navbar from "../shared/Navbar";
import MobileMenu from "../shared/MobileMenu";
export function EventsSearch(props) {
  const searchData = (data) => {
    const searchTerm = data;
    console.log(searchTerm, "From parent");
    props.onAddTerms(searchTerm);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col relative top-28 items-center gap-5">
        <SearchBar />
        {/* <InterestingEvents /> */}

    </div>
      <MobileMenu />
    </>
  );
}

export default EventsSearch;
