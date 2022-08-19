import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent as DropDown } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
  recentTransactions,
  dropdownData,
  weeklyStats,
  medicalproBranding,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

import product9 from "../data/product9.jpg";

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {/* ECommerce page - Thumbnail Image Section */}
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
          h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat
          bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        {/* ECommerce page - General Stat Section */}
        <div className="flex m-3 flex-wrap justify-center items-center gap-1">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
              md:w-56 p-4 pt-9 rounded-2xl hover:drop-shadow-md"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ECommerce page - Detail Stat/Revenue Section */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
          m-3 p-4 rounded-2xl md:w-780 hover:drop-shadow-md"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Update</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  id="line-sparkline"
                  currentColor={currentColor}
                  height="100px"
                  width="320px"
                  type="Line"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            <div className="md:w-full">
              <Stacked currentMode={currentMode} width="300px" height="340px" />
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div
            className="rounded-2xl md:w-400 p-4 m-3 hover:drop-shadow-md"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center">
              <p className="text-white text-2xl font-semibold">Earnings</p>
              <div>
                <p className="text-white text-2xl font-semibold mt-8">
                  $63,448.78
                </p>
                <p className="text-gray-200">Monthly Revenue</p>
              </div>
            </div>
            <div className="mt-4">
              <SparkLine
                id="column-sparkline"
                currentColor={currentColor}
                height="100px"
                width="320px"
                type="Column"
                data={SparklineAreaData}
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>
          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
            rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10 hover:drop-shadow-md"
          >
            <div>
              <p className="font-semibold text-2xl">$43,246</p>
              <p className="text-gray-400 dark:text-gray-200">Yearly Sales</p>
            </div>
            <div className="w-40">
              <Pie
                id="pie-chart"
                data={ecomPieChartData}
                legendVisibility={false}
                height="160px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        {/* ECommerce page - Recent Transactions Section */}
        <div
          className="bg-white dark:bg-secondary-dark-bg rounded-2xl 
        dark:text-gray-200 p-6 hover:drop-shadow-md"
        >
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold dark:text-gray-200">
              Recent Transactions
            </p>
            <DropDown
              id="dropdowm"
              currentMode={currentMode}
              dataSource={dropdownData}
              fields={{ value: "Id", text: "Time" }}
              placeholder={dropdownData[0].Time}
              width="120px"
            />
          </div>
          <ul className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item, index) => (
              <li key={index} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div className="flex gap-4">
                    <div>
                      <p className="font-semibold text-md dark:text-gray-200">
                        {item.title}
                      </p>
                      <p className="text-gray-400 dark:text-gray-200">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </li>
            ))}
            <div className="mt-4 pt-4 border-t-1 border-color flex justify-between items-center">
              <Button
                text="Add"
                color="white"
                bgColor={currentColor}
                borderRadius="10px"
                width="50px"
              />
              <p className="text-gray-400 dark:text-gray-200">
                {recentTransactions.length} Recent Transactions
              </p>
            </div>
          </ul>
        </div>

        {/* ECommerce page - Sales Overview Section */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760 hover:drop-shadow-md">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="font-semibold text-xl dark:text-gray-200">
              Sales Overview
            </p>
            <DropDown
              id="dropdowm"
              currentMode={currentMode}
              dataSource={dropdownData}
              fields={{ value: "Id", text: "Time" }}
              placeholder={dropdownData[0].Time}
              width="120px"
            />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        {/* ECommerce page - Weekly Stats Section */}
        <div
          className="md:w-400 bg-white dark:text-gray-200 
          dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 hover:drop-shadow-xl"
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl dark:text-gray-200">
              Weekly Stats
            </p>
            <span className="text-xl font-semibold text-gray-500 dark:text-gray-200">
              <IoIosMore />
            </span>
          </div>
          <ul className="px-4 mt-10 mb-5">
            {weeklyStats.map((item, index) => (
              <li key={index} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="rounded-full text-white text-2xl p-3 hover:drop-shadow-xl"
                    style={{ background: item.iconBg }}
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold dark:text-gray-200">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-200">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </li>
            ))}
            <div className="mt-4">
              <SparkLine
                id="area-sparkline"
                currentColor={currentColor}
                height="100px"
                width="320px"
                type="Area"
                data={SparklineAreaData}
                color="rgb(242, 252, 253)"
              />
            </div>
          </ul>
        </div>

        {/* ECommerce page - Branding Section */}
        <div
          className="md:w-400 bg-white dark:text-gray-200 
          dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 hover:drop-shadow-xl"
        >
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold dark:text-gray-200">Branding</p>
            <span className="text-xl font-semibold text-gray-500 dark:text-gray-200">
              <IoIosMore />
            </span>
          </div>
          <div className="mt-10">
            <button
              type="button"
              style={{ color: "white", backgroundColor: currentColor }}
              className="px-1.5 rounded-3xl text-sm"
            >
              Nov 19, 2021
            </button>
            <div className="flex gap-4 border-b-1 border-color mt-6">
              {medicalproBranding.date.map((item, index) => (
                <div className="border-r-1 border-color pr-4 pb-2" key={index}>
                  <p className="text-sm text-gray-500 dark:text-gray-200">
                    {item.title}
                  </p>
                  <p className="text-md dark:text-gray-200">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="border-b-1 border-color mt-6 mb-2">
              <p className="text-md font-semibold dark:text-gray-200 mb-2">
                Teams
              </p>
              <div className="flex items-center">
                {medicalproBranding.teams.map((item, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: item.color, color: "white" }}
                    className="px-1.5 rounded-3xl text-sm mr-3 mb-4"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-b-1 border-color">
              <p className="text-md font-semibold dark:text-gray-200 mb-2">
                Leaders
              </p>
              <div className="flex items-center gap-4 mb-4">
                {medicalproBranding.leaders.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt="avatar"
                    className="rounded-full w-8 h-8"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ECommerce page - Daily Activities Section */}
        <div
          className="md:w-400 bg-white dark:text-gray-200 
          dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 hover:drop-shadow-xl"
        >
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold dark:text-gray-200">
              Daily Activities
            </p>
            <span className="text-xl font-semibold text-gray-500 dark:text-gray-200">
              <IoIosMore />
            </span>
          </div>
          <div className="mt-10">
            <img src={product9} alt="blog-thumb" className="" />
            <div className="mt-8">
              <p className="font-semibold text-xl dark:text-gray-200">
                Lorem Ipsum paragraph
              </p>
              <p className="text-md text-gray-500 dark:text-gray-200">
                By Brian Doan
              </p>
            </div>
            <p 
              className="text-gray-500 mt-8 overflow-y-hidden"
              style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2' }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button 
              text="Read More"
              color="white"
              bgColor={currentColor}
              borderRadius="10px"
              optionalStyle="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
