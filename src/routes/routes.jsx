import React from "react";
import SignUp from "../pages/authentication/SignUp/signUp";
import SignIn from "../pages/authentication/SignIn/SignIn";
import ForgotPassword from "../pages/authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/authentication/ResetPassword/ResetPassword";

const routes = [
    { path: "/", component: <SignIn />, protected: false },
    { path: "/signup", component: <SignUp />, protected: false },
    { path: "/forgotpassword", component: <ForgotPassword />, protected: false },
    { path: "/resetpassword", component: <ResetPassword />, protected: false },
  ];

export { routes };
