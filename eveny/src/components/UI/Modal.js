import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ open, onClose }) => {
  console.log(open);
  if (!open) return null;

  const navigate = useNavigate();


  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white" onClick={onClose}>
    {/* container */}
      <div className="w-[80%] " >vvvvvvvvvvvv
      {/* freccia per annullare */}
      </div>
      <div>
        {/* immagine */}
      </div>
      <div>
      {/* info */}
      </div>
      <div>
      {/* tag */}
      </div>
      <div>
      {/* partecipanti */}
      </div>
      <div>
      {/* bottone per partecipare */}
      </div>
    </div>
    )
};

export default Modal;
