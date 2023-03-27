import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Step1 = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    birthday: "",
    email: "",
    address: "",
  });
  //search for api about gps


  const navigate = useNavigate();
  const handleInput = (event) => {
  const { name, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const id = crypto.randomUUID();
    const dataRegister = {
      ...data,
      id: crypto.randomUUID(),
    };
    console.log(dataRegister);
    //add function pass props
    localStorage.setItem("registerData", JSON.stringify(dataRegister));

    navigate("/step2");
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-pink-600">
      <div
        className="flex flex-col items-center justify-center bg-white w-10/12 h-5/6 rounded-lg shadow-2xl shadow-black
            lg:max-w-screen-xl lg:flex-1"
      >
        <h1 className="text-2xl font-bold mb-4">Register now</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Name"
          />
          <input
            type="text"
            name="surname"
            value={data.surname}
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Surname"
          />
          <input
            type="date"
            name="birthday"
            value={data.birthday}
            onChange={handleInput}
            className="inputRegisterStyle"
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Email"
          />
          <input
            type="text"
            name="address"
            value={data.address}
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Address"
          />
          <input
            type="text"
            name="regione"
            value={data.regione}
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Region / Country"
          />
          <input
            type="text"
            name="provincia"
            value={data.provincia}
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Province"
          />
          <input
            type="text"
            name="città"
            value={data.città}
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="City"
          />

          <button
            type="submit"
            className="bg-gradient-to-b from-purple-600 to-pink-500
                    rounded-lg p-2 mt-4 text-white w-full"
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step1;
