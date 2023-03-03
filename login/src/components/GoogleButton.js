import React from "react";
import googleImage from "../Google__G__Logo.svg.png";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

export const GoogleButton = () => {
    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${response.access_token}`
                    }
                })
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
    });

    return (
        <button type="button" onClick={login} className="buttonIconStyle">
            <img width={25} src={googleImage} alt="google icon" />
            Google
        </button>
    )
}