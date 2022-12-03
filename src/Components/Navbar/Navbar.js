import React from "react";

const Navbar = () => {
  return (
    <div className="h-[310px] lg:h-[80px] w-[100%] z-10 relative shadow-lg lg:pl-16 flex flex-col lg:flex-row items-center">
      <div
        id="logo"
        className="absolute left-[5%] lg:left-[5%] lg:top-[20%] top-[5%] w-fit h-[50px] flex flex-row justify-center items-center"
      >
        <a className="inline" href="/">
          <button>
            <img
              src={require("../../Images/logo/logo.png")}
              alt="logo"
              className="w-[40px] h-[40px] mr-4"
            ></img>
          </button>
        </a>
        <a className="inline" href="/">
          <button style={{ cursor: "pointer" }}>
            <b className="text-[18px] text-gray-800">EstateCapital</b>
          </button>
        </a>
      </div>
      <ul
        id="navItems"
        className="flex flex-col lg:flex-row justify-center items-center mt-[18%] lg:mt-0 lg:absolute lg:left-[20%]"
      >
        <li className="px-6 text-[14px] h-[40px] flex flex-row justify-center items-center rounded hover:bg-violet-200">
          <a href="/">Home</a>
        </li>
        <li className="px-6 text-[14px] h-[40px] flex flex-row justify-center items-center rounded hover:bg-violet-200">
          <a href="/">Buy</a>
        </li>
        <li className="px-6 text-[14px] h-[40px] flex flex-row justify-center items-center rounded hover:bg-violet-200">
          <a href="/">Sell</a>
        </li>
        <li className="px-6 text-[14px] bg-violet-200 rounded text-violet-600 h-[40px] lg:w-[100px] flex flex-row justify-center items-center">
          <a href="/" className="bg-violet-200">
            Rent
          </a>
        </li>
        <li className="px-6 text-[14px] h-[40px] flex flex-row justify-center items-center rounded hover:bg-violet-200">
          <a href="/">Manage Property</a>
        </li>
        <li className="px-6 text-[14px] h-[40px] flex flex-row justify-center items-center rounded hover:bg-violet-200">
          <a href="/">Resources</a>
        </li>
      </ul>
      <div
        id="logo"
        className="absolute right-[3%] lg:right-[5%] lg:top-[20%] top-[5%] w-fit h-[50px] flex flex-row justify-center items-center"
      >
        <button className="lg:w-[90px] w-[60px] h-[35px] lg:h-[40px] mr-2 lg:mr-2 text-violet-600 text-sm lg:text-md rounded bg-white border-[1px] border-gray-300 hover:border-violet-600">
          Login
        </button>
        <button className="lg:w-[100px] w-[60px] h-[35px] lg:h-[40px] text-white text-sm lg:text-md rounded bg-violet-600 border-[1px] border-gray-300 hover:bg-violet-500">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
