// eslint-disable-next-line no-unused-vars
import React,{ useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

  //create state constants that are used to show log in form
  //conditionally render login form
  //pass down states as props
const Auth = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  
  return (
   

        <>
        {showLoginForm ? <Login setShowLoginForm={setShowLoginForm} /> : <SignUp setShowLoginForm={setShowLoginForm} />}
        </>
        
        
     
  );
};

export default Auth;
