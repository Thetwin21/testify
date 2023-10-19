import React, { useEffect } from "react";
import {  useState } from "react";

import { useNavigate } from "react-router-dom";
// import { registerUser, socialRegister } from "../../features/auth/authSlice";
import img1 from "../../assets/png/side-picture.svg";
import Logo from "../../assets/png/image 1.svg";
import Login from "./Login";
import Signup from "./Register";
import { useAppSelector } from "../../app/hooks";


const AuthUser = () => {
  
  const navigate = useNavigate();
  //login or register
  const [authType, setAuthType] = useState<"login" | "sign-up">("login");
  //authstate
  const handleAuthTypeLogin = () => {

      setAuthType("sign-up")
    
  }
  //authstate
  const handleAuthTypeSign = () => {

      setAuthType("login")
    
  }

  const { user } = useAppSelector(state => state.auth)

  useEffect(() => {
   if(Boolean(user) ){

   }
  }, [user, navigate])
  


  return (
    <div className="min-h-full flex flex-col justify-center sm:py-12 md:py-0 sm:px-6 md:px-0">
      <div className="grid md:grid-cols-2">
        <div className="bg-[#916BBF] h-full min-h-screen hidden md:flex flex-col items-center justify-center rounded-tr-3xl">
          <div className="w-full flex items-center justify-center my-3 mb-4">
            <img className="h-[100px]" src={Logo} alt={Logo} />
          </div>
          <div>
            <img src={img1} alt={img1} />
          </div>
        </div>
       {authType === "login" ? <Login authType={handleAuthTypeLogin}/> : <Signup authType={handleAuthTypeSign} />}
      </div>
    </div>
  );
};

export default AuthUser;
