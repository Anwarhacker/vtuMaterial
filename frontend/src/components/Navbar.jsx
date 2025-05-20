// src/components/Navbar.jsx
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getUser, logout } from "../auth";
import { useState } from "react";
import logo from "../assets/vtu-material-logo.png";
import logo1 from "../assets/logo.png";

const Navbar = () => {
  const user = getUser();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link to="/" className="flex items-center">
            <img
              src={logo1}
              alt="VTU Material"
              className="h-22 w-auto transform transition-transform duration-300 hover:scale-110 hover:rotate-4"
            />
          </Link>

          {/* Hamburger menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white bg-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-black hover:text-gray-200"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-black hover:text-gray-200"
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/syllabus"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-black hover:text-gray-200"
              }
            >
              SYLLABUS
            </NavLink>
            <NavLink
              to="/results"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-black hover:text-gray-200"
              }
            >
              RESULTS
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-black hover:text-gray-200"
              }
            >
              PROJECTS
            </NavLink>

            {user ? (
              <>
                {user.role === "admin" && (
                  <Link to="/admin" className="text-black hover:text-gray-200">
                    ADMIN
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-gray-100 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="ml-4 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden pb-4 `}>
          <div className="flex flex-col  gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-600 bg-gray-50" : "text-black"
                } px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-600 bg-gray-50" : "text-black"
                } px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white`
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/syllabus"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-600 bg-gray-50" : "text-black"
                } px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white`
              }
            >
              SYLLABUS
            </NavLink>
            <NavLink
              to="/results"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-600 bg-gray-50" : "text-black"
                } px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white`
              }
            >
              RESULTS
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-600 bg-gray-50" : "text-black"
                } px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white`
              }
            >
              PROJECTS
            </NavLink>

            {user ? (
              <>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="text-white hover:bg-blue-600 px-3 py-2 rounded-md"
                  >
                    ADMIN
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 px-3 py-2 rounded-md hover:bg-red-700 mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-blue-600 bg-white px-3 py-2 rounded-md hover:bg-gray-100 mt-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
