import React, { useState } from "react";
import CreateEventForm from "./CreateEventForm";

const CreateEvent = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center">
      {!isEditing && ( 
        <button
          onClick={startEditing}
          className="mt-6 py-4 px-6 text-white bg-[#ff0066] mx-4"
        >
          Crea il tuo evento
        </button>
      )}
      {isEditing && <CreateEventForm onCancel={stopEditing} />}
    </div>
  );
};

export default CreateEvent;
