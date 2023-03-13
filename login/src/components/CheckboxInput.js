import React from "react";

export const CheckboxInput = ({ checked, onChange, checkBoxStyle }) => {
    return (
        <fieldset className={checkBoxStyle}>
            <input name="remember" type="checkbox" checked={checked} onChange={onChange} />
            <label for="checkbox" > Remember me</label>
        </fieldset>
    )
}