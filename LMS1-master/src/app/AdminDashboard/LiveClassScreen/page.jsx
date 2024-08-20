"use client";

import { CiSearch } from "react-icons/ci";

import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { SlRefresh } from "react-icons/sl";
import LiveClassTable from "./LiveClassTable";
import { fetchCourseData } from "../../../../api/courseapi";

export default function LiveClassScreen() {
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [totalCourses, setTotalCourses] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCourseData();
        // Update your component state with data
        setTotalCourses(data.count);
      } catch (error) {
        // Handle errors
        console.error("Failed to fetch courses data:", error);
      }
    };

    getData();
  }, []);
  return (
    <>
      <div className="h-screen w-full flex flex-col gap-5 p-5 py-10">
        <div className="h-12 w-full flex flex-row items-center justify-between">
          <h1 className="text-black text-lg font-medium">Total Course:{totalCourses}</h1>
          <div className="flex flex-row gap-2">
            <h1 className="text-black text-lg font-medium">Filter</h1>
            <select className="h-8 w-28 border border-gray-500 outline-none rounded-lg p-1 ">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div className="h-auto w-full flex flex-col rounded-lg  border border-gray-300">
          <div className="h-20 w-full  flex flex-row items-center justify-between px-5">
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
              <div className="h-10 w-64 rounded-lg border flex flex-row  items-center p-2 gap-3 border-gray-300">
                <CiSearch size={20} />
                <h1>Search</h1>
              </div>
              <div className="flex flex-row gap-1">
                <button className="h-10 w-12 bg-gray-300 rounded-md flex items-center justify-center" aria-label="Previous Page">
                  <FaAngleLeft color="black" size={25} />
                </button>
                <button className="h-10 w-12 bg-white border border-gray-300 rounded-md text-xl">
                  1
                </button>
                <button className="h-10 w-12 bg-gray-300 rounded-md flex items-center justify-center " aria-label="Next Page">
                  <FaAngleRight color="black" size={25} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <LiveClassTable filter={filter} searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </>
  );
}
