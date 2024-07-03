"use client";
import Link from "next/link";
import { useState } from "react";

const reportData = [
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },
  {
    srNo: "01",
    examination: "Half Yearly",
    reportCardName: "Report Card",
    name: "Abhinav Kumar",
    class: "8",
    dof: "14-08-2002",
    session: "2024-2025",
    fatherName: "Vivek Kumar",
    Percentage: "90%",
  },

  // Add more student data as needed
];

export default function ReportcardTable() {
  const [accessProvided, setAccessProvided] = useState(
    Array(reportData.length).fill(false)
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
              <th className="py-4 px-6 text-left">Examination</th>
              <th className="py-4 px-6 text-left">Report Card Name</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Class</th>
              <th className="py-4 px-6 text-left">DOF</th>
              <th className="py-4 px-6 text-left">Session</th>
              <th className="py-4 px-6 text-left">Father Name</th>
              <th className="py-4 px-6 text-left">Percentage</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {reportData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 text-left flex gap-2">{item.srNo}</td>
                <td className="py-4 px-6 text-left">{item.examination}</td>

                <td className="py-4 px-6 text-left text-blue-600 underline">
                  {" "}
                  <Link href={"/teacherspanel/Attendance/StudentAtdDetails"}>
                    {item.reportCardName}
                  </Link>
                </td>

                <td className="py-4 px-6 text-left">{item.name}</td>
                <td className="py-4 px-6 text-left">{item.class}</td>
                <td className="py-4 px-6 text-left">{item.dof}</td>
                <td className="py-4 px-6 text-left">{item.session}</td>
                <td className="py-4 px-6 text-left">{item.fatherName}</td>
                <td className="py-4 px-6 text-left">{item.Percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
