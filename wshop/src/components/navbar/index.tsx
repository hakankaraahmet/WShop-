import React from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const routes = [
    "home",
    "pages",
    "products",
    "shop",
    "cart",
    "contact",
    "about",
  ];
  return (
    <div className=" h-20  border-b-2 border-black">
      <div className=" h-full flex container mx-auto items-center relative">
        <h1 className="text-3xl font-bold mr-20">Wshop</h1>
        <div className="flex gap-x-9">
          {routes.map((item: string) => (
            <nav
              className="cursor-pointer hover:text-pink-600 capitalize"
              onClick={() => navigate(item !== "home" ? item : "/")}
            >
              {item}
            </nav>
          ))}
        </div>
        <div className="absolute right-0 flex">
          <input
            type="text"
            placeholder="search"
            className="outline-none border-gray-300 border-2 py-1 px-3"
          />
          <div className="flex items-center justify-center h-10 w-10 bg-pink-600">
            <FiSearch color="#fff" size="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
