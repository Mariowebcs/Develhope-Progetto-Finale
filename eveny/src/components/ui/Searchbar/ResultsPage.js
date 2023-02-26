import { useParams } from "react-router-dom";

function ResultsPage() {
  const { searchTerm } = useParams();
  return (
    <div>
      <p>
        Hai cercato:{" "}
        <a href="#" className="hover:text-[#ff0066]">
          {searchTerm}
        </a>{" "}
      </p>
    </div>
  );
}

export default ResultsPage;
