import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import itemsArray from "../../components/json/items.json";

const Step2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [buttonVisible, setButtonVisible] = useState(Array(itemsArray.length).fill(true)); // tramite il fill tramutiamo tutti i valori dell'array in true
  const [shakeButtonIndex, setShakeButtonIndex] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    //testo search bar
    setSearchTerm(event.target.value);
  };
  // filtra testo di ricerca sia per lowerCase che per Uppercase
  const filteredArray = itemsArray.filter((item) => {
    const interests = item.interests.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    const searchTermUpper = searchTerm.toUpperCase();
    return interests.includes(searchTermLower) || interests.includes(searchTermUpper);
  })
  // filtra l'array dello useState selectedItems
  const uniqueItems = selectedItems.filter((item, index) => {
    return selectedItems.indexOf(item) === index;
  });

  // Al click del bottone tag preferito viene aggiunto all'array e viene nascosto tramite setButtonVisible
  const onSearch = (search, index) => {
    setSearchTerm(search);
    setSelectedItems([...selectedItems, search]);
    setSearchTerm('');
    // rende invisibile il bottone appena cliccato
    const newButtonVisibility = [...buttonVisible];
    newButtonVisibility[index] = false;
    setButtonVisible(newButtonVisibility);
  };

  //rimuove gli items dall'array di selectedItems
  const handleRemoveItems = (index) => {
    const updateItems = [...selectedItems];
    if (updateItems.includes(selectedItems[index])) {
      updateItems.splice(index, 1);
      setSelectedItems(updateItems);
    }
    // riabilita il bottone corrispondente nella sezione dei bottoni selezionabili
    const newButtonVisibility = [...buttonVisible];
    newButtonVisibility[itemsArray.findIndex((item) => item.interests === selectedItems[index])] = true;
    setButtonVisible(newButtonVisibility);
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
          <div>
            <input
              onChange={handleInputChange}
              className="border-2 border-sky-900 w-full rounded-2xl p-1 focus:outline-none" />
          </div>
          <div className="h-[180px] overflow-y-scroll scrollbar w-[95%]">
            {filteredArray.map((item, index) => (
              buttonVisible[index] && (
                <button
                  key={index}
                  className={`cursor-pointer hover:bg-sky-900 hover:text-white text-start px-2 mt-1 mb-1 mx-3 border-sky-900 border-solid border-2 rounded-full ${shakeButtonIndex === index ? 'shake' : ''}`}
                  onClick={() => {onSearch(item.interests, index), setShakeButtonIndex(index)}}

                >
                  {item.interests}
                </button>
              )
            ))}
          </div>
          {/* i miei interessi */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-xl">My Interests</h2>
            <ul className="flex gap-2 flex-wrap pl-3 pr-3">
              {uniqueItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-[#ff0066] rounded-3xl p-1 text-white w-fit"
                >
                  {item}{" "}
                  <button
                    type="button"
                    onClick={() => handleRemoveItems(index)}
                    className="rounded-full bg-white w-6 h-6 text-black"
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
                rounded-lg p-2 text-white w-8/12 absolute bottom-8"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Step2;
