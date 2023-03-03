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
    const [isFocused, setIsFocused] = useState(false)

    const handleData = (event) => {
        const { name, type, value, checked} = event.target;

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem("email", data.email);
        localStorage.setItem("remember", data.remember);
    }

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    const isInvalidPassword = data.password.length < 8 && isFocused;

    return (
        <form onSubmit={handleSubmit} className="flex relative flex-col flex-1 gap-4 w-3/4 items-center">
            <EmailInput value={data.email} onChange={handleData}  
                inputStyle="inputStyleEmail"
                labelStyle="absolute left-6 -top-3 bg-white pl-2 pr-2 lg:flex hidden" />
            <PasswordInput value={data.password} onChange={handleData} 
                inputStyle={isInvalidPassword === true ? "inputStylePasswordInvalid" : "inputStylePassword"} 
                labelStyle="absolute top-12 left-6 bg-white pl-2 pr-2 lg:flex hidden" 
                onFocus={handleFocus} onBlur={handleBlur}/>
            {isInvalidPassword && (
                <p className="text-red-500 text-xs italic mt-1">
                La password deve contenere almeno 8 caratteri
                </p>
            )}    
            <CheckboxInput checked={data.remember} onChange={handleData} />
            <SubmitButton label="LOGIN" buttonStyle="bg-gradient-to-b from-purple-600 to-pink-500 
                rounded-lg p-2 mb-4 text-white w-full" onClick={handleSubmit} 
                isDisabled={data.email === "" && data.password === ""} />
        </form>
    )

}