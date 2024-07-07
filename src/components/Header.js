import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { demophotoURL } from "../Utils/constants";

const Header = ({
  showNavLinks,
  showProfile,
  signInButton,
  islogOut,
  isIcon,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.user);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const mediaQueryListener = () => {
      setIsMobile(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", mediaQueryListener);

    return () => {
      mediaQuery.removeEventListener("change", mediaQueryListener);
    };
  }, []);

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
      } else {
        
        dispatch(removeUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate]);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const toggleNavDropdown = () => {
    setNavDropdownOpen(!navDropdownOpen);
  };

  return (
    <>
      {isIcon && (
        <div className="flex items-center justify-between py-3 px-4 sm:px-40 bg-gradient-to-b from-black via-black to-transparent z-20 absolute w-screen">
          <Link to="/">
            <img
              src={logo}
              alt="Netflix Logo"
              className="w-36 lg:w-[200px] h-auto sm:w-36 sm:h-auto"
              style={{ filter: "drop-shadow(0 0 0.90rem black)" }}
            />
          </Link>
          <div className="flex items-center space-x-4 relative">
            {showNavLinks &&
              location.pathname === "/browse" &&
              (isMobile ? (
                <div className="relative">
                  <button
                    onClick={toggleNavDropdown}
                    className="text-black font-bold hover:text-red-900 focus:outline-none bg-red-600 p-3 rounded-lg"
                  >
                    {navDropdownOpen ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </button>
                  {navDropdownOpen && (
                    <div className="absolute top-full right-0 bg-gray-900 text-white shadow-lg rounded-md mt-2 py-2 px-3 z-50">
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/"
                            className="hover:bg-gray-500 block py-3 px-4 rounded-md "
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tv-shows"
                            className="hover:bg-gray-700 block py-2 px-4 rounded-md"
                          >
                            TV Shows
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/movies"
                            className="hover:bg-gray-700 block py-2 px-4 rounded-md"
                          >
                            Movies
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/my-list"
                            className="hover:bg-gray-700 block py-2 px-4 rounded-md"
                          >
                            My List
                          </Link>
                        </li>
                        
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <ul className="flex space-x-4 text-white">
                    <li>
                      <Link to="/" className="hover:bg-gray-800 block py-3 px-3 rounded-md">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/tv-shows" className="hover:bg-gray-800 block py-3 px-3 rounded-md">
                        TV Shows
                      </Link>
                    </li>
                    <li>
                      <Link to="/movies" className="hover:bg-gray-800 block py-3 px-3 rounded-md">
                        Movies
                      </Link>
                    </li>
                    <li>
                      <Link to="/new-popular" className="hover:bg-gray-800 block py-3 px-3 rounded-md">
                        New & Popular
                      </Link>
                    </li>
                    <li>
                      <Link to="/my-list" className="hover:bg-gray-800 block py-3 px-3 rounded-md">
                        My List
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            {store?.email
              ? showProfile && (
                  <div className="relative">
                    <button
                      onClick={toggleProfileDropdown}
                      className="flex items-center space-x-2 focus:outline-none"
                    >
                      <img
                        src={store.photoURL || demophotoURL}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <i className="fas fa-caret-down text-white"></i>
                    </button>
                    {profileDropdownOpen && (
                      <div className="absolute top-full right-0 bg-gray-800 text-white shadow-lg rounded-md mt-2 py-2 px-4 z-50">
                        <ul className="space-y-2">
                          <li>
                            <button
                              onClick={handleSignOut}
                              className="hover:bg-gray-700 block py-2 px-4 rounded-md w-full text-left"
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )
              : signInButton && (
                  <div>
                    <Link
                      to="/login"
                      className="w-20 text-white px-5 bg-red-600 hover:bg-red-700 py-1 rounded font-semibold"
                    >
                      Sign In
                    </Link>
                  </div>
                )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
