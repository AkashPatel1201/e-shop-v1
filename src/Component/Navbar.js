import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Dropdown } from "antd";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  const headerMenu = [
    {
      key: "1",
      label: (
        <NavLink className="block font-thin text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          MOBILE
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink className="block font-thin text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          MOUSE
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink className="block font-thin text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          LEPTOP
        </NavLink>
      ),
    },
  ];
  return (
    <nav className=" border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="md:mx-container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink className="space-x-3 rtl:space-x-reverse border-2  border-gray-800">
          <div className="flex p-1">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              E-Shop
            </span>
          </div>
        </NavLink>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-dropdown"
          onClick={handleDropDown}
        >
          <ul className="flex flex-col font-medium p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 font-thin text-sm text-white bg-red-500 rounded md:bg-transparent md:text-red-500 md:p-0 md:dark:text-red-500"
                aria-current="page"
              >
                HOME
              </NavLink>
            </li>
            <Dropdown menu={{ items: headerMenu }}>
              <div className="rounded-lg text-sm font-thin' text-center items-center dark:bg-gray-500 hover:text-red-500 cursor-pointer">
                SHOP
              </div>
            </Dropdown>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 font-thin text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink className="block py-2 px-3 font-thin text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">
                EXTRA
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 font-thin text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex space-x-2 text-gray-500">
          <NavLink className="">
            <Search />{" "}
          </NavLink>
          <NavLink className="px-3">
            <FavoriteBorderIcon />
          </NavLink>
          <NavLink className="">
            <LocalGroceryStoreIcon />
          </NavLink>
          {/* <NavLink to="/admin" className="">Login Admin</NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
