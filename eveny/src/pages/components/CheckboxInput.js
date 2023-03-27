import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CheckboxInput = ({ checked, onChange, checkBoxStyle }) => {
  return (
    <div className="flex gap-1 pl-2">
      <fieldset className={checkBoxStyle}>
        <input
          name="remember"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </fieldset>
      <label htmlFor="checkbox"> Remember me</label>
    </div>
  );
};

export default CheckboxInput;
