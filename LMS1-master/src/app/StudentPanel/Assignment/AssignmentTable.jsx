"use client";
import { useEffect, useState } from "react";
import ConfirmationCard from "@/Components/ConfirmationCard";
import Link from "next/link";
import { fetchAssignmentData, } from "../../../../api/assignmentapi";
import { LiaFileDownloadSolid } from "react-icons/lia";
import format from "date-fns/format";

export default function AssignmentTable({ filter, searchTerm }) {
  const [isDelete, setDelete] = useState(false);
  const [assignmentData, setAssignmentData] = useState({ assignments: [] });
  const [isLoading, setLoading] = useState(true);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAssignmentData();
        setAssignmentData(data);
      } catch (error) {
        console.error('Error fetching assignment data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openDelete = (id) => {
    setSelectedAssignmentId(id);
    setDelete(true);
  };

  const closeDelete = () => {
    setDelete(false);
    setSelectedAssignmentId(null);
  };

  const handleDelete = async () => {
    try {
      await deleteAssignmentData(selectedAssignmentId);
      setAssignmentData((prevState) => ({
        assignments: prevState.assignments.filter(
          (assignment) => assignment._id !== selectedAssignmentId
        ),
      }));
    } catch (error) {
      console.error('Error deleting assignment data:', error);
    } finally {
      closeDelete();
    }
  };

  const filteredData = assignmentData.assignments.filter(
    (item) =>
      (filter === "" || item.class === filter) &&
      (searchTerm === "" ||
        item.assignmentTitle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="w-full">
        <table className="w-full bg-white">
          <thead className="bg-blue-200 h-14 py-10">
            <tr className="text-gray-700 text-sm font-normal leading-normal">
              <th className="py-4 px-6 text-left">Sr. No</th>
              <th className="py-4 px-6 text-left">Assignment Code</th>
              <th className="py-4 px-6 text-left">Assignment Name</th>
              <th className="py-4 px-6 text-left">Description</th>
              <th className="py-4 px-6 text-left">Method</th>
              <th className="py-4 px-6 text-left">Due Date</th>
              <th className="py-4 px-6 text-left">Date & Timing</th>
              <th className="py-4 px-6 text-left">Created By</th>
              <th className="py-4 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
              >
                <td className="py-4 px-6 text-left">{index + 1}</td>
                <td className="py-4 px-6 text-left ">
                  <Link href={`/AdminDashboard/LiveClassScreen/${item.courseName}`}>
                    {item.assignmentCode}
                  </Link>
                </td>
                <td className="py-4 px-6 text-left text-blue-500 underline ">
                  {item.assignmentTitle}
                </td>
                <td className="py-4 px-6 text-left">{item.courseDescription}</td>
                <td className="py-4 px-6 text-left">{item.submissionMethod}</td>
                <td className="py-4 px-6 text-left">{format(new Date(item.dueDate), "yyyy-MM-dd")}</td>
                <td className="py-4 px-6 text-left">{format(new Date(item.date), "yyyy-MM-dd")}|{item.time}</td>
                <td className="py-4 px-6 text-left">{item.createdBy}</td>
                <td className={`py-4 px-6 text-left flex gap-2  `}>
                  <button>
                    <LiaFileDownloadSolid size={30} className="text-blue-600" />
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
          onConfirm={handleDelete} // Add this line
        />
      )}
    </>
  );
}


