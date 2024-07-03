"use client";

import ConfirmationCard from "@/Components/ConfirmationCard";
import Link from "next/link";
import { useState } from "react";

const classData = [
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    class: "Class 8",
    dateAndTime: "15-06-24 | 01:PM",

    action: { edit: "Edit", delete: "Delete" },
  },
];

export default function ClassTable({ filter, searchTerm }) {
  const [isDelete, setDelete] = useState(false);

  const openDelete = () => {
    setDelete(true);
  };

  const closeDelete = () => {
    setDelete(false);
  };

  const filteredData = classData.filter(
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
              <th className="py-4 px-6 text-left">Class</th>
              <th className="py-4 px-6 text-left">Date & Time</th>

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
                    {item.class}
                  </Link>
                </td>
                <td className="py-4 px-6 text-left ">{item.dateAndTime}</td>

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
