import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Events from '../assets/Events.json'

export function InterestingEvents() {
  
  return (
    <div className="flex flex-col ml-4 mt-4">
      <span className="text-lg">
        <strong>Eventi più ricercati</strong>
      </span>
        <div className="flex flex-col mt-2 ml-2 gap-2">
          {Events.map((item) => (
            <div className="flex" key={item.id}>
            <FontAwesomeIcon
              className={`text-[${item.color}] text-xs mt-1.5 mr-2`}
              icon={faCircle}
            />
            <Link
              to={`/searchTerm/${item.text}`}
              className="hover:text-[#0F4DD9]"
            >
              {item.text}
            </Link>
          </div>
          ))}
        </div>
    </div>
  );
}