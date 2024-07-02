import React from "react";

const year = new Date().getFullYear();

const Footer = () => (
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20 font-bold">
      &copy; 2022-{year} All rights reserved by Dennis W.
      <br />
      This project was created using React & Tailwind CSS.
    </p>
  </div>
);

export default Footer;
