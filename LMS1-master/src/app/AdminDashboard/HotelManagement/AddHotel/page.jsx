"use client";
import Successcard from "@/Components/Successcard";
import Link from "next/link";

import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function AddHotel() {
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
          <Link href={"/AdminDashboard/HotelManagement/AddHotel"}>
            <button className="flex items-center justify-center gap-2">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>
        </div>

        {/* form */}

        <form action="#" className="flex flex-col gap-10">
          <div className="w-full grid grid-cols-3 items-center gap-8">
            {/* type of room */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">
                Type of Room*
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

            {/* Floor */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Floor*</label>
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
            {/* zone */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Zone*</label>
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
            {/* zone */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Price*</label>
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
          </div>

          {/* discription * */}

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
              para={" Room Created successfully!"}
            />
          )}
        </form>
      </div>
    </>
  );
}
