import React from "react";

export const Navbar = () => {
  return (
    <div className=" font-inter flex justify-between px-10 py-2 border-b-[1px] border-[#2F5DC0]">
      <a className="flex items-center" href="/">
        <img src="/custokingLogo.svg" alt="logo" className="w-7 text-6" />
        CustoKing
      </a>
      <div className="flex items-center gap-2 ml-10">
        {/* <div className="flex items-center gap-2">
          <img className="w-6" src="nav/hamburger.svg" />
         <a href="/home" className="">
            <span className="text-sm">Select </span>
            <span className="text-base">Category</span>{" "}
          </a> 
        </div> */}
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="w-[600px] h-8 px-4 border-[#3A3C39] border-opacity-40 rounded-full border-[1px] "
          />
        </div>
      </div>
      <div className="flex space-x-3 items-center">
        <a href="/home">
          <img src="nav/cart.svg" />
        </a>
        <a href="/home">
          <img src="nav/profile.svg" />
        </a>
      </div>
    </div>
  );
};
