import { InterestingEvents } from "./ui/Searchbar/MightInterestYou";
import { SearchBar } from "./ui/Searchbar/Searchbar";
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