import React from "react";
import { ButtonLinkIcon } from "./components/ButtonLinkIcon";
import { Form } from "./components/Form";
import logoImage from "./logo-login-mobile.png";
import loginImage from "./people-neon2.png";

export function Login() {
    return (
        // background
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-pink-600">
            {/* container */}
            <div className="bg-white flex items-center justify-center w-10/12 h-5/6 rounded-lg shadow-2xl shadow-black
                lg:max-w-screen-xl lg:flex-1">
                {/* left-side */}
                <div className="flex justify-center gap-2 lg:w-5/12 w-5/6">
                    {/* login */}
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="lg:flex md:flex flex-col hidden gap-4 pb-6 w-full items-center">
                            <h1 className="text-3xl font-bold">Welcome to Eveny</h1>
                            <p className="text-lg">Please login to use the platform</p>
                        </div>
                        <img src={logoImage} alt="Eveny" className="md:hidden place-self-center h-3/4 w-3/4"/>
                        <Form />
                        <div className="flex flex-col items-center gap-8 mb-10 w-full">
                            <p className="mt-2 lg:hidden">Or log with</p>
                            <a href="https://www.facebook.com/" className="flex justify-center w-4/5 h-8 lg:mt-3">
                                <ButtonLinkIcon icon="Facebook" />
                            </a>
                            <a href="https://www.google.com/" className="flex justify-center w-4/5">
                                <ButtonLinkIcon icon="Google" />
                            </a>
                        </div>
                        {/* sign up */}
                        <div className="flex justify-center  flex-wrap">
                            <p>Not a member? <a href="https://www.google.com/" className="underline">Sign up now</a></p>
                        </div>
                    </div>
                </div>
                {/* image-desktop-layout */}
                <div className="lg:flex max-h-full hidden w-3/4">
                    <img src={loginImage} alt="Login Image" className="rounded-tr-lg rounded-br-lg"></img>
                </div>
            </div>
        </div>
    )
}