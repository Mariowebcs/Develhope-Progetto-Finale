// import React, { useState } from "react";
// import { Route, Routes } from 'react-router-dom';
// import Step1 from './components/Step1'
// import Step2 from './components/Step2'

// const Register = () => {
//     const [data, setData] = useState({
//         name: "",
//         surname: "",
//         birthday: "",
//         email: "",
//         address: "",
//     });
//     //search for api about gps

//     const handleInput = (event) => {
//         const { name, value } = event.target;

//         setData((data) => {
//             return {
//                 ...data,
//                 [name]: value,
//             }
//         })
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const id = crypto.randomUUID();

//         const dataRegister = {
//             ...data,
//             id: id,

//         }
//         console.log(dataRegister);
//         //add function pass props
//         localStorage.setItem("registerData", JSON.stringify(dataRegister));

//     }

//     return (
//        <Routes>
//             <Route path="/" element={<Step1/>}/>
//             <Route path="/step2" element={<Step2/>}/>
//        </Routes>
//     )

// };

// export default Register;
