import { useParams } from "react-router-dom";
import Card from "../UI/Card";

function ResultsPage(props) {
  const { searchTerm } = useParams();
  return (
    <div className="flex flex-col justify-between items-center mt-8 w-[90%] flex-wrap my-0 mx-auto md:flex-row ">
      {/* <p>
        Hai cercato:{" "}
        <a href="#" className="hover:text-[#ff0066]">
          {searchTerm}
        </a>{" "}
      </p> */}
      {props.items?.map((event)=><Card title={event.title} description={event.description} date={event.date}/>)}
    </div>
  );
}

export default ResultsPage;