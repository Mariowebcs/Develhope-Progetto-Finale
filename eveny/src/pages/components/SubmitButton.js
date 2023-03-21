import React from "react";

const SubmitButton = ({ label, buttonStyle, onClick, isDisabled }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={buttonStyle}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
