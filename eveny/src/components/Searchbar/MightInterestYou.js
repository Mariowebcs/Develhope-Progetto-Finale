import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export function InterestingEvents() {
  return (
    <div className="flex flex-col ml-4 mt-4">
      <span className="text-lg">
        <strong>Eventi più ricercati</strong>
      </span>
      <ul>
        <div className="flex flex-col mt-2 ml-2 flex gap-2">
          <div className="flex">
            <FontAwesomeIcon
              className="text-[#ff0066] text-xs mt-1.5 mr-2"
              icon={faCircle}
            />
            <a className="hover:text-[#0F4DD9]" href="#">
              Eventi a Milano
            </a>
          </div>
          <div className="flex">
            <FontAwesomeIcon
              className="text-[#0C4A6E] text-xs mt-1.5 mr-2"
              icon={faCircle}
            />
            <a className="hover:text-[#ff0066]" href="#">
              Milano Pub King Arthur
            </a>
          </div>
          <div className="flex">
            <FontAwesomeIcon
              className="text-[#ff0066] text-xs mt-1.5 mr-2"
              icon={faCircle}
            />
            <a className="hover:text-[#0F4DD9]" href="#">
              Concerto Arctic Monkeys Milano
            </a>
          </div>
          <div className="flex">
            <FontAwesomeIcon
              className="text-[#0C4A6E] text-xs mt-1.5 mr-2"
              icon={faCircle}
            />
            <a className="hover:text-[#ff0066]" href="#">
              Pizzata da Newpolean
            </a>
          </div>
          <div className="flex">
            <FontAwesomeIcon
              className="text-[#ff0066] text-xs mt-1.5 mr-2"
              icon={faCircle}
            />
            <a className="hover:text-[#0F4DD9]" href="#">
              Serata al Bowling
            </a>
          </div>
          <div className="flex">
            <FontAwesomeIcon
              className="text-[#0C4A6E] text-xs mt-1.5 mr-2"
              icon={faCircle}
            />
            <a className="hover:text-[#ff0066]" href="#">
              {" "}
              Serata all'UCI film Spiderman{" "}
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
}
