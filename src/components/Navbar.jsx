import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { GrServices } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <>
      <div className="w-screen h-[60px] z-10 bg-zinc-50 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex justify-between items-center">
            {/* <GrServices size={30} /> */}
            {/* <img src={logo} alt="logo" /> */}
            <p className="uppercase font-bold">Unbound Solutions Inc.</p>
            <ul className="hidden uppercase md:flex md:px-20">
              <li className="p-4">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="p-4">
                <Link to="about" smooth={true} offset={-75} duration={500}>
                  About
                </Link>
              </li>
              <li className="p-4">
                <Link to="team" smooth={true} offset={-75} duration={500}>
                  Team
                </Link>
              </li>
              <li className="p-4">
                <Link to="careers" smooth={true} offset={-100} duration={500}>
                  Careers
                </Link>
              </li>
              <li className="p-4">
                <Link to="contact" smooth={true} offset={-50} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? (
              <RxHamburgerMenu size={30} />
            ) : (
              <AiOutlineClose size={30} />
            )}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-zinc-300 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full p-4">
            <Link onClick={handleClose} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full p-4">
            <Link
              onClick={handleClose}
              to="about"
              smooth={true}
              offset={-200}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full p-4 offset={-50}">
            <Link
              onClick={handleClose}
              to="services"
              smooth={true}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full p-4 offset={-100}">
            <Link
              onClick={handleClose}
              to="careers"
              smooth={true}
              duration={500}
            >
              Careers
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full p-4 offset={-50}">
            <Link
              onClick={handleClose}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
