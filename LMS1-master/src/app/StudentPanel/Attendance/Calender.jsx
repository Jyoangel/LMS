// components/Calendar.js
"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Badge } from "antd";
import dayjs from "dayjs";
import { useUser } from '@auth0/nextjs-auth0/client';

const AttendanceCalendar = () => {
  const [attendance, setAttendance] = useState({});
  const { user, isLoading } = useUser(); // Use Auth0 hook to get user info
  const today = dayjs().format("YYYY-MM-DD");

  useEffect(() => {
    if (!isLoading && !user) {
      // Redirect to login if not authenticated
      window.location.href = '/api/auth/login';
    }
  }, [user, isLoading]);

  const handleAttendanceToggle = (dateKey) => {
    if (dateKey !== today) {
      alert("You can only mark attendance for today.");
      return;
    }

    // Disable toggling if already marked as "Present"
    if (attendance[dateKey] === "Present") {
      return;
    }

    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [dateKey]: "Present",
    }));
  };

  const dateCellRender = (value) => {
    const dateKey = value.format("YYYY-MM-DD");
    const attendanceStatus = attendance[dateKey];

    let statusText;
    let statusColor;

    if (attendanceStatus === "Present") {
      statusText = "Present";
      statusColor = "green";
    } else {
      statusText = "Mark Attendance";
      statusColor = "blue";
    }

    return (
      <div
        onClick={() => handleAttendanceToggle(dateKey)}
        style={{
          cursor: dateKey === today && attendanceStatus !== "Present" ? "pointer" : "default",
          textAlign: "center",
          padding: "5px",
          borderRadius: "4px",
          backgroundColor: statusColor === "green" ? "#f6ffed" : "#e6f7ff",
          opacity: attendanceStatus === "Present" ? 0.6 : 1, // Indicate disabled state
        }}
      >
        <Badge status={statusColor} text={statusText} />
      </div>
    );
  };

  return (
    <div className="calendar-container" style={{ padding: "20px" }}>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  );
};

export default AttendanceCalendar;




{/*

import { useState } from "react";

const Calendar = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const [attendance, setAttendance] = useState({
    1: "Present",
    2: "Mark Attendance",
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">June</h2>
      </div>
      <div className="grid grid-cols-7  bg-white text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-2 font-semibold bg-blue-200 ">
            {day}
          </div>
        ))}
        {daysInMonth.map((day) => (
          <div
            key={day}
            className="h-24 border text-lg font-bold flex flex-col items-center justify-center"
          >
            <span>{day}</span>
            {attendance[day] && (
              <div
                className={`mt-2 px-2 py-1 rounded ${
                  attendance[day] === "Present" ? "bg-green-200" : "bg-blue-200"
                }`}
              >
                {attendance[day]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
*/}
