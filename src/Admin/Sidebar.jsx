import { Avatar, Dropdown } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ setLogin }) => {
  const active = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#dbeafe" : "",
      borderRight: isActive ? "3px solid blue" : "",
      color: isActive ? "#3b82f6" : "",
    };
  };
  const handleLogout = () => {
    setLogin(false);
  };

  const headerMenu = [
    {
      key: "1",
      label: (
        <div className="flex">
          <p className="ml-2 text-sm font-normal text-[#000000E0]/[88%]">
            Profile
          </p>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex">
          <p className="ml-2 text-sm font-normal text-[#000000E0]/[88%]">
            Logout
          </p>
        </div>
      ),
    },
    {
      type: "divider",
    },
  ];
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <NavLink to="" className="flex ml-2 md:mr-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  E-shop
                </span>
              </NavLink>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <Dropdown menu={{ items: headerMenu }}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="self-center"
                    >
                      <div className="flex mr-5">
                        <Avatar
                          className="self-center"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        />
                      </div>
                    </a>
                  </Dropdown>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>

                  <ul className="py-1" role="none">
                    <li>
                      <NavLink
                        to=""
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to=""
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to=""
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to=""
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full  pb-4 overflow-y-auto bg-white dark:bg-gray-800 ">
          <ul className="space-y-1 font-medium uppercase ">
            <li>
              <NavLink
                to="/admin/dashboard"
                style={active}
                className="flex items-center p-3 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-r-blue-600 hover:border-r-[3px]  "
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6  transition duration-75 hover:text-[#3b82f6]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>

                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/viewuser"
                style={active}
                className="flex items-center p-3 text-gray-900  dark:text-white hover:bg-[#dbeafe] hover:text-[#3b82f6] dark:hover:bg-gray-700 hover:border-r-blue-600 hover:border-r-[3px]"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/viewproduct"
                style={active}
                className="flex items-center p-3 text-gray-900  dark:text-white hover:bg-[#dbeafe] hover:text-[#3b82f6] dark:hover:bg-gray-700 hover:border-r-blue-600 hover:border-r-[3px]"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 hover:text-[#3b82f6] dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/viewcategory"
                style={active}
                className="flex items-center p-3 text-gray-900  dark:text-white  dark:hover:bg-gray-700 hover:bg-[#dbeafe] hover:text-[#3b82f6]
                hover:border-r-blue-600 hover:border-r-[3px]"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">CATEGORY</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/vierorder"
                style={active}
                className="flex items-center p-3 text-gray-900  dark:text-white hover:border-r-blue-600 hover:border-r-[3px]
                hover:bg-[#dbeafe] hover:text-[#3b82f6] dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">ORDER</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/logout"
                style={active}
                onClick={handleLogout}
                className="flex items-center p-3 text-gray-900  dark:text-white hover:bg-[#dbeafe] hover:text-[#3b82f6] hover:border-r-blue-600 hover:border-r-[3px] dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
