import React, { useCallback, useEffect, useState } from "react";
import Logo from "../assets/search-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_BY_KEYWORD_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { toggleSidebar } from "../utils/sidebarSlice";
import { cacheVideos } from "../utils/videosSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState([]);
  const storedResults = useSelector((store) => store.search);

  const toggleMenu = () => {
    dispatch(toggleSidebar());
  };

  const getVideosBySearchQuery= useCallback(async(query="")=>{
    let url = YOUTUBE_SEARCH_BY_KEYWORD_API.replace("SEARCH_QUERY",query);
    const data = await fetch(url);
    const json = await data.json();
    dispatch(cacheVideos(json.items));
    setShowSuggestions(false);
  },[dispatch])

  const suggestionClickHandler = (e) => {
    setSearchQuery(e.nativeEvent.target.innerHTML);
    getVideosBySearchQuery(e.nativeEvent.target.innerHTML);
  };

  useEffect(()=>{
    getVideosBySearchQuery();
  },[getVideosBySearchQuery])


  useEffect(() => {
    const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const response = await data.json();
      dispatch(cacheResults({ [searchQuery]: response[1] }));
      setSearchSuggestions(response[1]);
    };

    const timer = setTimeout(() => {
      if (storedResults[searchQuery]) {
        setSearchSuggestions(storedResults[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, storedResults, dispatch]);

  return (
    <div className="grid grid-flow-col shadow-xl">
      <div className="flex grid-cols-1">
        <img
          className="ml-2 h-8 pt-3 cursor-pointer"
          onClick={toggleMenu}
          alt={"hamburger"}
          src={
            "https://cdn0.iconfinder.com/data/icons/tigadua-mobile-ui-vol-1/32/menu_hamburger_button_ui-512.png"
          }
        />
        <img
          className="h-12 pl-2"
          alt={"logo"}
          src={
            "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          }
        />
      </div>
      <div className="flex justify-stretch pt-3 flex-col">
        <div className="flex justify-stretch">
          <input
            placeholder="Search"
            className="px-5 py-2 border-solid border-2 border-slate-100 h-7 col-span-8 w-full rounded-l-full"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            //onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="h-7 rounded-r-full px-3 bg-gray-100 col-span-2"
            type="button"
          >
            <img alt={"search"} onClick={()=> getVideosBySearchQuery(searchQuery)} className="h-5 p-1" src={Logo} />
          </button>
        </div>
        {showSuggestions && searchSuggestions.length > 0 && (
          <div className="bg-white w-full flex justify-stretch">
            <ul className="border-gray-100 py-2 rounded-lg shadow-lg fixed w-[33rem] bg-white">
              {searchSuggestions.map((suggestion) => (
                <div
                  key={Math.random()}
                  className="flex flex-row cursor-default hover:bg-gray-100"
                >
                  <img
                    key={Math.random()}
                    alt={"search"}
                    className="h-3 mt-2 ml-[1.5rem]"
                    src={Logo}
                  />
                  <li
                    onClick={(e) => suggestionClickHandler(e)}
                    key={Math.random()}
                    className="pl-5"
                  >
                    {suggestion}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-end grid-cols-1">
        <img
          className="pr-10 h-10 pt-3 col-span-1"
          alt={"profile"}
          src={
            "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png"
          }
        />
      </div>
    </div>
  );
};

export default Header;
