import { isEmpty } from "lodash";
import Link from "next/link";
import { useState } from "react";

export default function Nav({ headerMenus, header }) {
  console.log("NAV", headerMenus);
  if (isEmpty(headerMenus)) {
    return null;
  }

  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleNavMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  //console.log("NAV COMP:", headerMenus);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleNavMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden mr-3"
                  src={header.siteLogoUrl}
                  alt="Workflow"
                  width="70px"
                  height="70px"
                />
                <img
                  className="hidden lg:block mr-3"
                  src={header.siteLogoUrl}
                  alt="Code Candy"
                  width="70px"
                  height="70px"
                />
                <div className="flex flex-col items-center">
                  <span
                    className="font-semibold text-xl tracking-tight"
                    style={{ color: "#fff" }}
                  >
                    {header.siteTitle}
                  </span>
                  <span
                    className="font-light text-sm tracking-tight"
                    style={{ color: "#fff" }}
                  >
                    {header.siteTagLine}
                  </span>
                </div>
              </div>
              <div
                className="hidden sm:block sm:ml-6"
                style={{ marginTop: "14px" }}
              >
                {headerMenus ? (
                  <div className="flex space-x-4">
                    {headerMenus.edges.map((menu) => {
                      //console.log("LOOP MENU", menu);
                      return (
                        <Link href={menu.node.path} key={menu.node.id}>
                          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {menu.node.label}
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative hidden">
                <div>
                  <button
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
        <div className={isMenuVisible ? "block" : "hidden sm:hidden"}>
          {headerMenus ? (
            <div className="px-2 pt-2 pb-3 space-y-1">
              {headerMenus.edges.map((menu) => {
                return (
                  <Link href={menu.node.path} key={menu.node.id}>
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      {menu.node.label}
                    </a>
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
