"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { SlRefresh } from "react-icons/sl";
import UserManagementTable from "./components/UserManagementTable";
import TeacherManagementTable from "./components/TeacherTable";
import StaffManagementTable from "./components/StaffTable";
import { fetchCountData } from "../../../../api/api" // Adjust the path as per your file structure
import { fetchCountTeacherData } from "../../../../api/teacherapi"
import { fetchCountStaffData } from "../../../../api/staffapi"


export default function UserManagement() {
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [select, setSelect] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  const handleSelect = async (value) => {
    setSelect(value);
    let fetchData;
    if (value === 1) {
      fetchData = fetchCountData;
    } else if (value === 2) {
      fetchData = fetchCountTeacherData;
    } else if (value === 3) {
      fetchData = fetchCountStaffData;
    }

    try {
      const data = await fetchData();
      setTotalUsers(data.count);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    handleSelect(select);
  }, [select]);

  return (
    <>
      <div className="h-screen w-full flex flex-col gap-6 p-5">
        {/* total no */}
        <div className="w-full flex items-center justify-between">
          <h1 className="text-base font-medium">Total Users: {totalUsers}</h1>
          <div className="flex items-center justify-center gap-5">
            <button className="text-base font-semibold text-blue-500 underline">
              import
            </button>
            <Link href={"/AdminDashboard/UserManagement/StudentDetails"}>
              <button className="text-base font-semibold text-white bg-blue-500 px-4 py-2 rounded-lg">
                Add New
              </button>
            </Link>
          </div>
        </div>

        {/* student teacher staff */}
        <div className="h-20  w-full border border-gray-300 flex flex-row gap-6 p-2 py-4 rounded-lg">
          <button
            onClick={() => handleSelect(1)}
            className={`${select === 1
              ? "text-blue-500 underline"
              : "text-gray-500 underline"
              }  font-medium underline-offset-4`}
          >
            Students
          </button>
          <button
            onClick={() => handleSelect(2)}
            className={`${select === 2
              ? "text-blue-500 underline"
              : "text-gray-500 underline"
              }  font-medium underline-offset-4`}
          >
            Teachers
          </button>
          <button
            onClick={() => handleSelect(3)}
            className={`${select === 3
              ? "text-blue-500 underline"
              : "text-gray-500 underline"
              }  font-medium underline-offset-4`}
          >
            Staffs
          </button>
        </div>

        {/* table */}
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
            </div>
          </div>
          <div className="flex flex-col">
            {select === 1 && (
              <UserManagementTable filter={filter} searchTerm={searchTerm} />
            )}
            {select === 2 && (
              <TeacherManagementTable filter={filter} searchTerm={searchTerm} />
            )}
            {select === 3 && (
              <StaffManagementTable filter={filter} searchTerm={searchTerm} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
