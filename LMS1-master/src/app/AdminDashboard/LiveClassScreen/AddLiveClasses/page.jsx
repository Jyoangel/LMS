"use client";
import Successcard from "@/Components/Successcard";
import Link from "next/link";

import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function AddLiveClasses() {
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
        <div className="w-full">
          <Link href={"/AdminDashboard/LiveClassScreen/CourseName"}>
            <button className="flex items-center justify-center gap-2">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>
        </div>

        {/* form */}

        <form action="#" className="flex flex-col gap-10">
          <div className="w-full grid grid-cols-3 items-center gap-8">
            {/* live classes topic */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">
                Live Classes Topic *
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            {/* section */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Section*</label>
              <select
                type="text"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              >
                {" "}
                <option value="" className="text-gray-400 px">
                  Select
                </option>
              </select>
            </div>

            {/* Live Room */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">
                Live Room*
              </label>
              <select
                type="text"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              >
                {" "}
                <option value="" className="text-gray-400 px">
                  Select
                </option>
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Date*</label>
              <input
                type="date"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            {/* time */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Date*</label>
              <input
                type="time"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            {/* duration */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">
                Duration*
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>
          </div>

          {/* Note to the students * */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-normal text-black">
              Note to the students **
            </label>
            <textarea
              type="text"
              placeholder="Type here"
              className="h-20 border border-gray-300 rounded-md w-full py-3
             px-5 outline-none "
            ></textarea>
          </div>

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
