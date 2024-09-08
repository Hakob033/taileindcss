import React from "react";
import svg from "../assets/icones/Categories.svg";

export default function Header() {
  return (
    <div className="bg-white py-4 flex justify-center">
      <div className="flex items-center justify-between w-3/4">
        <div>
          <img
            src="https://www.list.am/img/redesign/logo.svg"
            alt="Logo"
            className="w-[91px] h-[40px] mr-5"
          />
        </div>
        <div className="flex items-center text-gray-800 font-bold">
          <svg alt="Icon" className="w-6 h-6 mr-2" />
          <span className="text-base font-medium leading-6">Բաժիններ</span>
        </div>
        <form className="flex-grow mx-5">
          <input
            type="text"
            className="w-full p-2 px-4 border border-gray-300 rounded-lg text-base bg-gray-100 outline-none"
            placeholder="Search..."
          />
        </form>
        <div className="flex items-center">
          <span className="text-lg text-gray-600 mr-5">Իմ էջը</span>
          <button className="bg-blue-500 text-white py-2 px-5 rounded-full text-base hover:bg-blue-700 transition-colors duration-300">
            Տեղադրել հայտարարություն
          </button>
        </div>
      </div>
    </div>
  );
}
