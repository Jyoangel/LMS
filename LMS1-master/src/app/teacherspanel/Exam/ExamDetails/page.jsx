"use client";
import Successcard from "@/Components/Successcard";
import Link from "next/link";

import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ExamDetails() {
  const [isSelectOpen, setisSelectOpen] = useState(false);

  const openModal = () => {
    setisSelectOpen(true);
  };

  const closeModal = () => {
    setisSelectOpen(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col px-5 py-10 gap-10">
        <div className="w-full">
          <Link href={"/teacherspanel/Exam"}>
            <button className="flex items-center justify-center gap-3">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>
        </div>

        {/* form */}

        <form action="#" className="flex flex-col gap-10">
          {/* Student Details */}
          <div className="flex flex-col gap-8">
            <div className="w-full grid grid-cols-3 items-center gap-5">
              {/*  Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Type*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Exam Title*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Instructor Name*/}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Start Date */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Date*</label>
                <input
                  type="date"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Instructor Email */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Start Time*
                </label>
                <select
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                >
                  {" "}
                  <option value="" className="text-gray-400 px">
                    Select
                  </option>
                </select>
              </div>

              {/* Class Days */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Duration*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Class Time */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Instruction*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Total Marks*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Passing Maarks*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>{" "}
          </div>

          {/* Course Description* */}
          <div className="w-full flex items-center justify-center">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer h-[90px] w-full bg-blue-200 border-dashed border-4  p-4 rounded-lg  flex items-center justify-center"
            >
              <div className="flex flex-col ">
                <span className="text-md text-blue-600 underline ">
                  Upload Documents/Picture
                </span>
                <span className="text-md text-blue-600 ">
                  .pdf .PNG .JPG . JPEG
                </span>
              </div>

              <input
                id="file-upload"
                type="file"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div className="flex gap-5 pb-10">
            <button
              onsubmit={event.preventDefault()}
              onClick={openModal}
              className="w-[33%] bg-blue-600 text-white font-medium text-lg p-3 rounded-lg"
            >
              Submit
            </button>
            <button className="w-44   text-black border border-gray-400 font-medium text-lg p-2  ">
              Cancle
            </button>
          </div>
          {isSelectOpen && (
            <Successcard
              onClose={closeModal}
              para={"Course added successfully!"}
            />
          )}
        </form>
      </div>
    </>
  );
}
