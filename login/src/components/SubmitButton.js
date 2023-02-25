import React from "react";

export const SubmitButton = ( { label, buttonStyle, onClick } ) => {
    return (
        <button type="submit" onClick={onClick} className={buttonStyle} >{label}</button>
    )
}