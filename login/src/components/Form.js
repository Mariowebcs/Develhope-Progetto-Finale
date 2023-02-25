import React, { useState } from "react";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { CheckboxInput } from "./CheckboxInput";
import { SubmitButton } from "./SubmitButton";

export function Form() {
    const [data, setData] = useState({
        email: "",
        password: "",
        remember: false
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${data.email}, Password: ${data.password}, Checkbox: ${data.remember}`);
    }

    const handleData = (event) => {
        const { name, type, value, checked} = event.target;

        localStorage.setItem("email", data.email);
        localStorage.setItem("remember", data.remember);

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex relative flex-col flex-1 gap-4 w-3/4 items-center">
            <EmailInput value={data.email} onChange={handleData}  
                inputStyle="pl-4 p-2 rounded-2xl bg-white border-2 border-purple-600 
                sm:placeholder:text-gray-400 lg:placeholder:text-white w-full" 
                labelStyle="absolute left-6 -top-3 bg-white pl-2 pr-2 lg:flex hidden" />
            <PasswordInput value={data.password} onChange={handleData} 
                inputStyle="pl-4 p-2 rounded-2xl bg-white border-2 border-purple-600 
                sm:placeholder:text-gray-400 lg:placeholder:text-white w-full" 
                labelStyle="absolute top-12 left-6 bg-white pl-2 pr-2 lg:flex hidden" />
            <CheckboxInput checked={data.remember} onChange={handleData} />
            <SubmitButton label="LOGIN" buttonStyle="bg-gradient-to-b from-purple-600 to-pink-500 
                rounded-lg p-2 mb-4 text-white w-full" onClick={handleSubmit} />
        </form>
    )

}