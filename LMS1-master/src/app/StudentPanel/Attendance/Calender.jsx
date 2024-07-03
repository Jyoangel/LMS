// components/Calendar.js
"use client";

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
