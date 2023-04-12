import React, { useState } from "react";
import { Link } from "react-router-dom";
import itemsArray from "../assets/items.json";

const Step2 = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);

    const handleInputChange = (event) => {        //testo search bar
        setSearchTerm(event.target.value);
    };

    const handleRemoveItems = (index) => {       //rimuove items
        setSelectedItems(selectedItems.filter((_, i) => i !== index));
    };

    const onSearch = (search) => {
        setSearchTerm(search);
        setSelectedItems([...selectedItems, search]);
    };

    const registerData = JSON.parse(localStorage.getItem("registerData"));

    const handleSubmitInterests = () =>{
        const dataInterests = [
            ...selectedItems,
        ]
       
        registerData["interests"] = dataInterests;
        console.log(registerData)
        localStorage.setItem("registerData", JSON.stringify(registerData));
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-pink-600">
            <div className="flex flex-col items-center justify-center bg-white w-10/12 h-5/6 rounded-lg shadow-2xl shadow-black
                lg:max-w-screen-xl lg:flex-1 relative">
            <div className="absolute top-10 flex flex-col gap-4 w-max-72 items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Choose Your Interests</h1>
            {/* search bar */}
            <div>
                <input type="search" name="search" value={searchTerm} onChange={handleInputChange} placeholder="Search" 
                className="border-2 border-purple-600 w-full rounded-2xl p-1 focus:outline-none"/>
                <div>
                    {itemsArray.filter((item)=> {
                        const search = searchTerm.toLowerCase();
                        const interest = item.interests.toLowerCase();

                        return search && interest.startsWith(search) && interest !== search
                    })
                    .slice(0, 8)
                    .map((item, index) => (
                        <div key={index} onClick={() => onSearch(item.interests)} className="cursor-pointer text-start mt-1 mb-1">
                            {item.interests}
                            </div>
                    ))}
                </div>
            </div>

            {/* i miei interessi */}
            <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-xl">My Interests</h2>
                <ul className="flex gap-2 flex-wrap pl-3 pr-3">
                    {selectedItems.map((item, index) => (
                        <li key={index} className="bg-purple-800 rounded-3xl p-1 text-white w-fit">
                            {item} <button type="button" onClick={() => handleRemoveItems(index)}
                            className="rounded-full bg-purple-400 w-6 h-6 text-black">X</button>
                        </li>
                    ))}
                </ul>
            </div>
            
            </div>
            <button type="button" onClick={handleSubmitInterests} className="bg-gradient-to-b from-purple-600 to-pink-500 
                rounded-lg p-2 mt-4 text-white w-10/12 absolute bottom-14"><Link to="step3">Go</Link></button>
            </div>
        </div>
    )
}

export default Step2;