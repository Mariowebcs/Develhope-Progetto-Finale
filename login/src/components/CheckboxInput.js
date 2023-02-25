import React from "react";

export const CheckboxInput = ({ checked, onChange }) => {
    return (
        <fieldset className="w-full">
            <input name="remember" type="checkbox" checked={checked} onChange={onChange} />
            <label for="checkbox" > Remember me</label>
        </fieldset>
    )
}