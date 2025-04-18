import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const [showTheme, setShowTheme] = useState(true);
  const CurrentPath = location.pathname;
  useEffect(() => {
    if (CurrentPath === "/") {
      setShowTheme(false);
    } else {
      setShowTheme(true);
    }
  }, [CurrentPath]);

  const isActive=(e)=>location.pathname === e;

  const isDoc = () => location.pathname.includes("docs");
  const isApi = () => location.pathname.includes("api");


  return (
    <div className="flex justify-between items-center z-10 px-10 sticky h-18 ">
      <div className="Logo-container justify-start items-center flex w-56 ">
        <img src="/logo.jpg" alt="" className="object-contain max-h-12" />
      </div>

      <div className=" flex text-slate-700 justify-between gap-10 min-w-96 px-10 p-2 shadow-md shadow-slate-200 rounded-b-lg bg-slate-50">
        <Link
          to="/"
          className={`hover:text-pink-800 ${
            isActive("/") && "text-pink-700"
          } `}
        >
          <i className="pi pi-home text-xl w-full text-center" />{" "}
          <p className="text-sm font-semibold tracking-wider">Home</p>
        </Link>
        <Link to="/docs" className={`hover:text-pink-800 ${isDoc() && "text-pink-700"}`}>
          <i className="pi pi-book text-xl w-full text-center" />{" "}
          <p className="text-sm font-semibold tracking-wider">Docs</p>
        </Link>
        <Link to="/api" className={`hover:text-pink-800 ${isApi() && "text-pink-700"}`}>
          <i className="pi pi-arrow-right-arrow-left text-xl w-full text-center" />
          <p className="text-sm font-semibold tracking-wider">API's</p>
        </Link>
      </div>

      <div className="flex items-center justify-end gap-4 h-full w-56">
        {showTheme && (
          <label className="swap swap-rotate rounded-full p-[2px] ">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="dark" />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        )}
        <a
          href="https://github.com/kraftamine/Fake-API.git"
          className="pi pi-github text-3xl"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default Navbar;