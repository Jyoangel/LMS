"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import FeeNotice from "../Component/FeeNotice";

export default function FeeDetails() {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  const openNotice = () => {
    setIsNoticeOpen(true);
  };

  const closeNotice = () => {
    setIsNoticeOpen(false);
  };

  return (
    <>
      <div className="h-screen   w-full flex flex-col p-5 gap-10">
        {/* buttons */}
        <div className="flex w-full justify-between items-center ">
          <Link href={"/AdminDashboard/Fees"}>
            <button className="flex items-center justify-center gap-2">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>

          <div className="flex gap-3 items-center justify-center">
            <div className="flex items-center justify-center gap-1">
              <button
                className="text-blue-400 text-lg font-medium underline"
                onClick={openNotice}
              >
                Fee Notice
              </button>{" "}
              {isNoticeOpen && <FeeNotice onClose={closeNotice} />}
            </div>
          </div>
        </div>

        {/* course details */}
        <div className="w-full flex flex-col rounded-t-xl overflow-hidden">
          <div className="w-full h-12 px-5 flex items-center bg-blue-200">
            <h1 className="text-blue-600 font-semibold ">Abhinav Kumar</h1>
          </div>

          <div className="p-5 w-full h-auto flex flex-col gap-10 border border-gray-300 rounded-b-lg">
            {/* course name */}
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full grid grid-cols-5 items-center justify-between gap-5">
                <h1 className="text-gray-400 font-normal text-lg">
                  Student Id
                </h1>
                <h1 className="text-gray-400 font-normal text-lg">Name</h1>
                <h1 className="text-gray-400 font-normal text-lg">Class</h1>
                <h1 className="text-gray-400 font-normal text-lg">
                  Date of Birth
                </h1>
                <h1 className="text-gray-400 font-normal text-lg  ">Gender</h1>
              </div>
              <div className="w-full grid grid-cols-5 items-center justify-between gap-5">
                <h1 className="text-black font-medium text-lg">59248</h1>
                <h1 className="text-black font-medium text-lg">
                  Abhinav Kumar
                </h1>
                <h1 className="text-black font-medium text-lg">8</h1>
                <h1 className="text-black font-medium text-lg">29-05-2024</h1>
                <h1 className="text-black font-medium text-lg  ">Male</h1>
              </div>
            </div>

            {/* start date */}
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full grid grid-cols-5 items-center justify-between gap-5">
                <h1 className="text-gray-400 font-normal text-lg">
                  Aadhar Number
                </h1>
                <h1 className="text-gray-400 font-normal text-lg">
                  Father Name
                </h1>
                <h1 className="text-gray-400 font-normal text-lg">
                  Contact Number
                </h1>
              </div>
              <div className="w-full grid grid-cols-5 items-center justify-between gap-5">
                <h1 className="text-black font-medium text-lg">
                  8978565423156987
                </h1>
                <h1 className="text-black font-medium text-lg">Vivek Kumar</h1>
                <h1 className="text-black font-medium text-lg">9999999999</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
