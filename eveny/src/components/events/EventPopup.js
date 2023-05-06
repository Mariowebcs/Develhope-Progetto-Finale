import React from "react";

const EventPopup = ({ closePopup }) => {

    return (
        <div className="w-screen h-full bg-black bg-opacity-20 absolute top-0 flex justify-center items-center">
            <div className="h-1/2 w-3/4 rounded-md bg-white shadow-lg flex flex-col p-6 items-center justify-between">
                <p className="text-center pt-8 text-xl">Complimenti, ti sei iscritto ad un nuovo evento</p>
                <button onClick={() => closePopup(false)}
                    className="w-20 mb-6 py-2 text-white bg-gradient-to-b from-purple-800 to-pink-600 rounded-xl">Indietro</button>
            </div>
        </div>
    )
}

export default EventPopup;