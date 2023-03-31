import React, { useState, useEffect, useRef } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCalendarAlt, faTimes, faBars, faUsers, faCog, faQuestionCircle, faBirthdayCake, faRunning, faClipboard, faClipboardList, faUserPlus, faUserCog, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchBar } from "./Searchbar";
import './sidebar.css'

library.add(faSearch, faCalendarAlt, faTimes, faBars, faUsers, faCog, faQuestionCircle, faBirthdayCake, faRunning, faClipboardList, faUserPlus, faUserCog, faCircle);

function NavbarCalendar ()  {
  const [isSticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false);

  
  const sidebarRef = useRef(null);

  function handleSearchClick(event) {
    event.preventDefault(); 
    setShowSearchBar(!showSearchBar);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutsideMenu);
    document.addEventListener("click", handleClickOutsideSidebar);
    const showSidebarLocalStorage = localStorage.getItem('showSidebar');
    if (showSidebarLocalStorage !== null) {
      setShowSidebar(JSON.parse(showSidebarLocalStorage));
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutsideMenu);
      document.removeEventListener("click", handleClickOutsideSidebar);
    };
  }, []);
  
  useEffect(() => {
    // Set the value of the 'showSidebar' key in local storage when the sidebar is closed
    localStorage.setItem('showSidebar', JSON.stringify(showSidebar));
  }, [showSidebar]);
  

const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleMenuToggle = () => {
    setShowSidebar(!showSidebar);
  
    const mainContent = document.querySelector("main");
  
    if (!showSidebar) {
      document.body.classList.add("sidebar-opened");
      mainContent.classList.add("blur");
    } else {
      document.body.classList.remove("sidebar-opened");
      mainContent.classList.remove("blur");
    }
  };
  
  
  const handleCloseSidebar = () => {
    setShowSidebar(false);
    document.body.classList.remove('sidebar-opened');
    
  };

  const handleClickCircle = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  const handleClickOutsideMenu = (event) => {
    if (showMenu && !event.target.closest(".circle-menu")) {
      setShowMenu(false);
    }
  };


  const handleClickOutsideSidebar = (event) => {
    const sidebarBtn = document.getElementById("sidebar-btn");
    if (
      showSidebar &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      event.target !== sidebarBtn &&
      !sidebarBtn.contains(event.target)
    ) {
      setShowSidebar(false);
      document.body.classList.remove("sidebar-opened");
    }
  };
  
  
  return 
 

}

export default NavbarCalendar;



