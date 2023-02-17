import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-row bg-gray-100">
      <section className="sidebar-left">
        <div className="flex min-h-screen flex-row">
          <div className="flex w-56 flex-col overflow-hidden rounded-r-3xl bg-white">
            <div className="flex h-20 items-center justify-center shadow-md">
              <a href="https://mariowebcs.github.io/Develhope-Progetto-Finale/Eveny/src/index.html">
                <img
                  className="mx-4 mt-2 rounded-full bg-[#1c1d33] p-2"
                  width="50"
                  src="assets/images/eveny-logo-new.svg"
                  alt="logo about users"
                />
              </a>
              <h1 className="text-3xl uppercase text-black">Eveny</h1>
            </div>
            <ul className="flex flex-col py-4">
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <i
                    className="fa-solid fa-people-group text-sm text-[#171717]"
                   
                  ></i>
                  <span className="text-sm font-medium">My Events</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <i
                    className="fa-solid fa-magnifying-glass text-sm text-[#171717]"
                    
                  ></i>
                  <span className="text-sm font-medium">Discover Events</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <i
                    className="fa-regular fa-bookmark text-sm text-[#171717]"
                   
                  ></i>
                  <span className="text-sm font-medium">Saved Events</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <i
                    className="fa-solid fa-user-plus text-sm text-[#171717]"
                   
                  ></i>
                  <span className="text-sm font-medium">Friend Requests</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <i
                    className="fa-regular fa-message text-sm text-[#171717]"
                    
                  ></i>
                  <span className="text-sm font-medium">Chat</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <i
                    className="fa-regular fa-user text-sm text-[#171717]"
                   
                  ></i>
                  <span className="text-sm font-medium">Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <i
                    className="fa-regular fa-envelope text-sm text-[#171717]"
                   
                  ></i>
                  <span className="text-sm font-medium">Notifications</span>
                  <span className="ml-auto mr-6 rounded-full bg-red-100 px-3 py-px text-sm text-red-500">
                    5
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <i
                    className="fa-solid fa-right-from-bracket text-sm text-[#171717]"
                   
                  ></i>
                  <span className="text-sm font-medium">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
