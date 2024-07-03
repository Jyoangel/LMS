"use client";
import Successcard from "@/Components/Successcard";
import Link from "next/link";

import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function UpdateDetails() {
  const [isSelectOpen, setisSelectOpen] = useState(false);

  const openModal = () => {
    setisSelectOpen(true);
  };

  const closeModal = () => {
    setisSelectOpen(false);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col px-5 py-10 gap-10">
        <div className="w-full">
          <Link href={"/AdminDashboard/UserManagement"}>
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
            <h1 className="text-lg font-semibold">Student Details</h1>
            <div className="w-full grid grid-cols-3 items-center gap-5">
              {/*  Form Number* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Form Number*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Admission Number**/}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Admission Number*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Name*/}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Name*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Class */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Class*</label>
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

              {/* Date of Birth */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Date of Birth*
                </label>
                <input
                  type="date"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Gender*
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

              {/* Nationality */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Nationality*
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

              {/* Mother Tongue */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Mother Tongue*
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

              {/* Religion */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Religion*
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

              {/* Caste */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Caste*</label>
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

              {/* Blood Group */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Blood Group*
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

              {/* Aadhar Number*/}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Aadhar Number*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Contact Number */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Contact Number*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>{" "}
          </div>

          {/* Address * */}
          <div className="flex flex-col gap-3 w-full">
            <label className="text-lg font-normal text-black">Address *</label>
            <textarea
              type="text"
              placeholder="Type here"
              className="h-20 border border-gray-300 rounded-md w-full py-3
             px-5 outline-none "
            ></textarea>
          </div>

          {/* Parents Details */}
          <div className="flex flex-col gap-8">
            <h1 className="text-lg font-semibold">Parents Details</h1>
            <div className="w-full grid grid-cols-3 items-center gap-5">
              {/*  Father Name */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Father Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/*  Contact Number */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Contact Number*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/*  Aadhar Number */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Aadhar Number*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/*  Occupation */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Occupation*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/*  Annual Income  */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Annual Income*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/*  Mother Name  */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Mother Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/*  Aadhar Number  */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Aadhar Number*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Address * */}
          <div className="flex flex-col gap-3 w-full">
            <label className="text-lg font-normal text-black">Address *</label>
            <textarea
              type="text"
              placeholder="Type here"
              className="h-20 border border-gray-300 rounded-md w-full py-3
             px-5 outline-none "
            ></textarea>
          </div>

          {/* Local Guardian Details */}
          <div className="flex flex-col gap-8">
            <h1 className="text-lg font-semibold">Local Guardian Details</h1>
            <div className="w-full grid grid-cols-3 items-center gap-5">
              {/*  Guardian Name */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Guardian Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/*  Relation With Student     */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Relation With Student*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/*  Contact Number */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Contact Number*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/*  Aadhar Number */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Aadhar Number*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/*  Occupation  */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Occupation*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Address * */}
          <div className="flex flex-col gap-3 w-full">
            <label className="text-lg font-normal text-black">Address *</label>
            <textarea
              type="text"
              placeholder="Type here"
              className="h-20 border border-gray-300 rounded-md w-full py-3
             px-5 outline-none "
            ></textarea>
          </div>

          <div className="flex gap-5 pb-10">
            <button
              onsubmit={event.preventDefault()}
              onClick={openModal}
              className="w-[33%] bg-blue-400 text-white font-medium text-lg p-3 rounded-lg"
            >
              Update
            </button>
            <button className="w-44   text-black border border-gray-400 font-medium text-lg p-2  ">
              Cancle
            </button>
          </div>
          {isSelectOpen && (
            <Successcard
              onClose={closeModal}
              para={"Student Update successfully!"}
            />
          )}
        </form>
      </div>
    </>
  );
}
