import React from "react";

export const SubmitButton = ( { label, buttonStyle, onClick, isDisabled } ) => {
    return (
        <button type="submit" onClick={onClick} className={buttonStyle} disabled={isDisabled}>{label}</button>
    )
}