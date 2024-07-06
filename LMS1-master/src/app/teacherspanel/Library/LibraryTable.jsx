"use client";



import { useState, useEffect } from "react";
import format from "date-fns/format";
import { fetchLibraryData } from "../../../../api/assignmentapi";
// Function to fetch library data from API


export default function LibraryTable({ filter, searchTerm }) {
  const [libraryData, setLibraryData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchLibraryData();
        setLibraryData(data);
      } catch (error) {
        console.error('Failed to fetch library data:', error);
      }
    }
    fetchData();
  }, []);

  // Apply filter and search term to data
  const filteredData = libraryData.filter(
    (item) =>
      (filter === "" || item.class === filter) &&
      (searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()))
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
                key={item._id} // Assuming each library item has a unique _id
                className={`text-gray-700 text-sm font-normal leading-normal ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
              >
                <td className="py-4 px-6 text-left">{index + 1}</td>
                <td className="py-4 px-6 text-left">{item.title}</td>
                <td className="py-4 px-6 text-left">{item.type}</td>
                <td className="py-4 px-6 text-left">{item.subject}</td>
                <td className="py-4 px-6 text-left">{item.class}</td>
                <td className="py-4 px-6 text-left">{format(new Date(item.dateAdded), "yyyy-MM-dd")}</td>
                <td className="py-4 px-6 text-left">{item.authorName}</td>
                <td className="py-4 px-6 text-left w-56">{item.description}</td>
                <td className="py-4 px-6 text-left">
                  <button className="text-blue-500 underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

{/*
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
  */}
