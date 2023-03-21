import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CheckboxInput = ({ checked, onChange, checkBoxStyle }) => {
  return (
    <fieldset className={checkBoxStyle}>
      <input
        name="remember"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="checkbox"> Remember me</label>
    </fieldset>
  );
};

export default CheckboxInput;
