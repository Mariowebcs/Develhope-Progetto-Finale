// import React from "react";
// import Step1 from "../components/Step1";
// import Step2 from "../components/Step2";
// import { useState } from "react";


// const Register = () => {
//     const [step, setStep] = useState(0);

//     const handleStep = () => {
//         setStep(current => current + 1);
//     }

//     return (
//         <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-pink-600">
//             <div className="flex flex-col items-center justify-center bg-white w-10/12 h-5/6 rounded-lg shadow-2xl shadow-black
//                 lg:max-w-screen-xl lg:flex-1">
                    
                    
//                     {step === 0 && (
//                         <Step1 />
//                     )}
//                     {step === 1 && (
//                         <Step2 />
//                     )}
//                     {/* {step === 2 && (
//                         <Step3 />
//                     )} */}
//                     {/* {step === 3 && (
//                         <StepFinal />
//                     )} */}
                    
//                     <button type="button" onClick={handleStep} className="bg-gradient-to-b from-purple-600 to-pink-500 
//                     rounded-lg p-2 mt-4 text-white w-full">Next</button>

//             </div>
//         </div>
//     )
// };

// export default Register;