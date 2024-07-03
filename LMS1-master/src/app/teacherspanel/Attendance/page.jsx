"use client";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { SlRefresh } from "react-icons/sl";
import Attendancetable from "./Attendancetable";
import ConfirmationCard from "../components/ConfirmationCard";

export default function Attendance() {
  const [access, setAccess] = useState(false);
  const closeAccess = () => {
    setAccess(false);
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col gap-5 pl-10 pt-10">
        <div className="h-12 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6 justify-between w-full px-5">
            <h1 className="text-black text-lg font-medium">Attendance: 10</h1>
            <button
              className="text-blue-600 underline font-semibold text-lg"
              onClick={() => {
                setAccess(true);
              }}
            >
              Access Provider
            </button>
            {access && (
              <ConfirmationCard
                para={"Do you want to give access to this?"}
                onClose={closeAccess}
              />
            )}
          </div>
        </div>

        <div className="h-auto w-full flex flex-col rounded-lg border border-gray-300">
          <div className="h-20 w-full flex flex-row items-center justify-between px-5">
            <div className="flex flex-row gap-5">
              <h1>Show</h1>
              <select className="h-6 w-12">
                <option>10</option>
              </select>
              <h1>Entries</h1>
              <div className="flex flex-row gap-2 items-center justify-center">
                <SlRefresh />
                <h1>Refresh</h1>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="h-10 w-64 rounded-lg border flex flex-row items-center p-2 gap-3 border-gray-300">
                <CiSearch size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none w-full"
                />
              </div>
              <div className="flex flex-row gap-1">
                <button className="h-10 w-12 bg-gray-300 rounded-md flex items-center justify-center">
                  <FaAngleLeft color="black" size={25} />
                </button>
                <button className="h-10 w-12 bg-white border border-gray-300 rounded-md text-xl">
                  1
                </button>
                <button className="h-10 w-12 bg-gray-300 rounded-md flex items-center justify-center">
                  <FaAngleRight color="black" size={25} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Attendancetable />
          </div>
        </div>
      </div>
    </>
  );
}
