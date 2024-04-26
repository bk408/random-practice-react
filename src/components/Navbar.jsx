import { useState } from "react";



const Navbar = () => {
  const [isShow, setIsShow] = useState(false)

  const handleToggle = () => {
    setIsShow(!isShow)
  }
 
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
                className="w-6 h-6"
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
}

export default Navbar;




{
  /*"flex justify-center p-5 gap-10  " */
}