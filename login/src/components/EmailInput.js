import React from "react";

export const EmailInput = ({ value, inputStyle, labelStyle, onChange }) => {
    return (
        <fieldset className="w-full">
            <label for="email" className={labelStyle} >Enter Email</label>
            <input name="email" type="email" value={value} onChange={onChange}  placeholder="Email" className={inputStyle} required />
        </fieldset>
    )
}