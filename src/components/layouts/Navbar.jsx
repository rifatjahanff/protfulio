import React from "react";
import Container from "../Container";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <Container>
        <div className="navbar  text-white shadow-sm pt-[50px]">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-pink-300 text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
               <li className="hover:text-red-500">
                <a>Home</a>
              </li>
              <li className="hover:text-red-500">
                <a>Service</a>
              </li>
              <li className="hover:text-red-500">
                <a>Portfolio</a>
              </li>
              <li className="hover:text-red-500">
                <a>My Skills</a>
              </li>
              <li className="hover:text-red-500">
                <a>Clients</a>
              </li>
              <li className="hover:text-red-500">
                <a>Contact</a>
              </li>
              </ul>
            </div>
            <div className="w-[100px] h-[80px] ">
              {" "}
              
              <img src={Logo} alt={Logo} className="w-full " />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[25px]">
              <li className="hover:text-red-500">
                <a>Home</a>
              </li>
              <li className="hover:text-red-500">
                <a>Service</a>
              </li>
              <li className="hover:text-red-500">
                <a>Portfolio</a>
              </li>
              <li className="hover:text-red-500">
                <a>My Skills</a>
              </li>
              <li className="hover:text-red-500">
                <a>Clients</a>
              </li>
              <li className="hover:text-red-500">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a href="https://wa.me/+8801955070835" target="_blank"
  rel="noopener noreferrer" className="btn bg-transparent text-white text-[25px] hover:text-red-500 hover:bg-white rounded-4xl mt-[10px]">
            Hire me</a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
