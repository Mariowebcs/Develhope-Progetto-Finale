import Events from "./Events.json";
import { React } from "react";

function List(props) {
  const filteredData = Events.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.title.toLowerCase().includes(props.input);
    }
  });
  return (
    <div>
      {filteredData && (
        <h1>
          {" "}
          <strong>Consigliati</strong>{" "}
        </h1>
      )}
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;