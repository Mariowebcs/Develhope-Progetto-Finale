import React, { useState } from "react";

const Step2 = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [interests, setInterests] = useState([]);

const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
}
console.log(searchTerm);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-pink-600">
            <div className="flex flex-col items-center justify-center bg-white w-10/12 h-5/6 rounded-lg shadow-2xl shadow-black
                lg:max-w-screen-xl lg:flex-1">
            <h1 className="text-2xl font-bold mb-4">Your Interest</h1>
            {/* search bar */}
            <div>
                <input type="search" name="search" value={searchTerm} onChange={handleInputChange} placeholder="Search"/>
            </div>
            {/* i miei interessi */}
            <div>
                
            </div>
            {/* altri interessi */}
            <div>
                
            </div>
            </div>
        </div>
    )
}

export default Step2;