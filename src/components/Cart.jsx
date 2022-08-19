import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { cartData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from ".";

const Cart = () => {
  const { currentColor, handleClick } = useStateContext();
  const [itemQuantity, setItemQuantity] = useState(1)

  const increaseQuantity = (index) => {
    cartData[index].quantity = cartData[index].quantity + 1
    setItemQuantity(cartData[index].quantity)
    return [...cartData, cartData[index].quantity]
  }

  const decreaseQuantity = (index) => {
    if (cartData[index].quantity <= 0) {
      cartData[index].quantity = 0
      setItemQuantity(cartData[index].quantity)
    } else {
      cartData[index].quantity = cartData[index].quantity - 1
      setItemQuantity(cartData[index].quantity)
    }
    return [...cartData, cartData[index].quantity]
  }

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div 
        className="float-right h-screen duration-1000 ease-in-out 
        dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400"
      >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Shopping Cart</p>
          <button
            type="button"
            onClick={handleClick}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <ul className="overflow-y-auto list-none pl-6 pr-6 max-h-[63vh]">
          {cartData.map((item, index) => (
            <li key={index}>
              <div
                className="flex items-center leading-8 gap-5 
                border-b-1 border-color dark:border-gray-600 p-2 select-none"
              >
                <img
                  className="rounded-lg h-80 w-24"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <p className="font-semibold">{item.name.toUpperCase()}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {item.category}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <span className="font-semibold text-lg">${item.price}</span>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p 
                        className="p-2 border-r-1 border-color 
                        dark:border-gray-600 text-red-600 cursor-pointer hover:brightness-150"
                        onClick={() => decreaseQuantity(index)}  
                      >
                        <AiOutlineMinus />
                      </p>
                      <p className="p-2 border-color dark:border-gray-600 text-green-600">
                        {item.quantity}
                      </p>
                      <p 
                        className="p-2 border-l-1 border-color 
                        dark:border-gray-600 text-green-600 cursor-pointer hover:brightness-150"
                        onClick={() => increaseQuantity(index)}
                      >
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5 mb-3 pl-6 pr-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">
              ${cartData.reduce((total, current) => total + current.price, 0)}
            </p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total (10% VAT)</p>
            <p className="font-semibold">
              $
              {cartData.reduce(
                (total, current) => total + current.price * 1.1,
                0
              )}
            </p>
          </div>
        </div>

        <div className="mt-5 pl-6 pr-6">
          <Button
            color="white"
            bgColor={currentColor}
            borderRadius="10px"
            text="Place Order"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
