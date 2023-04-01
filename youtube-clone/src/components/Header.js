import React from "react";
import Logo from '../assets/search-icon.png'
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/menuSlice";

const Header = () => {
const dispatch =    useDispatch();

  const toggleMenu = () => {
    dispatch(toggleSidebar());
  }

  return (
    <div className="grid grid-flow-col shadow-xl">
      <div className="flex grid-cols-1">
        <img className="ml-2 h-8 pt-3" onClick={toggleMenu} alt={"hamburger"} src={"https://cdn0.iconfinder.com/data/icons/tigadua-mobile-ui-vol-1/32/menu_hamburger_button_ui-512.png"}/>
        <img className="h-12 pl-2" alt={"logo"} src={"https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" }/>
      </div>
      <div className="flex justify-stretch grid-cols-10 pt-3">
        <input placeholder="Search" className="px-5 py-2 border-solid border-2 border-slate-100 h-7 col-span-8 w-full rounded-l-full" type="text" />
        <button className="h-7 rounded-r-full px-3 bg-gray-100 col-span-2" type="button"><img alt={"search"} className="h-5 p-1" src={Logo}/></button>
      </div>
      <div className="flex justify-end grid-cols-1">
        <img className="pr-10 h-10 pt-3 col-span-1" alt={"profile"} src={"https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png"} />
      </div>
    </div>
  );
};

export default Header;