{/*

import Link from "next/link";
import { useState } from "react";
import { LiaFileDownloadSolid } from "react-icons/lia";

const assignmentData = [
  {
    srNo: "01",
    assignmentCode: "316606",
    assignmentName: "Dummy Name ",
    description: "Dummy Description",
    method: "Online",
    dueDate: "02-06-2024",
    dateandTime: "04-06-24 |10:00 AM",
    createdBy: "Kamlesh Kumar",
  },
  {
    srNo: "01",
    assignmentCode: "316606",
    assignmentName: "Dummy Name ",
    description: "Dummy Description",
    method: "Online",
    dueDate: "02-06-2024",
    dateandTime: "04-06-24 |10:00 AM",
    createdBy: "Kamlesh Kumar",
  },
  {
    srNo: "01",
    assignmentCode: "316606",
    assignmentName: "Dummy Name ",
    description: "Dummy Description",
    method: "Online",
    dueDate: "02-06-2024",
    dateandTime: "04-06-24 |10:00 AM",
    createdBy: "Kamlesh Kumar",
  },
  {
    srNo: "01",
    assignmentCode: "316606",
    assignmentName: "Dummy Name ",
    description: "Dummy Description",
    method: "Online",
    dueDate: "02-06-2024",
    dateandTime: "04-06-24 |10:00 AM",
    createdBy: "Kamlesh Kumar",
  },
  {
    srNo: "01",
    assignmentCode: "316606",
    assignmentName: "Dummy Name ",
    description: "Dummy Description",
    method: "Online",
    dueDate: "02-06-2024",
    dateandTime: "04-06-24 |10:00 AM",
    createdBy: "Kamlesh Kumar",
  },
  {
    srNo: "01",
    assignmentCode: "316606",
    assignmentName: "Dummy Name ",
    description: "Dummy Description",
    method: "Online",
    dueDate: "02-06-2024",
    dateandTime: "04-06-24 |10:00 AM",
    createdBy: "Kamlesh Kumar",
  },
  {
    srNo: "01",
    assignmentCode: "316606",
    assignmentName: "Dummy Name ",
    description: "Dummy Description",
    method: "Online",
    dueDate: "02-06-2024",
    dateandTime: "04-06-24 |10:00 AM",
    createdBy: "Kamlesh Kumar",
  },
  {
    srNo: "01",
    assignmentCode: "316606",
    assignmentName: "Dummy Name ",
    description: "Dummy Description",
    method: "Online",
    dueDate: "02-06-2024",
    dateandTime: "04-06-24 |10:00 AM",
    createdBy: "Kamlesh Kumar",
  },
  {
    srNo: "01",
    assignmentCode: "316606",
    assignmentName: "Dummy Name ",
    description: "Dummy Description",
    method: "Online",
    dueDate: "02-06-2024",
    dateandTime: "04-06-24 |10:00 AM",
    createdBy: "Kamlesh Kumar",
  },
  {
    srNo: "01",
    assignmentCode: "316606",
    assignmentName: "Dummy Name ",
    description: "Dummy Description",
    method: "Online",
    dueDate: "02-06-2024",
    dateandTime: "04-06-24 |10:00 AM",
    createdBy: "Kamlesh Kumar",
  },
];

export default function AssignmentTable({ filter, searchTerm }) {
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
              <th className="py-4 px-6 text-left">Assignment Code</th>
              <th className="py-4 px-6 text-left">Assignment Name</th>
              <th className="py-4 px-6 text-left">Description</th>
              <th className="py-4 px-6 text-left">Method</th>
              <th className="py-4 px-6 text-left">Due Date</th>
              <th className="py-4 px-6 text-left">Date & Timing</th>
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
                <td className="py-4 px-6 text-left ">{item.assignmentCode}</td>
                <td className="py-4 px-6 text-left text-blue-500 underline ">
                  <Link href={"/StudentPanel/Assignment/AddAssignment"}>
                    {item.assignmentName}
                  </Link>
                </td>

                <td className="py-4 px-6 text-left">{item.description}</td>
                <td className="py-4 px-6 text-left">{item.method}</td>
                <td className="py-4 px-6 text-left">{item.dueDate}</td>
                <td className="py-4 px-6 text-left">{item.dateandTime}</td>
                <td className="py-4 px-6 text-left">{item.createdBy}</td>

                <td className={`py-4 px-6 text-left flex gap-2  `}>
                  <button>
                    <LiaFileDownloadSolid size={30} className="text-blue-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
  */}
