import { useState } from "react";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  const handleBtn = () => {
    setIsDark(!isDark);
    if (isDark) {
        document.body.classList.add("bg-black");
        document.body.classList.remove("bg-white");
     
    } else {
       document.body.classList.add("bg-white");
       document.body.classList.remove("bg-black");
    }
  };

  return (
    <div className="bg-blue-300 text-black">
      <nav className="flex justify-between  items-center px-4 md:px-8 ">
        <div className="flex items-center">
          <div className="md:hidden">
            <button onClick={handleToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <button onClick={handleBtn} className="cursor-pointer">
            {" "}
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`md:flex md:flex-row flex-col justify-center p-5 gap-10 ${
            isShow ? "block" : "hidden"
          } `}
        >
          <li className="hover:text-yellow-800 font-medium hover:underline cursor-pointer">
            Home
          </li>
          <li className="hover:text-yellow-800 font-medium hover:underline cursor-pointer">
            About
          </li>
          <li className="hover:text-yellow-800 font-medium hover:underline cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

{
  /*"flex justify-center p-5 gap-10  " */
}
