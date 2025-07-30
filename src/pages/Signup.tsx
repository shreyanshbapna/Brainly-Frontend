import { useRef } from "react"
import { InputBox } from "../component/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    
    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const email = emailRef.current?.value;
        
        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username: username,
            email: email,
            password: password
        })
        navigate("/signin")
    }
    return <div className="h-screen w-screen bg-gray-100  flex items-center justify-center">
        <div className="border shadow-md border-gray-200 rounded-2xl p-4"> 
            <div className="font-bold text-2xl text-gray-700 pb-8 flex items-center justify-center underline underline-offset-8"> Signup </div>
            <InputBox reference={usernameRef} placeholder="username"/>
            <InputBox reference={emailRef} placeholder="Email"/>
            <InputBox reference={passwordRef} placeholder="password"/>
            <div className="flex items-center p-2 pt-7">
                <button onClick={signup} className="bg-purple-600 w-full p-4 rounded-md cursor-pointer text-white">Submit</button>
            </div>
        </div>
    </div>
}