
import React from "react"
import { useState, useRef, useEffect } from "react";
import EventCalendar from "./EventCalendar";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faHeart, faPen, faUserCog, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( faCalendarAlt, faUserPlus, faUserCog,faPen, faHeart );

export function Navbar(props){
  const imageSrc = 'https://example.com/image.jpg';
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeLink, setActiveLink] = useState("biography");
  const [isSaved, setIsSaved] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isPenClicked, setIsPenClicked] = useState(false);
  const [profileImg, setProfileImg] = useState(props.imageSrc);
  const [searchQuery, setSearchQuery] = useState("");

  
  
  const MAX_KEYWORDS = 20;
  const keywords = [  "art",  "music",  "sports",  "books",  "technology",  "food",  "travel",  "photography",  "fashion",  "nature",  "film",  "games",  "fitness",  "politics",  "business",  "education",  "health",  "science",  "history",  "culture",];

  const handleKeywordClick = (keyword) => {
    const keywords = [...formData.keywords];
    const keywordIndex = keywords.indexOf(keyword);
    if (keywordIndex === -1) {
      if (keywords.length >= MAX_KEYWORDS) {
        // max keywords reached, do not add
        return;
      }
      keywords.push(keyword);
    } else {
      keywords.splice(keywordIndex, 1);
    }
    setFormData({ ...formData, keywords });
  };
  


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const filteredKeywords = keywords.filter((keyword) =>
    keyword.toLowerCase().includes(searchQuery.toLowerCase())
  );



  
  function handleProfileImgChange(newSrc) {
    setProfileImg(newSrc);
    setFormData((prevFormData) => ({
      ...prevFormData,
      profileImage: newSrc
    }));
  }


  
  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem("formData");
    return storedFormData ? JSON.parse(storedFormData) : {
      biography: "",
      profileImage: null,
      keywords:[]
    };
  });

  
  


  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    setFormData(
      storedFormData
        ? JSON.parse(storedFormData)
        : { biography: "", profileImage: null, keywords: [] }
    );
    setIsSaved(true); // Set isSaved to true to display the saved data on page load
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  
  useEffect(() => {
    setProfileImg(props.imageSrc);
  }, [props.imageSrc]);

  const popupRef = useRef(null);

  function handleCalendarClick() {
    setShowCalendar((prevShowCalendar) => !prevShowCalendar);
  }


  const handleSave = () => {
    setIsPenClicked(false);
    setIsSaved(true);
    localStorage.setItem("formData", JSON.stringify(formData));
  };
  


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handlePenClick = () => {
    setIsPenClicked(true);
  };



  const handlePenClickTwo = () => {
    setIsPenClicked(true);
  };

  const handlePenClickClosedTwo = () => {
    setIsPenClicked(false);
  };

  const handlePenClickClosed = () => {
    setIsPenClicked(false);
  };


  

  function handlePopupClick() {
    setShowPopup((prevShowPopup) => !prevShowPopup);
  }

  function handleDocumentClick(e) {
    if (showPopup && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showPopup]);


  const handleClick = (link) => {
    setActiveLink(link);
    setIsSaved(false);
  };
  
  function handleToggle() {
    setIsOpen(prevIsOpen => !prevIsOpen);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSaved(true);
      setIsEditing(false);
      setIsPenClicked(false)
      console.log(formData); // log the form data to the console
    };

    
    

  

  

