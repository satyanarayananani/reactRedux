import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidations } from "../utils/Validate";


const Login = () => {
  const [isSignForm, setIsSignFrom] = useState(true);
  const email =useRef(null)
  const password= useRef(null)

  const handleClick =() => {
    checkValidations(email,password)
    console.log(checkValidations(email,password))
    console.log(email.current.value)
    console.log(password.current.value)
   
  }

  const toggleData = () => {
    setIsSignFrom(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="logo"
        />
      </div>
      <form  onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
        <h1 className="front-blod text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {! isSignForm && (
         <input
          type="test"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
        )}
        <input
          ref={email}
          type="test"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
        
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleClick}>
          {isSignForm ? "Sign up" : "Sign in"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleData}>
          {isSignForm
            ? "New to NetFlix?sign up Now"
            : " Already registered ?Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
