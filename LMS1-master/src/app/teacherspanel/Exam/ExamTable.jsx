"use client";

import ConfirmationCard from "@/Components/ConfirmationCard";
import Link from "next/link";
import { useState } from "react";

const examData = [
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    examTitle: "Half Yearly",
    subject: "Math",
    examDate: "09-06-2024",
    startTime: "09:00 AM ",
    totalMarks: "100 ",
    passingMarks: "23 ",
    createdBy: "Kamlesh Kumar",
    action: { edit: "Edit", delete: "Delete" },
  },
];

export default function ExamTable({ filter, searchTerm }) {
  const [isDelete, setDelete] = useState(false);

  const openDelete = () => {
    setDelete(true);
  };

  const closeDelete = () => {
    setDelete(false);
  };

  const filteredData = examData.filter(
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
              <th className="py-4 px-6 text-left">Exam Title</th>
              <th className="py-4 px-6 text-left">Subject</th>
              <th className="py-4 px-6 text-left">Exam Date</th>
              <th className="py-4 px-6 text-left">Start Time</th>
              <th className="py-4 px-6 text-left">Total Marks</th>
              <th className="py-4 px-6 text-left">Passing Marks</th>
              <th className="py-4 px-6 text-left">Created By</th>
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
                    {item.examTitle}
                  </Link>
                </td>
                <td className="py-4 px-6 text-left ">{item.subject}</td>

                <td className="py-4 px-6 text-left">{item.examDate}</td>
                <td className="py-4 px-6 text-left">{item.startTime}</td>
                <td className="py-4 px-6 text-left">{item.totalMarks}</td>
                <td className="py-4 px-6 text-left">{item.passingMarks}</td>
                <td className="py-4 px-6 text-left">{item.createdBy}</td>

                <td className={`py-4 px-6 text-left flex gap-2  `}>
                  <Link href={"/teacherspanel/Course/CourseDetails"}>
                    <button
                      // onClick={item.action === "Due Amount" ? openNotice : openSlip}
                      className="text-blue-600"
                    >
                      {item.action.edit}
                    </button>{" "}
                  </Link>
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
