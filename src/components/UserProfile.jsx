import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    <div
      className="nav-item absolute right-1 top-12 shadow-xl md:shadow-lg
      bg-white dark:bg-[#42464D] rounded-lg w-96 pt-8 pb-8"
    >
      <div className="flex justify-between items-center pl-8 pr-8">
        <div className="flex justify-between items-center gap-3">
          <p className="font-semibold text-lg dark:text-gray-200 select-none">
            User Profile
          </p>
        </div>
        <button
          className="text-2xl p-3 w-undefined hover:drop-shadow-xl hover:bg-light-gray"
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          onClick={handleClick}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div 
        className="flex justify-center items-center gap-5
        mt-6 border-color border-b-1 pb-6 pl-8 pr-8"
      >
        <img 
          src={avatar} 
          alt="user avatar"
          className="rounded-full h-24 w-24"
        />
        <div>
          <p className="text-xl font-semibold dark:text-gray-200">Brian Doan</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Administrator</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">admin.shop@gmail.com</p>
        </div>
      </div>

      <ul>
        {userProfileData.map((item,index) => (
          <li
            key={index}
            className="hover:bg-gray-100 dark:hover:bg-[#42464D] pl-8 pr-8"
          >
            <div className="flex gap-5 border-b-1 border-color p-4 cursor-pointer">
              <div
                className="text-xl rounded-lg p-3 hover:bg-light-gray"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-semibold dark:text-gray-200">{item.title}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 pl-8 pr-8">
        <Button 
          text="Logout"
          width="full"
          bgColor={currentColor}
          color="white"
          borderRadius="10px"
        />
      </div>
    </div>
  );
};

export default UserProfile;
