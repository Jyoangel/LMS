"use client";
import Successcard from "@/Components/Successcard";

import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function AddReportCard() {
  const [isSelectOpen, setisSelectOpen] = useState(false);

  const openModal = () => {
    setisSelectOpen(true);
  };

  const closeModal = () => {
    setisSelectOpen(false);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col p-5 gap-10">
        <div className="w-full flex justify-between items-center">
          <button className="flex items-center justify-center gap-2">
            <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
            <h1 className="text-lg font-semibold">Back</h1>
          </button>
          <button
            onsubmit={event.preventDefault()}
            onClick={openModal}
            className="w-28 bg-blue-400 text-white font-medium text-lg p-2 rounded-lg"
          >
            Save
          </button>
          {isSelectOpen && (
            <Successcard
              onClose={closeModal}
              para={" Report Card added successfully!"}
            />
          )}
        </div>

        {/* form */}

        <form action="#" className="flex flex-col ">
          {/* Student Details */}
          <InputDetail title={"Student Details"} />
          <InputDetail title={"Academic Performance"} />
          <InputDetail title={"Attedance"} />
          <InputDetail title={"Behaviour"} />
          <InputDetail title={"Teacher Comments"} />
          <InputDetail title={"Signature"} />

          <button
            onsubmit={event.preventDefault()}
            onClick={openModal}
            className="w-[33%] bg-blue-400 text-white font-medium text-lg p-3 rounded-lg"
          >
            Submit
          </button>
          {isSelectOpen && (
            <Successcard
              onClose={closeModal}
              para={" Live class added successfully!"}
            />
          )}
        </form>
      </div>
    </>
  );
}

const InputDetail = ({ title }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        className="w-full flex flex-col border border-gray-400 cursor-pointer"
      >
        <div className="p-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold">{title}</h1>
          <IoIosArrowDown
            size={25}
            className={`text-gray-500 ${
              isClicked ? "rotate-180" : "rotate-0"
            } duration-300`}
          />
        </div>
        {isClicked && (
          <div className="w-full grid grid-cols-3 items-center gap-5 p-5 border-t border-gray-300 ">
            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
