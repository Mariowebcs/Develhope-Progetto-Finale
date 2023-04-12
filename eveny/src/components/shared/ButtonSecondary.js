import React from "react";

const ButtonSecondary = ({ label }) => {
  return (
    <button
      className="flex items-center rounded-lg border bg-sky-900 px-4 py-2 text-center text-sm font-bold
       text-white hover:bg-[#FF0066] hover:text-white">
      {label}
    </button>
  );
};

export default ButtonSecondary;
