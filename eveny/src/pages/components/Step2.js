import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import itemsArray from "../../components/json/items.json";

const Step2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    //testo search bar
    setSearchTerm(event.target.value);
  };

  const filteredArray = itemsArray.filter((item) => {
    return item.interests.includes(searchTerm);
  })

  const handleRemoveItems = (index) => {
    //rimuove items
    setSelectedItems(selectedItems.filter((_, i) => i !== index));
  };

  const onSearch = (search) => {
    setSearchTerm(search);
    setSelectedItems([...selectedItems, search]);
    setSearchTerm('')
  };

  const registerData = JSON.parse(localStorage.getItem("registerData"));

  const handleSubmitInterests = () => {
    const dataInterests = [...selectedItems];
    registerData["interests"] = dataInterests;
    console.log(registerData);
    localStorage.setItem("registerData", JSON.stringify(registerData));
    navigate("/step3");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-pink-600">
      <div
        className="flex flex-col items-center justify-center bg-white w-10/12 h-5/6 rounded-lg shadow-2xl shadow-black
                lg:max-w-screen-xl lg:flex-1 relative"
      >
        <div className="absolute top-10 flex flex-col gap-4 w-max-72 items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Choose Your Interests</h1>
          <form>
            <input
              onChange={handleInputChange}
              className="border-2 border-purple-600 w-full rounded-2xl p-1 focus:outline-none" />
          </form>
          <div className="h-[255px] overflow-y-scroll scrollbar">
            {filteredArray.length > 0 && filteredArray.map((item, index) => (
              <button
                key={index}
                className="cursor-pointer text-start px-2 mt-1 mb-1 mx-3 border-purple-800 border-solid border-2 rounded-full"
                onClick={() => onSearch(item.interests)}
              >
                {item.interests}
              </button>
            ))}
            {!filteredArray.length > 0 && itemsArray.map((item, index) => (
              <button
                key={index}
                className="cursor-pointer text-start px-2 mt-1 mb-1 mx-3 border-purple-800 border-solid border-2 rounded-full"
                onClick={() => onSearch(item.interests)}
              >
                {item.interests}
              </button>
            )) }
          </div>


          {/* i miei interessi */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-xl">My Interests</h2>
            <ul className="flex gap-2 flex-wrap pl-3 pr-3">
              {selectedItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-purple-800 rounded-3xl p-1 text-white w-fit"
                >
                  {item}{" "}
                  <button
                    type="button"
                    onClick={() => handleRemoveItems(index)}
                    className="rounded-full bg-purple-400 w-6 h-6 text-black"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmitInterests}
          className="bg-gradient-to-b from-purple-600 to-pink-500
                rounded-lg p-2 text-white w-8/12 absolute bottom-14"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Step2;
