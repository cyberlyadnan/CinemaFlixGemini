import React, { useRef, useState } from "react";
import logo from "../Images/logo.png";
import background from "../Images/background.jpg"; // Ensure the path to the background image is correct
import googleicon from "../Images/google-icon.png"; // Add the path to your Google icon image
import { validateEmail, validatePassword, validateName } from "../Utils/helper";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const LoginSignUp = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSocialLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const { displayName, email, photoURL } = user;
        dispatch(addUser({ displayName, email, photoURL }));
        navigate("/browse");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleClick = () => {
    setIsSignUpForm(!isSignUpForm);
    setErrorMessage(null); // Clear error message when switching forms
  };

  const handleSubmit = async () => {
    setErrorMessage(null); // Clear previous error message

    if (
      !validateEmail(emailRef.current.value) ||
      !validatePassword(passwordRef.current.value)
    ) {
      setErrorMessage("Invalid Credentials!");
      return;
    }

    if (isSignUpForm && !validateName(nameRef.current.value)) {
      setErrorMessage("Enter Valid Credentials!");
      return;
    }

    if (isSignUpForm) {
      // Sign-up logic
      try {
        await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        console.log("User signed up successfully");
        navigate("/browse"); // Redirect to browse page after successful sign up
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      // Login logic
      // Implement login logic here
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
      }}
    >
      <div className="absolute top-0 left-0 py-4 px-[150px]">
        <Link to={"/"}> <img src={logo} className="w-[200px]" alt="Netflix Logo" /></Link>
      </div>
      <Header showNavLinks={false} showProfile={false} signInButton={false} islogOut={false} isIcon={false}/>
      <div className="bg-black w-4/12 bg-opacity-75 py-8 px-16 rounded-lg shadow-lg max-w-md mx-auto mt-8 pb-20">
        <h1 className="text-3xl font-bold mb-6">
          {isSignUpForm ? "Sign Up" : "Login"}
        </h1>
        <p className="text-red-600 py-2 text-xs">
          We are currently experiencing issues with email and password login.
          Please use social login as an alternative. We apologize for the
          inconvenience and are working to resolve the issue as soon as
          possible.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {isSignUpForm && (
            <div className="mb-4">
              <input
                ref={nameRef}
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-900 bg-opacity-50 border border-gray-600 text-white p-3 rounded"
              />
            </div>
          )}
          <div className="mb-4">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email or mobile number"
              className="w-full bg-gray-900 bg-opacity-50 border border-gray-600 text-white p-3 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="w-full bg-gray-900 bg-opacity-50 border border-gray-600 text-white p-3 rounded"
            />
          </div>
          {errorMessage && <p className="text-red-500 my-2">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 p-2 rounded font-semibold mb-4"
          >
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </button>
          <button
            type="button"
            onClick={handleSocialLogin}
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold mb-4"
          >
            <img className="w-6 h-6 mr-2" src={googleicon} alt="Google Icon" />
            Login with Google
          </button>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="rememberMe" className="text-sm cursor-pointer">
                Remember me
              </label>
            </div>
            <a href="/" className="text-sm hover:underline">
              Need help?
            </a>
          </div>
          {!isSignUpForm && (
            <div className="text-center mb-4">
              <a href="/" className="text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          )}
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm cursor-pointer" onClick={handleClick}>
            {isSignUpForm
              ? "Already have an account? Sign in now."
              : "New to Netflix? Sign up now."}
          </p>
        </div>
        <div className="mt-4 text-xs text-center">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
