"use client"

import { Calendar } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import { fetchCalendarData } from "../../../../api/calendarapi";

export default function CalendarPage() {
  const [calendarData, setCalendarData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCalendarData();
        setCalendarData(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch calendar data:", error);
      }
    }
    fetchData();
  }, []);

  const cellRender = (currentDate, info) => {
    if (info.type === 'date') {
      const formattedDate = currentDate.format("YYYY-MM-DD");
      const events = calendarData.filter(
        (event) => event.date.startsWith(formattedDate)
      );

      return (
        <div className="relative">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div key={index} className="mb-1 z-10 bg-white p-1 rounded shadow">
                <Link href={`/AdminDashboard/CalendarPage/EditDetails/${event._id}`}><span className="text-sm font-medium">{event.type}: {event.title}</span></Link>
                <br />
                <span className="text-xs">{event.startTime} - {event.endTime}</span>
              </div>
            ))
          ) : null}
          <Link href={`/AdminDashboard/CalendarPage/AddDetails?date=${formattedDate}`}>
            <button
              className={` bottom-0 right-0 text-xs bg-blue-500 text-white px-1 rounded z-20 ${selectedDate === formattedDate ? '' : 'hidden'}`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering parent cell click event
                setSelectedDate(formattedDate);
              }}
            >
              Add
            </button>
          </Link>
        </div>
      );
    }
    return info.originNode;
  };

  const handleCellClick = (value) => {
    const formattedDate = value.format("YYYY-MM-DD");
    setSelectedDate(formattedDate);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col gap-5 pl-10 pt-10">
        <div className="h-12 w-full flex flex-row items-center justify-between">
          <h1 className="text-black text-lg font-medium">Calendar</h1>
          <div className="flex flex-row gap-2">
            <h1 className="text-black text-lg font-medium">Filter</h1>
            <select className="h-8 w-28 border border-gray-500 outline-none rounded-lg p-1 ">
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className="h-12 w-full flex flex-row items-center justify-between">
          <h1 className="text-black text-lg font-semibold">June</h1>
          <div className="flex flex-row gap-1">
            <button className="h-10 w-12 bg-gray-300 rounded-md flex items-center justify-center">
              <FaAngleLeft color="black" size={25} />
            </button>

            <button className="h-10 w-12 bg-gray-300 rounded-md flex items-center justify-center ">
              <FaAngleRight color="black" size={25} />
            </button>
          </div>
        </div>
        <Calendar cellRender={cellRender} onSelect={handleCellClick} />
      </div>
    </>
  );
}



{/*import { Calendar } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function CalendarPage() {
  return (
    <>
      <div className="h-screen w-full flex flex-col gap-5 pl-10 pt-10">
        <div className="h-12 w-full flex flex-row items-center justify-between">
          <h1 className="text-black text-lg font-medium">Calendar</h1>
          <div className="flex flex-row gap-2">
            <h1 className="text-black text-lg font-medium">Filter</h1>
            <select className="h-8 w-28 border border-gray-500 outline-none rounded-lg p-1 ">
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className="h-12 w-full flex flex-row items-center justify-between">
          <h1 className="text-black text-lg font-semibold">June</h1>
          <div className="flex flex-row gap-1">
            <button className="h-10 w-12 bg-gray-300 rounded-md flex items-center justify-center">
              <FaAngleLeft color="black" size={25} />
            </button>

            <button className="h-10 w-12 bg-gray-300 rounded-md flex items-center justify-center ">
              <FaAngleRight color="black" size={25} />
            </button>
          </div>
        </div>
        <Calendar />;
      </div>
    </>
  );
}

*/}
