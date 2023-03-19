import React from "react";
import { GoogleButton } from "../components/GoogleButton";
import { Form } from "../components/Form";
import logoImage from "../assets/logo-login-mobile.png";
import loginImage from "../assets/people-neon2.png";
import { FacebookButton } from "../components/FacebookButton";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        <GoogleOAuthProvider clientId="1082519138882-s29tv6ul25qplnneoi1u907rpsgcrhct.apps.googleusercontent.com"> 
        {/* background */}
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-pink-600">
            {/* container */}
            <div className="bg-white flex items-center justify-center w-10/12 h-5/6 rounded-lg shadow-2xl shadow-black
                lg:max-w-screen-xl lg:flex-1">
                {/* left-side */}
                
                    {/* login */}
                    <div className="flex flex-col justify-center items-center w-full lg:w-5/12 gap-2">
                        <div className="lg:flex md:flex flex-col hidden gap-4 pb-6 w-full items-center">
                            <h1 className="text-3xl font-bold">Welcome to Eveny</h1>
                            <p className="text-lg">Please login to use the platform</p>
                        </div>
                        <img src={logoImage} alt="Eveny" className="md:hidden place-self-center h-3/4 w-3/4 max-w-[190px]"/>
                        <Form />
                        <div className="flex flex-col items-center gap-4 mb-10 w-full relative top-4">
                            <p className="mt-2 lg:hidden">Or log with</p>
                            <div className="flex justify-center w-4/5 h-8 lg:mt-3">
                                <FacebookButton />
                            </div>
                            <div className="flex justify-center w-4/5">
                                <GoogleButton />
                            </div>
                        </div>
                        {/* sign up */}
                        <div className="flex justify-center flex-wrap">
                            <p>Not a member? </p><Link to="/register" ><p className="underline">Sign up now</p></Link>  {/*to="/register/step1" */}
                        </div>
                    </div>
                
                {/* image-desktop-layout */}
                <div className="lg:flex max-h-full hidden w-3/4">
                    <img src={loginImage} alt="Home layout" className="rounded-tr-lg rounded-br-lg"></img>
                </div>
            </div>
        </div>
        </GoogleOAuthProvider>
        </>
    )
}

export default Login;