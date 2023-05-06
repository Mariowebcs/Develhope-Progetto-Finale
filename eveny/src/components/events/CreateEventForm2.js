import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../shared/MobileMenu";
import Navbar from "../shared/Navbar";
import itemsArray from "../json/items.json";

const CreateEventForm2 = (props) => {
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

      const dataEvent = JSON.parse(localStorage.getItem("eventDetails"));

      const postEvent = async (data) => {
        try {
          const res = await fetch("http://localhost:4500/events/api/v1/events", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Accept": "application/json",
            },
            body: JSON.stringify(data)
          });
          const dataEvent = res.json();
          console.log(dataEvent);
        } catch (error) {
          console.error(error);
        }
      };

  const handleSubmitInterests = () => {
    const dataTags = [...selectedItems];
    
    console.log(dataEvent);
    // localStorage.setItem("eventDetails", JSON.stringify(dataEvent));
    
    dataEvent["tags"] = dataTags;

    postEvent(dataEvent);
    navigate("/events");
  };

  const returnBackHandler = () => {
    navigate("/addevent");
  };

    return (
      <>
        <Navbar/>
          <div className="w-full flex items-center justify-center">
            <div className="w-11/12 flex flex-col items-center justify-center gap-3 mt-24">
              <label className="text-xl" htmlFor="ev-tags">Tags: </label>
              <input type="search" required id="ev-tags" className="inputRegisterStyle"
                name="event-tags" onChange={handleInputChange} />
              <div className="h-[180px] overflow-y-scroll scrollbar w-[95%]">
                {filteredArray.map((item, index) => (
                buttonVisible[index] && (
                  <button key={index}
                    className={`cursor-pointer hover:bg-sky-900 hover:text-white text-start px-2 mt-1 mb-1 mx-3
                     border-sky-900 border-solid border-2 rounded-full ${shakeButtonIndex === index ? 'shake' : ''}`}
                    onClick={() => {onSearch(item.interests, index), setShakeButtonIndex(index)}}>
                    {item.interests}
                  </button>
                )
              ))}
              </div>
        {/* i miei interessi */}
              <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-xl">My Tags</h2>
                <ul className="flex gap-2 flex-wrap pl-3 pr-3">
                  {uniqueItems.map((item, index) => (
                  <li key={index} className="bg-[#ff0066] rounded-3xl p-1 text-white w-fit">
                      {item}{" "}
                    <button type="button" onClick={() => handleRemoveItems(index)}
                      className="rounded-full bg-white w-6 h-6 text-black">
                      X
                    </button>
                  </li>
                ))}
                </ul>
              </div>
              <div className="flex">
                <button type="button" onClick={returnBackHandler}
                  className="w-32 m-4 p-4 text-white bg-sky-900 rounded-xl">
                    Indietro
                </button>
                <button type="button" onClick={handleSubmitInterests}
                  className="w-32 m-4 p-4 text-white bg-gradient-to-b from-purple-800 to-pink-600 rounded-xl">
                    Avanti
                </button>
              </div>
            </div>
          </div>
      </>
    );
};

export default CreateEventForm2;