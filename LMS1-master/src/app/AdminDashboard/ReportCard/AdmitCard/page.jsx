"use client";
import Link from "next/link";

import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import FinalAdmitcard from "./FinalAdmitcard";

export default function AdmitCard() {
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
          <Link href={"/AdminDashboard/ReportCard"}>
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
                <label className="text-lg font-normal text-black">
                  Examination RollNo*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  School Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Instructor Name*/}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Session*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Examination*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Student Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Class*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Start Date */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Start Date*
                </label>
                <input
                  type="date"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* End Date      */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  End Date *
                </label>
                <input
                  type="date"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Class Days */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Exam Starting Time*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Exam Ending TIme*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>{" "}
            <h1 className="text-black text-xl font-semibold">
              Add Exam Subject
            </h1>
            <div className="w-full grid grid-cols-3 items-center gap-5">
              {/*  Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Examination Date*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
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
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>{" "}
            <div className="w-full grid grid-cols-3 items-center gap-5">
              {/*  Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Examination Date*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
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
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>{" "}
            <div className="w-full grid grid-cols-3 items-center gap-5">
              {/*  Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Examination Date*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
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
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>{" "}
            <div className="w-full grid grid-cols-3 items-center gap-5">
              {/*  Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Course Name* */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Examination Date*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
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
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>{" "}
          </div>

          <div className="flex gap-5 pb-10">
            <button
              onsubmit={event.preventDefault()}
              onClick={openModal}
              className="w-[33%] bg-blue-600 text-white font-medium text-lg p-3 rounded-lg"
            >
              Save
            </button>
            <button className="w-44   text-black border border-gray-400 font-medium text-lg p-2  ">
              Cancle
            </button>
          </div>
          {isSelectOpen && <FinalAdmitcard onClose={closeModal} />}
        </form>
      </div>
    </>
  );
}
