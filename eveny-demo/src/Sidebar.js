import React, { useState,useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleRight, faArrowRight, faBars, faBookBookmark, faEnvelope, faHamburger, faMagnifyingGlass, faMessage, faPeopleGroup, faRightFromBracket, faTimes, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from "./Navbar";
import './profile.css'


library.add(faPeopleGroup,faMagnifyingGlass,faBookBookmark,faUserPlus,faMessage,faUser,faEnvelope,faRightFromBracket,faArrowRight,faTimes, faBars);

function Sidebar() {
  const [imageSrc, setImageSrc] = useState("");

  const [activeLink, setActiveLink] = useState("biography");
  const [image, setImage] = useState(
    "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
  );

  

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      localStorage.setItem("image",reader.result);
    };
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("image");
    if (storedImage) {
      setImageSrc(storedImage);
    }
  }, []);



  const handleClick = (link) => {
    setActiveLink(link);
  };

  
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem('sidebarOpen') === 'true'
  );

  function toggleSidebar() {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem('sidebarOpen', newState);
  }

  
  
  return (
    <div>
      <div className="flex flex-row bg-gray-100">
        <section className={`sidebar-left ${isOpen ? "w-56" : "w-0"}`}>
        <div className="flex min-h-screen flex-row relative z-10">
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
                  
                    
                    <FontAwesomeIcon icon="people-group"   />
                
                  <span className="text-sm font-medium">My Events</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                 <FontAwesomeIcon icon="magnifying-glass"   />
                  <span className="text-sm font-medium">Discover Events</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <FontAwesomeIcon icon="book-bookmark"   />
                  <span className="text-sm font-medium">Saved Events</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <FontAwesomeIcon icon="user-plus"   />
                  <span className="text-sm font-medium">Friend Requests</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <FontAwesomeIcon icon="message"   />
                  <span className="text-sm font-medium">Chat</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <FontAwesomeIcon icon="user"   />
                  <span className="text-sm font-medium">Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-12 transform flex-row items-center gap-2 text-gray-500 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex h-12 w-9 items-center justify-center text-lg text-gray-400"></span>
                  <FontAwesomeIcon icon="envelope"   />
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
                  <FontAwesomeIcon icon="right-from-bracket"   />
                  <span className="text-sm font-medium">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="relative cursor-pointer" onClick={toggleSidebar}>
  <div className="absolute rounded-full rounded-l-none h-12 w-8 flex items-center top-1 justify-center">
      <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
  

</div>


      <Navbar imageSrc={image} />



      
      
    </div>

     {/* main section */}

<div className="relative cursor bottom-[530px] ml-4 flex items-center z-1">
<img
  className="h-16 w-16 rounded-full"
  src={image}
  alt=""
/>
<div className=" ml-3 font-medium whitespace-nowrap dark:text-black">
  <span className="">Mario Rossi</span>
  <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
    <i className="fa-solid fa-location-dot mr-1"></i>
    Sicilia,AG
  </div>
</div>
<button
        type="button"
        className="w-[80px] flex flex-row ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-0 focus:ring-black font-medium rounded-full text-sm pl-2 pr-5 py-2.5 text-center mt-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          document.getElementById("fileInput").click();
        }}
      >
        <i className="fa-solid fa-pen mt-[3px] mr-1"></i>Modifica
      </button>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />

<button type="button" className="w-[80px] flex flex-row  text-black bg-slate-300 hover:bg-white hover:text-black focus:outline-none focus:ring-0 focus:ring-blue-300 font-medium rounded-full text-sm pl-[14px] mt-2  pr-5 py-2.5 text-center mr-2 mb-2 dark:bg-slate-400 dark:hover:bg-white dark:text-black dark:focus:ring-blue-800"><i class="fa-solid fa-circle-plus mr-1 mt-[2.9px]"></i>Evento</button>

</div>

<div className="flex flex-row relative bottom-[480px] left-[60px] gap-2 text-sm">
 
 <div className="flex flex-col justify-center mr-3 cursor-pointer">
 <span className="relative top-[5px] ml-3">889</span> 
 <span>Follower</span> 
 </div>

 <div className="bg-blue-500 w-[2px] h-5 mt-3 mr-3"></div>
 
 <div className="flex flex-col justify-center cursor-pointer">
 <span className=" relative top-[5px] ml-4">512</span> 
 <span>Following</span> 
 </div>

 <div className="bg-blue-500 w-[2px] h-5 mt-3 ml-2 mr-3"></div>
 
 <div className="flex flex-col justify-center cursor-pointer">
 <span className=" relative top-[5px] ml-3">64</span> 
 <span>Photos</span> 
 </div>

</div>










</div>


  );
}

export default Sidebar;