"use client";

import { useState } from "react";

const libraryData = [
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
  {
    srNo: "01",
    title: "Algebra",
    Type: "PDF",
    subject: "Mathematics",
    class: "class 8 ",
    dateAdded: "06-06-24",
    authorName: "karan Kumar",
    discription: "Lorem Ipsum is simply dummy text of the printing",
    action: "Edit",
  },
];

export default function LibraryTable({ filter, searchTerm }) {
  const filteredData = libraryData.filter(
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
              <th className="py-4 px-6 text-left">Title</th>
              <th className="py-4 px-6 text-left">Type</th>
              <th className="py-4 px-6 text-left">Subject</th>
              <th className="py-4 px-6 text-left">Class</th>
              <th className="py-4 px-6 text-left">Date Added</th>
              <th className="py-4 px-6 text-left">Author Name</th>
              <th className="py-4 px-6 text-left">Description</th>
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
                <td className="py-4 px-6 text-left">{item.title}</td>

                <td className="py-4 px-6 text-left">{item.Type}</td>
                <td className="py-4 px-6 text-left">{item.subject}</td>
                <td className="py-4 px-6 text-left">{item.class}</td>
                <td className="py-4 px-6 text-left">{item.dateAdded}</td>
                <td className="py-4 px-6 text-left">{item.authorName}</td>
                <td className="py-4 px-6 text-left w-56">{item.discription}</td>

                <button>
                  <td
                    className={`py-4 px-6 text-left text-blue-500 underline ${item.color}`}
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
