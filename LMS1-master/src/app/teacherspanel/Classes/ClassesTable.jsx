"use client";

import ConfirmationCard from "@/Components/ConfirmationCard";
import Link from "next/link";
import { useState } from "react";

const classData = [
  {
    srNo: "01",
    className: "Class 1",
    student: "20",
    homeWork: "Dummy Home Work",
    createDate: "05-06-24",
    dateOfSubmission: "08-06-24",
    homeWorkDone: "15",
    undoneHomeWork: "5",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    className: "Class 1",
    student: "20",
    homeWork: "Dummy Home Work",
    createDate: "05-06-24",
    dateOfSubmission: "08-06-24",
    homeWorkDone: "15",
    undoneHomeWork: "5",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    className: "Class 1",
    student: "20",
    homeWork: "Dummy Home Work",
    createDate: "05-06-24",
    dateOfSubmission: "08-06-24",
    homeWorkDone: "15",
    undoneHomeWork: "5",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    className: "Class 1",
    student: "20",
    homeWork: "Dummy Home Work",
    createDate: "05-06-24",
    dateOfSubmission: "08-06-24",
    homeWorkDone: "15",
    undoneHomeWork: "5",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    className: "Class 1",
    student: "20",
    homeWork: "Dummy Home Work",
    createDate: "05-06-24",
    dateOfSubmission: "08-06-24",
    homeWorkDone: "15",
    undoneHomeWork: "5",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    className: "Class 1",
    student: "20",
    homeWork: "Dummy Home Work",
    createDate: "05-06-24",
    dateOfSubmission: "08-06-24",
    homeWorkDone: "15",
    undoneHomeWork: "5",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    className: "Class 1",
    student: "20",
    homeWork: "Dummy Home Work",
    createDate: "05-06-24",
    dateOfSubmission: "08-06-24",
    homeWorkDone: "15",
    undoneHomeWork: "5",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    className: "Class 1",
    student: "20",
    homeWork: "Dummy Home Work",
    createDate: "05-06-24",
    dateOfSubmission: "08-06-24",
    homeWorkDone: "15",
    undoneHomeWork: "5",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    className: "Class 1",
    student: "20",
    homeWork: "Dummy Home Work",
    createDate: "05-06-24",
    dateOfSubmission: "08-06-24",
    homeWorkDone: "15",
    undoneHomeWork: "5",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    className: "Class 1",
    student: "20",
    homeWork: "Dummy Home Work",
    createDate: "05-06-24",
    dateOfSubmission: "08-06-24",
    homeWorkDone: "15",
    undoneHomeWork: "5",
    action: { edit: "Edit", delete: "Delete" },
  },
];

export default function ClassesTable({ filter, searchTerm }) {
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
              <th className="py-4 px-6 text-left">Class Name</th>
              <th className="py-4 px-6 text-left">Student</th>
              <th className="py-4 px-6 text-left">Home work</th>
              <th className="py-4 px-6 text-left">Create Date</th>
              <th className="py-4 px-6 text-left">Date of Submission</th>
              <th className="py-4 px-6 text-left">Home Work Done</th>
              <th className="py-4 px-6 text-left">Undone Home Work</th>
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
                <td className="py-4 px-6 text-left ">
                  <Link href={"/AdminDashboard/LiveClassScreen/CourseName"}>
                    {item.className}
                  </Link>
                </td>
                <td className="py-4 px-6 text-left ">{item.student}</td>

                <td className="py-4 px-6 text-left text-blue-500 underline ">
                  {item.homeWork}
                </td>
                <td className="py-4 px-6 text-left">{item.createDate}</td>
                <td className="py-4 px-6 text-left">{item.dateOfSubmission}</td>
                <td className="py-4 px-6 text-left text-blue-500 underline ">
                  {item.homeWorkDone}
                </td>
                <td className="py-4 px-6 text-left text-blue-500 underline ">
                  {item.undoneHomeWork}
                </td>

                <td className={`py-4 px-6 text-left flex gap-2  `}>
                  <Link href={"/teacherspanel/Assignment/EditDeatils"}>
                    <button>{item.action.edit}</button>{" "}
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
