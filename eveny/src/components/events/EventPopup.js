import React from "react";

const EventPopup = ({ closePopup }) => {

    return (
        <div className="w-screen h-full bg-black bg-opacity-20 absolute top-0 flex justify-center items-center">
            <div className="h-1/2 w-3/4 rounded-md bg-white shadow-lg flex flex-col p-6">
                <button onClick={() => closePopup(false)}> X </button>
                <p>Complimenti, ti sei iscritto ad un evento</p>
            </div>
        </div>
    )
}

export default EventPopup;