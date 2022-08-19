import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.'
import { chatData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Notification = () => {
  const { currentColor, handleClick } = useStateContext()

  return (
    <div 
      className="nav-item absolute right-5 md:right-40 
      top-12 bg-white dark:bg-[#42464D] shadow-xl md:shadow-lg rounded-lg w-96 pt-8 pb-8"
    >
      <div className="flex justify-between items-center pl-8 pr-8">
        <div className="flex justify-between items-center gap-3">
          <p className="font-semibold text-lg dark:text-gray-200 select-none">Notifications</p>
          <span className="text-xs p-1 px-2 dark:text-gray-200 select-none">{chatData.length} New</span>
        </div>
        <button
          className="text-2xl p-3 w-undefined hover:drop-shadow-xl hover:bg-light-gray"
          style={{ color: 'rgb(153,171,180)', borderRadius: '50%'}}
          onClick={handleClick}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <ul>
        {chatData.map((item, index) => (
          <li 
            key={index}
            className="hover:bg-gray-100 dark:hover:bg-[#42464D] pl-8 pr-8"
          >
            <div 
              className="flex items-center gap-5 border-b-1 
              border-color p-3 leading-8 cursor-pointer"
            >
              <img src={item.image} className="rounded-full h-10 w-10" alt="avatar" />
              <div >
                <p className="font-semibold dark:text-gray-200">{item.desc}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.message}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 ml-8 mr-8">
        <Button 
          text="See all Notifications"
          color="white"
          bgColor={currentColor}
          width="full"
          borderRadius="10px"
        />
      </div>
    </div>
  )
}

export default Notification