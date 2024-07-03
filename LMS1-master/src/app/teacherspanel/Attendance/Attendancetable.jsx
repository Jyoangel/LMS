"use client";
import Link from "next/link";
import { useState } from "react";

const attendanceData = [
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Present",
    color: { bg: "bg-gray-100", text: "text-green-600" },
  },
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Absent",
    color: { bg: "bg-gray-100", text: "text-orange-400" },
  },

  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Present",
    color: { bg: "bg-gray-100", text: "text-green-600" },
  },
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Absent",
    color: { bg: "bg-gray-100", text: "text-orange-400" },
  },

  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Present",
    color: { bg: "bg-gray-100", text: "text-green-600" },
  },
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Absent",
    color: { bg: "bg-gray-100", text: "text-orange-400" },
  },

  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Present",
    color: { bg: "bg-gray-100", text: "text-green-600" },
  },
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Absent",
    color: { bg: "bg-gray-100", text: "text-orange-400" },
  },

  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Present",
    color: { bg: "bg-gray-100", text: "text-green-600" },
  },
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Absent",
    color: { bg: "bg-gray-100", text: "text-orange-400" },
  },

  // Add more student data as needed
];

export default function Attendancetable() {
  const [accessProvided, setAccessProvided] = useState(
    Array(attendanceData.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newAccessProvided = [...accessProvided];
    newAccessProvided[index] = !newAccessProvided[index];
    setAccessProvided(newAccessProvided);
  };
  return (
    <>
      <div className="w-full">
        <table className="w-full bg-white">
          <thead className="bg-blue-200 h-14 py-10">
            <tr className="text-gray-700 text-sm font-normal leading-normal">
              <th className="py-4 px-6 text-left flex gap-2">Sr. No</th>
              <th className="py-4 px-6 text-left">Student Id</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Class</th>
              <th className="py-4 px-6 text-left">DOB</th>
              <th className="py-4 px-6 text-left">Gender</th>
              <th className="py-4 px-6 text-left">Aadhar No</th>
              <th className="py-4 px-6 text-left">Father Name</th>
              <th className="py-4 px-6 text-left">Contact No</th>
              <th className="py-4 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {attendanceData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 text-left flex gap-2">{item.srNo}</td>
                <td className="py-4 px-6 text-left">{item.StudentId}</td>

                <td className="py-4 px-6 text-left text-blue-600 underline">
                  {" "}
                  <Link href={"/teacherspanel/Attendance/StudentAtdDetails"}>
                    {item.name}
                  </Link>
                </td>

                <td className="py-4 px-6 text-left">{item.class}</td>
                <td className="py-4 px-6 text-left">{item.DOF}</td>
                <td className="py-4 px-6 text-left">{item.Gender}</td>
                <td className="py-4 px-6 text-left">{item.aadharNo}</td>
                <td className="py-4 px-6 text-left">{item.fatherName}</td>
                <td className="py-4 px-6 text-left">{item.contactNo}</td>
                <button>
                  <td
                    className={`py-4 px-6 text-left underline ${item.color.text}`}
                  >
                    {item.action}
                  </td>
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
