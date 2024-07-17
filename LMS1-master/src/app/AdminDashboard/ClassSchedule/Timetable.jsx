// components/Timetable.js
"use client";
{/*
import React, { useEffect, useState } from "react";
import { fetchClassScheduleData } from "../../../../api/classScheduleapi";
import Link from "next/link";

const periods = [
  { period: 1, startTime: "09:00", endTime: "10:00" },
  { period: 2, startTime: "10:00", endTime: "11:00" },
  { period: 3, startTime: "11:00", endTime: "12:00" },
  { period: 4, startTime: "12:00", endTime: "01:00" },
  { period: 5, startTime: "02:00", endTime: "03:00" },
  { period: 6, startTime: "03:00", endTime: "04:00" },
  { period: 7, startTime: "04:00", endTime: "05:00" },
  { period: 8, startTime: "05:00", endTime: "06:00" },
];

export default function Timetable() {
  const [classSchedule, setClassSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchClassScheduleData();
        console.log("Fetched data:", data);
        setClassSchedule(data);
      } catch (error) {
        console.error("Failed to fetch class schedule data:", error);
      }
    };

    fetchData();
  }, []);

  const getScheduleForPeriodAndDay = (period, dayIndex) => {
    const periodTime = periods[period - 1];
    const schedule = classSchedule.find(
      (item) =>
        item.startTime === periodTime.startTime &&
        item.endTime === periodTime.endTime
    );
    console.log(`Period ${period}, Day ${dayIndex}:`, schedule);
    return schedule;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border-2 border-gray-100">
          <thead>
            <tr className="bg-blue-200">
              <th className="border-2 border-gray-100 px-4 py-2">#</th>
              <th className="border-2 border-gray-100 px-4 py-2">Monday</th>
              <th className="border-2 border-gray-100 px-4 py-2">Tuesday</th>
              <th className="border-2 border-gray-100 px-4 py-2">Wednesday</th>
              <th className="border-2 border-gray-100 px-4 py-2">Thursday</th>
              <th className="border-2 border-gray-100 px-4 py-2">Friday</th>
              <th className="border-2 border-gray-100 px-4 py-2">Saturday</th>
            </tr>
          </thead>
          <tbody>
            {periods.map((period) => (
              <tr key={period.period}>
                <td className="border-2 bg-blue-200 border-gray-100 px-4 h-28">
                  {period.period}
                </td>
                {Array.from({ length: 6 }).map((_, dayIndex) => {
                  const schedule = getScheduleForPeriodAndDay(period.period, dayIndex);
                  return (
                    <td key={dayIndex} className="border border-gray-300 px-4 py-2">
                      {schedule ? (
                        <>
                          <Link href={`/AdminDashboard/ClassSchedule/EditClass/${schedule._id}`}><div className="text-blue-600">{schedule.subject}</div></Link>
                          <div>{schedule.startTime} - {schedule.endTime}</div>
                        </>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

*/}







import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchClassScheduleData } from "../../../../api/classScheduleapi";

const Timetable = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [visibleCells, setVisibleCells] = useState({});

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const periods = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchClassScheduleData();
        console.log("Fetched Schedule Data:", data); // Debugging log
        setScheduleData(data);
      } catch (error) {
        console.error("Failed to fetch class schedule data:", error);
      }
    };
    fetchData();
  }, []);

  const handleCellClick = (day, period) => {
    setVisibleCells(prevState => ({
      ...prevState,
      [`${day}-${period}`]: !prevState[`${day}-${period}`]
    }));
  };

  const renderCell = (day, period) => {
    const entry = scheduleData.find(item => item.day === day && item.period.toString() === period.toString());
    console.log(`Rendering cell for ${day}, Period ${period}:`, entry); // Debugging log

    if (entry) {
      return (
        <>
          <Link href={`/AdminDashboard/ClassSchedule/EditClass/${entry._id}`}><div className="text-blue-600">{entry.subject}</div></Link>
          <div>{entry.startTime} - {entry.endTime}</div>
        </>
      );
    } else if (visibleCells[`${day}-${period}`]) {
      return (
        <Link href={`/AdminDashboard/ClassSchedule/CreateTimetable/${day}${period}`}>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Create</button>
        </Link>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border-2 border-gray-100">
          <thead>
            <tr className="bg-blue-200">
              <th className="border-2 border-gray-100 px-4 py-2">#</th>
              {days.map(day => (
                <th key={day} className="border-2 border-gray-100 px-4 py-2">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {periods.map(period => (
              <tr key={period}>
                <td className="border-2 bg-blue-200 border-gray-100 px-4 h-28">{period}</td>
                {days.map(day => (
                  <td
                    key={day}
                    className="border border-gray-300 px-4 py-2 cursor-pointer"
                    onClick={() => handleCellClick(day, period)}
                  >
                    {renderCell(day, period)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;













{/*
import React from "react";
import Link from "next/link";

const Timetable = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border-2 border-gray-100">
          <thead>
            <tr className="bg-blue-200">
              <th className="border-2 border-gray-100 px-4 py-2">#</th>
              <th className="border-2 border-gray-100 px-4 py-2">Monday</th>
              <th className="border-2 border-gray-100 px-4 py-2">Tuesday</th>
              <th className="border-2 border-gray-100 px-4 py-2">Wednesday</th>
              <th className="border-2 border-gray-100 px-4 py-2">Thursday</th>
              <th className="border-2 border-gray-100 px-4 py-2">Friday</th>
              <th className="border-2 border-gray-100 px-4 py-2">Saturday</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, i) => (
              <tr key={i}>
                <td className="border-2 bg-blue-200 border-gray-100 px-4 h-28">
                  {i + 1}
                </td>
                {i === 0 ? (
                  <>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="text-blue-600">English</div>
                      <div>9:00 AM - 10:00 AM</div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <Link
                        href={
                          "/AdminDashboard/ClassSchedule/CreateTimetable"
                        }
                      >
                        <button className="bg-blue-500 text-white px-3 py-1 rounded">
                          Create
                        </button>
                      </Link>
                    </td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </>
                ) : (
                  <>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
*/}
