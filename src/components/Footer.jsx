import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div
        name="contact"
        className="w-full flex flex-col justify-between text-center bg-zinc-800 text-white"
      >
        <div className="grid md:grid-cols-2 max-w-[1240px] py-2">
          <div>
            <p className="text-2xl font-bold">Address</p>
            <p className="text-sm leading-6 p-2">
              <p>Unbound Solutions Inc.</p>
              <p>2808 Livsey Oaks Dr Tucker GA 30084</p>
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">Contact</p>
            <p className="text-sm leading-6 p-2">
              <p>VIDYA IYER</p>
              <p>v.iyer@unboundsolutions.net</p>
              <p>Phone number: +1 [704] 340 2231</p>
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <AiFillFacebook size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <AiFillLinkedin size={30} />
            </a>
          </div>
          <p className="text-sm">
            All rights reserved. &copy; Unbound solutions {currentYear}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
