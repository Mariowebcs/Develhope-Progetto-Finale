import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Step3 = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    image: "",
    description: "",
  });

  const navigate = useNavigate();
  const habdleInputChange = (event) => {
    const { name, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const registerData = JSON.parse(localStorage.getItem("registerData"));

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataProfile = {
      ...registerData,
      ...data,
    };
    console.log(dataProfile);
    localStorage.setItem("registerData", JSON.stringify(dataProfile));
    alert("Registrazione avvenuta con successo!");
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-pink-600">
      <div
        className="flex flex-col items-center justify-center bg-white w-10/12 h-5/6 rounded-lg shadow-2xl shadow-black
                lg:max-w-screen-xl lg:flex-1 relative"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 absolute top-10 w-max-72 items-center justify-center"
        >
          <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={habdleInputChange}
            className="inputRegisterStyle w-full"
            placeholder="Username"
            required
            autoFocus
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={habdleInputChange}
            className="inputRegisterStyle  w-full"
            placeholder="Password"
            required
          />
          <label
            htmlFor="image"
            className="bg-sky-900 border border-black rounded-full shadow-md flex flex-col justify-center items-center p-6 hover:cursor-pointer text-white"
          >
            Upload your profile picture
          </label>
          <input
            type="file"
            name="image"
            id="image"
            value={data.image}
            onChange={habdleInputChange}
            className="hidden"
          />
          <textarea
            name="description"
            onChange={habdleInputChange}
            value={data.description}
            placeholder="Describe yourself"
            className="inputRegisterStyle w-full"
          ></textarea>

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

export default Step3;
