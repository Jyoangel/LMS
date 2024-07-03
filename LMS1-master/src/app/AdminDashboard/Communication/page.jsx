"use client";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CommunicationTable from "./CommunicationTable";

import { SlRefresh } from "react-icons/sl";
import MessageCard from "./MessageCard";
import TeacherTable from "./TeacherTable";
import StaffTable from "./StaffTable";

export default function Communication() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [select, setSelect] = useState(1);

  const handleSelect = (value) => {
    setSelect(select === value ? 1 : value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col gap-5 pl-10 pt-10">
        <div className="h-12 w-full flex flex-row items-center justify-between px-5">
          <h1 className="text-black text-lg font-medium">Total Students:10</h1>
          <div className="flex flex-row gap-2">
            <h1 className="text-black text-lg font-medium">Filter</h1>
            <select className="h-8 w-28 border border-gray-500 outline-none rounded-lg p-1 ">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div className="h-20  w-full border border-gray-300 flex flex-row gap-6 p-2 py-4 rounded-lg">
          <button
            onClick={() => {
              handleSelect(1);
            }}
            className={`${
              select === 1
                ? "text-blue-500 underline"
                : "text-gray-500 underline"
            }  font-medium underline-offset-4`}
          >
            Students
          </button>
          <button
            onClick={() => {
              handleSelect(2);
            }}
            className={`${
              select === 2
                ? "text-blue-500 underline"
                : "text-gray-500 underline"
            }  font-medium underline-offset-4`}
          >
            Teachers
          </button>
          <button
            onClick={() => {
              handleSelect(3);
            }}
            className={`${
              select === 3
                ? "text-blue-500 underline"
                : "text-gray-500 underline"
            }  font-medium underline-offset-4`}
          >
            Staffs
          </button>
        </div>

        <div className="h-auto w-full flex flex-col rounded-lg  border border-gray-300">
          <div className="h-20 w-full  flex flex-row items-center justify-between px-5">
            <div className="flex flex-row gap-5">
              <h1 className="text-black font-semibold">Show</h1>
              <select className="h-6 w-16 border border-gray-300 rounded-md">
                <option>10</option>
              </select>
              <h1 className="text-black font-semibold">Entries</h1>
              <div className="flex flex-row gap-2 items-center justify-center">
                <SlRefresh />
                <h1 className="text-black font-semibold">Refresh</h1>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="h-10 w-64 rounded-lg border flex flex-row  items-center p-2  border-gray-300">
                <CiSearch size={25} color="gray" />
                <h1 className="text-md text-gray-500">Search</h1>
              </div>
              <div className="flex flex-row gap-1">
                <button className="h-10 w-12 bg-gray-300 rounded-md flex items-center justify-center">
                  <FaAngleLeft color="black" size={25} />
                </button>
                <button className="h-10 w-12 bg-white border border-gray-300 rounded-md text-xl">
                  1
                </button>
                <button className="h-10 w-12 bg-gray-300 rounded-md flex items-center justify-center ">
                  <FaAngleRight color="black" size={25} />
                </button>
              </div>
              <button
                className="text-blue-500 underline text-lg font-semibold"
                onClick={openModal}
              >
                Message
              </button>
              {isModalOpen && <MessageCard onClose={closeModal} />}
            </div>
          </div>
          <div className="flex flex-col">
            {select === 1 && (
              <CommunicationTable filter={filter} searchTerm={searchTerm} />
            )}

            {select === 2 && (
              <TeacherTable filter={filter} searchTerm={searchTerm} />
            )}
            {select === 3 && (
              <StaffTable filter={filter} searchTerm={searchTerm} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
