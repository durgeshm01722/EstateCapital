import React from "react";

const Footer = () => {
  return (
    <div className="h-[180px] w-[100%] relative pt-8">
      <div className="ml-8 lg:ml-20">
        <a
          className="w-fit block text-xs pb-2"
          onClick={() => document.body.scrollTop(0)}
          href="/"
        >
          Home
        </a>
        <a
          className="w-fit block text-xs pb-2"
          onClick={() => document.body.scrollTop(0)}
          href="/"
        >
          Rent
        </a>
        <a
          className="w-fit block text-xs pb-2"
          onClick={() => document.body.scrollTop(0)}
          href="/"
        >
          Manage Property
        </a>
        <a
          className="w-fit block text-xs pb-2"
          onClick={() => document.body.scrollTop(0)}
          href="/"
        >
          Resources
        </a>
      </div>
      <br />
      <center>
        <p className="text-sm">
          Copyright &copy; SuggestME 2022 | All rights reserved
        </p>
      </center>
    </div>
  );
};

export default Footer;
