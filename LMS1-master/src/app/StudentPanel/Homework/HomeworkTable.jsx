"use client";

import ConfirmationCard from "@/Components/ConfirmationCard";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import download from "./download.png";

const assignmentData = [
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    Homework: "Homework",
    subject: "English ",
    chapter: "Chapter 1 ",
    createDate: "05-06-24",
    dateofSubmission: "08-06-24",
    teacherName: "Kamlesh Kumar",
    attachment: "PDF",
    action: { edit: "Edit", delete: "Delete" },
  },
];

export default function HomeworkTable({ filter, searchTerm }) {
  const [isDelete, setDelete] = useState(false);

  const openDelete = () => {
    setDelete(true);
  };

  const closeDelete = () => {
    setDelete(false);
  };

  const filteredData = assignmentData.filter(
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
              <th className="py-4 px-6 text-left">Home work</th>
              <th className="py-4 px-6 text-left">Subject</th>
              <th className="py-4 px-6 text-left">Chapter</th>
              <th className="py-4 px-6 text-left">Create Date</th>
              <th className="py-4 px-6 text-left">Date of Submission</th>
              <th className="py-4 px-6 text-left">Teacher Name</th>
              <th className="py-4 px-6 text-left">Attachment</th>
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
                <td className="py-4 px-6 text-left text-blue-500 underline  ">
                  <Link href={"/StudentPanel/Homework/AddHomework"}>
                    {item.Homework}
                  </Link>
                </td>
                <td className="py-4 px-6 text-left ">{item.subject}</td>

                <td className="py-4 px-6 text-left">{item.chapter}</td>
                <td className="py-4 px-6 text-left">{item.createDate}</td>
                <td className="py-4 px-6 text-left">{item.dateofSubmission}</td>
                <td className="py-4 px-6 text-left">{item.teacherName}</td>
                <td className="py-4 px-6 text-left">{item.attachment}</td>

                <td className={`py-4 px-6 text-left flex gap-2  `}>
                  <Link href={"/teacherspanel/Assignment/EditDeatils"}>
                    <Image src={download} />
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
