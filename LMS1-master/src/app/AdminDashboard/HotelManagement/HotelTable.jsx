"use client";

import ConfirmationCard from "@/Components/ConfirmationCard";
import Link from "next/link";
import { useState } from "react";

const hotelData = [
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    TypeofRoom: "Normal",
    floor: "Abhinav Kumar",
    zone: "8",
    dateandTime: "14-28-2024 | 10:00AM",

    action: { edit: "Edit", delete: "Delete" },
  },
];

export default function HotelTable({ filter, searchTerm }) {
  const [isDelete, setDelete] = useState(false);

  const openDelete = () => {
    setDelete(true);
  };

  const closeDelete = () => {
    setDelete(false);
  };

  const filteredData = hotelData.filter(
    (item) =>
      (filter === "" || item.class === filter) &&
      (searchTerm === "" ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className="w-full">
        <table className="w-full bg-white">
          <thead className="bg-blue-200 h-14 py-10">
            <tr className="text-gray-700 text-sm font-normal leading-normal">
              <th className="py-4 px-6 text-left">Sr. No</th>
              <th className="py-4 px-6 text-left">Type of Room</th>
              <th className="py-4 px-6 text-left">Floor</th>
              <th className="py-4 px-6 text-left">Zone</th>
              <th className="py-4 px-6 text-left">Date and Time</th>
              <th className="py-4 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 text-left">{item.srNo}</td>
                <td className="py-4 px-6 text-left text-blue-600 underline">
                  <Link href={"/AdminDashboard/LiveClassScreen/CourseName"}>
                    {item.TypeofRoom}
                  </Link>
                </td>
                <td className="py-4 px-6 text-left ">{item.floor}</td>

                <td className="py-4 px-6 text-left">{item.zone}</td>
                <td className="py-4 px-6 text-left">{item.dateandTime}</td>
                <td className="py-4 px-6 text-left">{item.discription}</td>

                <td className={`py-4 px-6 text-left flex gap-2  `}>
                  <Link href={"/AdminDashboard/CourseManagement/UpdateDetail"}>
                    <button
                      // onClick={item.action === "Due Amount" ? openNotice : openSlip}
                      className="text-blue-600"
                    >
                      {item.action.edit}
                    </button>{" "}
                  </Link>
                  <h1 className="text-gray-400">|</h1>

                  <button onClick={openDelete} className="text-red-600">
                    {item.action.delete}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDelete && (
        <ConfirmationCard
          para={"Do you really want to delete this record?"}
          onClose={closeDelete}
        />
      )}
    </>
  );
}
