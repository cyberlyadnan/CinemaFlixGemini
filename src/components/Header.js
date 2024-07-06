import React, { useEffect } from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { demophotoURL } from "../Utils/constants";

const Header = ({ showNavLinks, showProfile, signInButton, islogOut, isIcon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("SignOut Error", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        dispatch(addUser({ displayName, email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <>
      {isIcon && (
        <div className="flex items-center justify-between py-7 px-40 bg-gradient-to-b from-black via-black to-transparent z-20 absolute w-screen">
          <Link to="/">
            <img
              src={logo}
              alt="Netflix Logo"
              className="w-36 h-auto"
              style={{ filter: "drop-shadow(0 0 0.90rem black)" }}
            />
          </Link>
          <div className="flex items-center space-x-4">
            {showNavLinks && (
              <div className="mx-4">
                <ul className="flex space-x-4 text-white">
                  <Link to="/">
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                  </Link>
                  <Link to="/">
                    <li className="hover:text-gray-400 cursor-pointer">TV Shows</li>
                  </Link>
                  <Link to="/">
                    <li className="hover:text-gray-400 cursor-pointer">Movies</li>
                  </Link>
                  <Link to="/">
                    <li className="hover:text-gray-400 cursor-pointer">New & Popular</li>
                  </Link>
                  <Link to="/">
                    <li className="hover:text-gray-400 cursor-pointer">My List</li>
                  </Link>
                </ul>
              </div>
            )}
            {showProfile && (
              <div className="mx-8 flex items-center space-x-2">
                <img
                  src={store ? store.photoURL : demophotoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <i className="fas fa-caret-down"></i>
              </div>
            )}
            {signInButton && (
              <div>
                <Link
                  to="/login"
                  className="w-20 text-white px-5 bg-red-600 hover:bg-red-700 py-1 rounded font-semibold"
                >
                  Sign In
                </Link>
              </div>
            )}
            {islogOut && (
              <div>
                <button
                  onClick={handleSignOut}
                  className="text-white px-5 bg-red-600 hover:bg-red-700 py-1 rounded font-semibold"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {!isIcon && <div></div>}
    </>
  );
};

export default Header;