return(
  <div>
  <nav className=" flex flex-row  bg-gray-100 justify-end items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-screen h-14 ">
   
  <button
    id="dropdownButton"
    className="absolute inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-black dark:text-black right-[75px] "
    type="button"
    onClick={handleToggle}
  >
    <a href="#" className="text-lg fixed left-[261px] z-0  ">
      <FontAwesomeIcon  icon="heart" />
    </a>
    <div className=" flex">
      <div className="relative inline-flex w-[10px] h-[10px] mt-1  ml-7 bg-red-500 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900" />
    </div>
  </button>
    <FontAwesomeIcon icon="calendar-alt" className="absolute cursor-pointer right-[60px] z-0" onClick={handleCalendarClick}/>
    <div className="absolute top-[16px] left-[330px]" ref={popupRef}>
    <div className="circle-menu " onClick={handlePopupClick}>
                <img className="h-7 w-7 max-w-full  rounded-full cursor-pointer object-cover object-center" src={profileImg} alt="Menu" />
              </div>
         </div>

         
 
  {/* Dropdown menu */}
  {isOpen && (
  <div
    id="dropdownMenu"
    className="z-10 absolute w-[0px] top-[56px] right-[390px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700 "
    aria-labelledby="dropdownButton"
  >
    <div className="block w-[420px] px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gradient-to-r from-purple-500 to-pink-500 dark:bg-gray-800 dark:text-white">
      Notifiche
    </div>
    <div className="w-[700px] relative z-10 divide-y divide-gray-100 dark:divide-gray-700">
      <a
        href="#"
        className=" flex  z-10 px-4 py-3 bg-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex-shrink-0 ml-1 ">
          <img
            className="rounded-full w-11 h-11"
            src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"
            alt="Vittoria image"
          />
          <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
            <svg
              className="w-3 h-3 text-white"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
              <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>
          </div>
        </div>
        <div className="w-[330px] pl-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            Messaggio nuovo di{" "}
            <span className="font-semibold text-gray-900 dark:text-black">
              Vittoria Bianchi
            </span>
            : "Ciao, che fai sta sera? Partecipi all'evento di sta sera che ho
            organizzato ?"
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-500">
            pochi secondi fa
          </div>
        </div>
      </a>
      <a
        href="#"
        className="flex z-10 px-4 py-3 bg-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex-shrink-0 ml-2">
          <img
            className="rounded-full w-11 h-11"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1rLseZTJ6YRzvVJvjULknsz76zHB6as7eA&usqp=CAU"
            alt="Francesco image"
          />
          <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
            <svg
              className="w-3 h-3 text-white"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
          </div>
        </div>
        <div className="block pl-3 w-[340px]">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-black">
              Francesco Russo
            </span>{" "}
            e{" "}
            <span className="font-medium text-gray-900 dark:text-black">
              5 altri
            </span>{" "}
            hanno iniziato a seguirti.
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-500">
            10 minuti fa
          </div>
        </div>
      </a>
      <a
        href="#"
        className="flex z-10 px-4 py-3 bg-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex-shrink-0 ml-2">
          <img
            className="rounded-full w-11 h-11"
            src="https://atd-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142811/cool-profile-pictures-for-tiktok-5-678x1024.webp"
            alt="Salvatore image"
          />
          <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
            <svg
              className="w-3 h-3 text-white"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="w-[360px] pl-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-black">
              Salvatore Romano
            </span>{" "}
            e{" "}
            <span className="font-medium text-gray-900 dark:text-black">
              141 altri
            </span>{" "}
            hanno messo "Mi piace" al tuo evento:"Houseparty da me".{" "}
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-500">
            44 minuti fa{" "}
          </div>
        </div>
      </a>
      <a
        href="#"
        className="flex z-10 px-4 py-3 bg-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex-shrink-0 ml-2">
          <img
            className="rounded-full w-11 h-11"
            src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
            alt="Giuseppe image"
          />
          <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-800">
            <svg
              className="w-3 h-3 text-white"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="w-[340px] pl-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-black">
              Giuseppe Costa
            </span>{" "}
            ti ha menzionato in un commento:{" "}
            <span className="font-medium text-blue-500" href="#">
              @mario.rossi
            </span>{" "}
            tu cosa ne pensi?
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-500">
            1 ora fa
          </div>
        </div>
      </a>
      <a
        href="#"
        className="flex z-10 px-4 py-3 bg-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex-shrink-0 ml-2">
          <img
            className="rounded-full w-11 h-11"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQhr1anKVzAaHQtvVh3eiGojjQurDszvkYQ&usqp=CAU"
            alt="Sofia image"
          />
          <div className="absolute flex items-center justify-center w-7 h-7 ml-6 -mt-5  border border-white rounded-full dark:border-gray-800">
            <img
              className="rounded-full bg-[#1c1d33] p-2"
              width={1000}
              src="assets/images/eveny-logo-new.svg"
              alt="logo about users"
            />
          </div>
        </div>
        <div className="w-[340px] pl-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-black">
              Sofia Marino
            </span>{" "}
            ha pubblicato un nuovo evento: Serata al cinema-"Avatar 2"
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-500">
            3 ore fa
          </div>
        </div>
      </a>
    </div>
    <a
      href="#"
      className="block  z-10 py-2 text-sm font-medium text-center w-[420px] text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gradient-to-r from-purple-500 to-pink-500 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
    >
      <div className="inline-flex items-center hover:text-black ">
        <svg
          className="w-4 h-4 mr-2 text-black dark:text-gray-400 hover:text-black"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
        Visualizza tutti
      </div>
    </a>
  </div>

  )
  }


      {showPopup && (
        <div className="absolute z-50 right-[30px] top-[100px] w-72">
          <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex ml-9 items-center mb-4">
                  <div className="text-lg ml-12 text-black underline decoration-pink-700 font-bold">Eveny</div>
                  
                </div>
                <div className="mb-4">
                  <div className="circle-menu flex flex-row ">
                    <img className="h-8 w-8 rounded-full" src={profileImg}>
                    </img>
                    <div className="flex flex-col">
                    <span className="text-sm ml-3">Mario Rossi</span>
                    
                    <span className="text-blue-500 ml-3 cursor-pointer text-[10px]">rossimario1984@gmail.com</span>
                    
                    </div>
                    </div>
                    <button type="button" class="text-gray-900 ml-4 mt-3 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  focus:ring-gray-200 font-medium rounded-full text-[12px] px-3 py-1 mr-2 mb-2 dark:bg-white dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Gestisci il tuo Account Eveny</button>
                    <div className="w-full h-[0.5px] mt-2 bg-stone-300 shadow"></div>
                    </div>
                    
                      <div className="flex flex-col gap-y-2">
                  <a href="#" className="text-[13px] font-semibold text-gray-800 hover:text-gray-900"><FontAwesomeIcon className="mr-3" icon={faUserPlus} />Aggiungi un altro account</a>
                  <a href="#" className="text-[13px] font-semibold text-gray-800 hover:text-gray-900"><FontAwesomeIcon className="mr-3" icon={faUserCog} />Gestisci gli account su questo <span className="ml-[29px]">dispositivo</span> </a>
                  <div className="w-full h-[0.5px] mt-2 bg-stone-300 shadow"></div>
                 <div className="flex flex-row gap-3">
                  <span className="text-[11px] cursor-pointer">Norme sulla privacy</span>
                  <span className=""><FontAwesomeIcon className="text-black text-[5px] mb-[8px] " icon="circle" />
</span>
                  <span className="text-[11px] cursor-pointer">Termini di servizio</span>
                 </div>
                </div>
              </div>
            </div>
      )}
    
  </nav>
  {showCalendar && <EventCalendar onClose={handleCalendarClick} />}

  
  
  <div className="relative top-[240px] flex justify-between  items-center pb-2 pl-3 pr-2 ml-2 gap-8">
<a
          href="#"
          className={`relative text-gray-500 hover:text-blue-500 focus:text-blue-500 focus:outline-none pb-1 ${
            activeLink === "biography" && "border-b-2 border-blue-500"
          }`}
          onClick={() => handleClick("biography")}
        >
          Biography
        </a>
  <a
    href="#"
    className="relative text-gray-500 hover:text-blue-500 focus:text-blue-500 focus:outline-none pb-1"
    onClick={() => handleClick("events")}
  >
    Events
    {activeLink === "events" && (
      <span className="absolute left-0 right-0 bottom-0 border-b-2 border-blue-500"></span>
    )}
  </a>
  <a
    href="#"
    className="relative text-gray-500 hover:text-blue-500 focus:text-blue-500 focus:outline-none pb-1"
    onClick={() => handleClick("posts")}
  >
    Posts
    {activeLink === "posts" && (
      <span className="absolute left-0 right-0 bottom-0 border-b-2 border-blue-500"></span>
    )}
  </a>
  <a
    href="#"
    className="relative text-gray-500 hover:text-blue-500 focus:text-blue-500 focus:outline-none pb-1"
    onClick={() => handleClick("followers")}
  >
    Followers
    {activeLink === "followers" && (
      <span className="absolute left-0 right-0 bottom-0 border-b-2 border-blue-500"></span>
    )}
  </a>
</div>
  
<FontAwesomeIcon
      icon="pen"
      className="ml-2 text-blue-500 relative top-[250px] left-[10px] cursor-pointer"
      onClick={handlePenClick}
    />

    <a onClick={handlePenClick} className="relative top-[250px] left-[20px] text-blue-500">Modifica</a>
  
{isPenClicked && (
    
    <div>
        <span className="relative border-b-2 border-blue-500"></span>
    <div className="relative">
    <button className="ml-2 relative top-[229px] left-[310px] text-gray-500" onClick={handlePenClickClosed}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 1a9 9 0 100 18 9 9 0 000-18zm4.95 11.636a.75.75 0 01-1.06 1.061L10 11.06l-3.89 3.89a.75.75 0 11-1.06-1.06L8.94 10l-3.89-3.89a.75.75 0 111.06-1.06L10 8.94l3.89-3.89a.75.75 0 111.06 1.06L11.06 10l3.89 3.636z" clipRule="evenodd" />
        </svg>
    </button>
    <form className="absolute top-[270px] max-w-lg w-full pl-4 pr-2 bg-gray-100"
    onSubmit={handleSubmit}>
    <label htmlFor="biography" className="block text-gray-700 font-bold mb-2">
      Biography:
     
    </label>
    <textarea
      id="biography"
      name="biography"
      rows="5"
      maxLength="200"
      placeholder="Write your biography here..."
       className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       onChange={(e) => setFormData({ ...formData, biography: e.target.value })}
    /> 
  
      <button onClick={handleSave} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
         Save
      </button>
      </form>
    </div>
  
   


    </div>
    
    
)}





{!isPenClicked && isSaved && (
  <div className="relative top-[260px] ml-8">
    <p>{formData.biography}</p>
</div>
) }

{!isPenClicked && (
<div class="tab-pane fade relative top-[300px] " id="biography" role="tabpanel" aria-labelledby="biography-tab">
  <h3>Interests:</h3>
  <div id="isPenClicked">
    <p>This is my biography. Click the pen icon to edit.</p>
    <i class="fa fa-pencil" aria-hidden="true"></i>
  </div>
  <div id="interests">
    <h4>Interests</h4>
    <p>Click the pen icon to add or remove interests.</p>
    <i class="fa fa-pencil" aria-hidden="true"></i>
  </div>
</div>
)}



</div>
)
}





