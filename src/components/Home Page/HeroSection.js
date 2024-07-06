import React from "react";
import Header from "../Header";
import background from "../../Images/background.jpg";
import { auth } from "../../Utils/firebase";

const HeroSection = () => {
  const loggedIN = auth.currentUser ? true : false
  // const isLogin = true
  return (
    <div
      className="bg-cover bg-center text-white border-b-8 border-gray-700"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
      }}
    >
      <Header showNavLinks={false} showProfile={false} signInButton={!loggedIN} islogOut={loggedIN} isIcon={true}/>
      <div>
        <div className="flex flex-col justify-center text-center p-28">
          <h1 className="text-5xl font-bold m-3">
            Unlimited movies, TV shows and more
          </h1>
          <h2 className="text-2xl my-4">Watch anywhere. Cancel anytime.</h2>
          <h4 className="text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <div className="mt-4 mb-16 flex flex-col md:flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Email address"
              className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4 bg-black bg-opacity-50 border border-gray-600 text-white p-3 rounded"
            />
            <button className="w-full md:w-auto text-white px-5 py-3 bg-red-600 hover:bg-red-700 rounded font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
