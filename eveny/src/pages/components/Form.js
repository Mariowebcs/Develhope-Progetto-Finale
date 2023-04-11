import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import CheckboxInput from "./CheckboxInput";
import SubmitButton from "./SubmitButton";

//Preleviamo i dati dal local storage

const handleClick = () => console.log(registerData);

const Form = () => {
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  //   remember: false,
  // });

  // const handleData = (event) => {
  //   const { name, type, value, checked } = event.target;

  //   setData((data) => {
  //     return {
  //       ...data,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // };

  // questo fetcha i dati dal db degli utenti e li stampa in console al click del bottone login
  // il prossimo step é di eseguire la verifica
  // useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4500/users", {
          method: "GET"
        });
        const {email} = await response.json();
        console.log(email, "userData");
      } catch (error) {
        console.error("Errore durante la fetch dei dati degli utenti:", error);
      }
    };
  //   fetchData();
  // }, []);

  const rememberData = JSON.parse(localStorage.getItem("rememberData"));

  window.onload = () => {
    console.log(rememberData);
    setEmail(rememberData.email);
    setPassword(rememberData.password);
  };
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setRemember(event.target.checked);
  };

  // const getUserEmailPassword = async () => {
  //   try {
      
  //   } catch (error) {
      
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const registerData = JSON.parse(localStorage.getItem("registerData"));
    // getUserEmailPassword();
    fetchData();
    if (remember) {
      const rememberData = {
        email: email,
        password: password,
      };
      localStorage.setItem("rememberData", JSON.stringify(rememberData));
    }

    if (registerData?.email === email && registerData?.password === password) {
      const userDataLogin = {
        id: registerData.id,
        email: email,
        password: password,
        authenticated: true,
      };

      console.log(userDataLogin);
      localStorage.setItem("userLoginData", JSON.stringify(userDataLogin));
      alert("Login avvenuto con successo");
      navigate(`/events/`);
    } else {
      alert("utente sconosciuto o dati errati");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isInvalidPassword = password.length < 8 && isFocused;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex relative flex-col flex-1 gap-6 w-3/4 items-start"
    >
      <EmailInput
        value={email}
        onChange={handleEmailChange}
        inputStyle="inputStyleEmail"
        labelStyle="absolute left-6 -top-3 bg-white pl-2 pr-2 lg:flex hidden"
      />
      <PasswordInput
        value={password}
        onChange={handlePasswordChange}
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
      <div>
        <CheckboxInput
          checked={remember}
          onChange={handleCheckboxChange}
          checkBoxStyle={
            isInvalidPassword === true ? "w-full absolute top-44" : ""
          }
        />
      </div>
      <SubmitButton
        label="LOGIN"
        buttonStyle={
          email.length ===0 || password.length ===0
            ? "buttonStyleInactive"
            : "buttonStyleActive"
        }
        isDisabled={email.length ===0 || password.length ===0}
      />
    </form>
  );
};

export default Form;
