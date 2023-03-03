import React from "react";

export const PasswordInput = ({ value, inputStyle, labelStyle, onChange, onFocus, onBlur }) => {
    return (
        <fieldset className="w-full">
            <label for="password" className={labelStyle} >Enter Password</label>
            <input name="password" type="password" value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
            placeholder="Password" className={inputStyle} required />
        </fieldset>
    )
}