import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Step1 = () => {
  const [data, setData] = useState();
  //search for api about gps

  const navigate = useNavigate();
  const registerPost = async () => {
    try {
      const res = await fetch("http://localhost:4500/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json",
        },
        body: JSON.stringify(data)
      });
      const dataUser = res.json()
      console.log(dataUser)
    } catch (error) {
      console.error(error);
    }
  }
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
    registerPost()
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
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Name"
            required
            autoFocus
          />
          <input
            type="text"
            name="surname"
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Surname"
            required
          />
          <input
            type="date"
            name="birthday"
            onChange={handleInput}
            className="inputRegisterStyle"
          />
          <input
            type="email"
            name="email"

            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="address"
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Address"
            required
          />
          <input
            type="text"
            name="regione"
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Region / Country"
            required
          />
          <input
            type="text"
            name="provincia"
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="Province"
            required
          />
          <input
            type="text"
            name="città"
            onChange={handleInput}
            className="inputRegisterStyle"
            placeholder="City"
            required
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
