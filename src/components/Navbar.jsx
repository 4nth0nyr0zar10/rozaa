import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(1); // Example count
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Disable right click and text selection
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    document.body.style.userSelect = "none";

    // Scroll background handler
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.userSelect = "auto";
    };
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "New Collection", path: "/new" },
    { label: "Men's", path: "/mens" },
    { label: "Women's", path: "/womens" },
    { label: "Kids", path: "/kids" },
  ];

  const suggestions = [
    "Red Dress",
    "Black Sneakers",
    "Winter Jacket",
    "Kids Hoodie",
    "Men’s Sunglasses",
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`sticky z-50 top-0 w-full bg-slate-100 ${
        isScrolled ? "border-b" : "border-none"
      } border-gray-700 shadow`}
    >
      <div className="flex justify-between items-center px-6 pt-6 pb-1">
        {/* Search Bar */}
        {isSearching ? (
          <div className="flex flex-col w-full gap-6">
            <div className="flex items-center gap-2 p-2 justify-center">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="text-xl px-4 py-2 border w-full border-gray-400 rounded-lg shadow cursor-none focus:outline-none focus:ring focus:border-yellow-500"
              />
              <a className=" text-3xl font-bold px-2 text-center" onClick={() => setIsSearching(!isSearching)}>
                ✕
              </a>
            </div>
            <div className="mt-2 bg-white border rounded shadow max-h-40 overflow-auto">
              {suggestions
                .filter((item) =>
                  item.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-yellow-100 "
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setIsSearching(false);
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <>
            <Link to="/" className="flex items-center gap-2">
             {/* <img src="/logo.png" alt="logo" className="h-8 object-contain" /> */}
              <span className="text-3xl font-bold bg-gradient-to-t from-yellow-700 via-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                ROZAA
              </span>
            </Link>

            {/* Nav Links */}
            <div className="flex gap-6 text-lg cursor-none font-medium text-gray-700 font-sans">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`hover:text-yellow-600 ${
                    isActive(item.path)
                      ? "text-yellow-700 underline underline-offset-4"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6 relative">
              {/* Search Icon */}
              <a className="" title="Search" onClick={() => setIsSearching(!isSearching)}>
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                      className="stroke-gray-800"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </a>

              {/* Cart Icon */}
              <a title="Cart" className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M16.5285 6C16.5098 5.9193 16.4904 5.83842 16.4701 5.75746C16.2061 4.70138 15.7904 3.55383 15.1125 2.65C14.4135 1.71802 13.3929 1 12 1C10.6071 1 9.58648 1.71802 8.88749 2.65C8.20962 3.55383 7.79387 4.70138 7.52985 5.75747C7.50961 5.83842 7.49016 5.9193 7.47145 6H5.8711C4.29171 6 2.98281 7.22455 2.87775 8.80044L2.14441 19.8004C2.02898 21.532 3.40238 23 5.13777 23H18.8622C20.5976 23 21.971 21.532 21.8556 19.8004L21.1222 8.80044C21.0172 7.22455 19.7083 6 18.1289 6H16.5285ZM8 11C8.57298 11 8.99806 10.5684 9.00001 9.99817C9.00016 9.97438 9.00044 9.9506 9.00084 9.92682C9.00172 9.87413 9.00351 9.79455 9.00718 9.69194C9.01451 9.48652 9.0293 9.18999 9.05905 8.83304C9.08015 8.57976 9.10858 8.29862 9.14674 8H14.8533C14.8914 8.29862 14.9198 8.57976 14.941 8.83305C14.9707 9.18999 14.9855 9.48652 14.9928 9.69194C14.9965 9.79455 14.9983 9.87413 14.9992 9.92682C14.9996 9.95134 14.9999 9.97587 15 10.0004C15 10.0004 15 11 16 11C17 11 17 9.99866 17 9.99866C16.9999 9.9636 16.9995 9.92854 16.9989 9.89349C16.9978 9.829 16.9957 9.7367 16.9915 9.62056C16.9833 9.38848 16.9668 9.06001 16.934 8.66695C16.917 8.46202 16.8953 8.23812 16.8679 8H18.1289C18.6554 8 19.0917 8.40818 19.1267 8.93348L19.86 19.9335C19.8985 20.5107 19.4407 21 18.8622 21H5.13777C4.55931 21 4.10151 20.5107 4.13998 19.9335L4.87332 8.93348C4.90834 8.40818 5.34464 8 5.8711 8H7.13208C7.10465 8.23812 7.08303 8.46202 7.06595 8.66696C7.0332 9.06001 7.01674 9.38848 7.00845 9.62056C7.0043 9.7367 7.00219 9.829 7.00112 9.89349C7.00054 9.92785 7.00011 9.96221 7 9.99658C6.99924 10.5672 7.42833 11 8 11ZM9.53352 6H14.4665C14.2353 5.15322 13.921 4.39466 13.5125 3.85C13.0865 3.28198 12.6071 3 12 3C11.3929 3 10.9135 3.28198 10.4875 3.85C10.079 4.39466 9.76472 5.15322 9.53352 6Z"
                      className="fill-gray-800"
                    ></path>
                  </g>
                </svg>

                {cartCount > 0 && (
                  <span className="absolute -top-1 text-center items-center justify-center -right-1 bg-yellow-600 text-white text-xs font-bold px-1 rounded-full">
                    {cartCount}
                  </span>
                )}
              </a>
              {/* User Icon */}
              <a
                title="User"
                className="relative bg-white rounded-full shadow-md hover:shadow-lg transition duration-300"
              >
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle
                      cx="12"
                      cy="9"
                      r="3"
                      stroke="#000000"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
