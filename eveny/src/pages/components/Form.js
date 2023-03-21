import React, { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import CheckboxInput from "./CheckboxInput";
import SubmitButton from "./SubmitButton";

const Form = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [isFocused, setIsFocused] = useState(false);

  const handleData = (event) => {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("email", data.email);
    localStorage.setItem("remember", data.remember);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isInvalidPassword = data.password.length < 8 && isFocused;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex relative flex-col flex-1 gap-6 w-3/4 items-start"
    >
      <EmailInput
        value={data.email}
        onChange={handleData}
        inputStyle="inputStyleEmail"
        labelStyle="absolute left-6 -top-3 bg-white pl-2 pr-2 lg:flex hidden"
      />
      <PasswordInput
        value={data.password}
        onChange={handleData}
        inputStyle={
          isInvalidPassword === true
            ? "inputStylePasswordInvalid"
            : "inputStylePassword"
        }
        labelStyle="absolute top-12 left-6 bg-white pl-2 pr-2 lg:flex hidden"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isInvalidPassword && (
        <p className="text-red-500 text-xs italic">
          La password deve contenere almeno 8 caratteri
        </p>
      )}
      <CheckboxInput
        checked={data.remember}
        onChange={handleData}
        checkBoxStyle={
          isInvalidPassword === true ? "w-full absolute top-44" : ""
        }
      />
      <SubmitButton
        label="LOGIN"
        buttonStyle={
          isInvalidPassword === true
            ? "buttonStyleInactive"
            : "buttonStyleActive"
        }
        onClick={handleSubmit}
        isDisabled={data.email === "" || data.password === ""}
      />
    </form>
  );
};

export default Form;
