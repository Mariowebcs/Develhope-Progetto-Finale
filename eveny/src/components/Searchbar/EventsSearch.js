import { InterestingEvents } from "./MightInterestYou";
import { SearchBar } from "./Searchbar";
export function EventsSearch() {

  const searchData = (data) => {
    const searchTerm = data;
    console.log(searchTerm, 'From parent')
  }

  return (
    <div>
      <SearchBar onAddTerms={searchData}/>
      <InterestingEvents />
    </div>
  );
}

export default EventsSearch