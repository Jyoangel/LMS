"use client";

import { useEffect, useState } from "react";
import ConfirmationCard from "@/Components/ConfirmationCard";
import Image from "next/image";
import group from "./group.png";
import { fetchReportCardData, fetchAdmitCardData, deleteReportCardData, deleteAdmitCardData } from "../../../../api/reportcardapi";
import { format } from "date-fns/format";
import Link from "next/link";
import FinalReportcard from "../../teacherspanel/ReportCard/FinalReportCard/[id]/page";
import FinalAdmitcard from "../../teacherspanel/ReportCard/AdmitCard/[id]/FinalAdmicard";

export default function ReportCardTable({ filter, searchTerm }) {
  const [isDelete, setDelete] = useState(false);
  const [data, setData] = useState([]);
  const [deleteItem, setDeleteItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewModal, setViewModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const admitCardResponse = await fetchAdmitCardData();
        const reportCardResponse = await fetchReportCardData();

        // Combine the data
        const combinedData = [...admitCardResponse, ...reportCardResponse];

        setData(combinedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, []);

  const openDelete = (item) => {
    setDelete(true);
    setDeleteItem(item);
  };

  const closeDelete = () => {
    setDelete(false);
    setDeleteItem(null);
  };

  const handleDelete = async () => {
    try {
      if (deleteItem.ReportCard) {
        await deleteReportCardData(deleteItem._id);
      } else if (deleteItem.admitCard) {
        await deleteAdmitCardData(deleteItem._id);
      }
      setData(data.filter((item) => item._id !== deleteItem._id));
      closeDelete();
    } catch (error) {
      console.error("Failed to delete data:", error);
    }
  };

  const openViewModal = (item) => {
    setSelectedItem(item);
    setViewModal(true);
  };

  const closeViewModal = () => {
    setViewModal(false);
    setSelectedItem(null);
  };

  const filteredData = data.filter(
    (item) =>
      (filter === "" || item.class === filter) &&
      (searchTerm === "" || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className="w-full">
        <table className="w-full bg-white">
          <thead className="bg-blue-200 h-14 py-10">
            <tr className="text-gray-700 text-sm font-normal leading-normal">
              <th className="py-4 px-6 text-left">Sr. No</th>
              <th className="py-4 px-6 text-left">Report Card Name</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Class</th>
              <th className="py-4 px-6 text-left">Date & Time</th>
              <th className="py-4 px-6 text-left">Action</th>
              <th className="py-4 px-6 text-left">View</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td className="py-4 px-6 text-left">{index + 1}</td>
                <td className="py-4 px-6 text-left text-blue-600 underline">
                  {item.ReportCard || item.admitCard}
                </td>
                <td className="py-4 px-6 text-left">{item.name || item.student_name}</td>
                <td className="py-4 px-6 text-left">{item.class}</td>


                <td className="py-4 px-6 text-left">{format(new Date(item.date), "yyyy-MM-dd")}|{item.time}</td>
                <td className="py-4 px-6 text-left flex gap-2">
                  {item.admitCard && (
                    <Link href={`/AdminDashboard/ReportCard/EditAdmitCard/${item._id}`}>
                      <button className="text-blue-600">Edit</button>
                    </Link>
                  )}
                  {item.ReportCard && (
                    <Link href={`/AdminDashboard/ReportCard/EditReportCard/${item._id}`}>
                      <button className="text-blue-600">Edit</button>
                    </Link>
                  )}
                  <span className="text-gray-400">|</span>
                  <button onClick={() => openDelete(item)} className="text-red-600">
                    Delete
                  </button>
                </td>
                <td className="py-4 px-6 text-left">
                  <button onClick={() => openViewModal(item)}>
                    <Image src={group} alt="View" />
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
          onConfirm={handleDelete}
        />
      )}

      {viewModal && selectedItem && (
        selectedItem.ReportCard ? (
          <FinalReportcard onClose={closeViewModal} params={{ id: selectedItem._id }} />
        ) : (
          <FinalAdmitcard onClose={closeViewModal} params={{ id: selectedItem._id }} />
        )
      )}
    </>
  );
}

{/*
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchReportCardData } from "../../../../api/reportcardapi";
import format from "date-fns/format";

export default function ReportCardTable() {
  const [studentData, setStudentData] = useState([]);
  const [accessProvided, setAccessProvided] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchReportCardData();
        setStudentData(data.reportCards);
        setAccessProvided(Array(data.length).fill(false));
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state or alert user
      }
    }

    fetchData();
  }, []);

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
              <th className="py-4 px-6 text-left">Report Card Name</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Class</th>
              <th className="py-4 px-6 text-left">DOB</th>
              <th className="py-4 px-6 text-left">Father Name</th>
              <th className="py-4 px-6 text-left">Session</th>
              <th className="py-4 px-6 text-left">Percentage</th>
              <th className="py-4 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {studentData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
              >
                <td className="py-4 px-6 text-left flex gap-2">{index + 1}</td>
                <td className="py-4 px-6 text-left">{item.type}</td>

                <td className="py-4 px-6 text-left text-blue-600 underline">
                  {" "}

                  {item.name}

                </td>

                <td className="py-4 px-6 text-left">{item.class}</td>
                <td className="py-4 px-6 text-left">{format(new Date(item.dateOfBirth), "yyyy-MM-dd")}</td>
                <td className="py-4 px-6 text-left">{item.fatherName}</td>
                <td className="py-4 px-6 text-left">{item.session}</td>
                <td className="py-4 px-6 text-left">{item.percentage}</td>
                <td className="py-4 px-6 text-left">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

{/*
import Link from "next/link";
import { useState } from "react";

const studentData = [
  {
    srNo: "01",
    reportCardName: "Admit Card",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
  },
  {
    srNo: "01",
    reportCardName: "Admit Card",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
  },
  {
    srNo: "01",
    reportCardName: "Admit Card",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
  },
  {
    srNo: "01",
    reportCardName: "Admit Card",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
  },
  {
    srNo: "01",
    reportCardName: "Admit Card",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
  },
  {
    srNo: "01",
    reportCardName: "Admit Card",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
  },
  {
    srNo: "01",
    reportCardName: "Admit Card",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
  },
  {
    srNo: "01",
    reportCardName: "Admit Card",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
  },

  // Add more student data as needed
];

export default function ReportCardTable() {
  const [accessProvided, setAccessProvided] = useState(
    Array(studentData.length).fill(false)
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
              <th className="py-4 px-6 text-left">Report Card Name</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Class</th>
              <th className="py-4 px-6 text-left">DOB</th>
              <th className="py-4 px-6 text-left">Gender</th>
              <th className="py-4 px-6 text-left">Aadhar No</th>
              <th className="py-4 px-6 text-left">Father Name</th>
              <th className="py-4 px-6 text-left">Contact No</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {studentData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 text-left flex gap-2">{item.srNo}</td>
                <td className="py-4 px-6 text-left">{item.reportCardName}</td>

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
  */}
