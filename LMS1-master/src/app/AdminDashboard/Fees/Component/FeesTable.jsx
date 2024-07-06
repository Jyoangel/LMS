
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import FeeNotice2 from "./FeeNotice2";
import FeeSlip from "../Component/FeeSlip";
import { fetchFeeData } from "../../../../../api/api";
import format from "date-fns/format";

export default function FeesTable({ filter, searchTerm }) {
  const [feesData, setFeesData] = useState([]);
  const [totalFeesCount, setTotalFeesCount] = useState(0);
  const [totalPaidAmount, setTotalPaidAmount] = useState(0);
  const [selectedFeeId, setSelectedFeeId] = useState(null);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [isSlipOpen, setIsSlipOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const openSlip = (feeId) => {
    setSelectedFeeId(feeId);
    setIsSlipOpen(true);
  };

  const closeSlip = () => {
    setIsSlipOpen(false);
  };

  const openNotice = (feeId) => {
    setSelectedFeeId(feeId);
    setIsNoticeOpen(true);
  };

  const closeNotice = () => {
    setIsNoticeOpen(false);
  };

  const loadItems = async () => {
    try {
      const data = await fetchFeeData();
      setFeesData(data.fees);
      setTotalFeesCount(data.totalFeesCount);
      setTotalPaidAmount(data.totalPaidAmount);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const filteredData = feesData.filter(
    (item) =>
      (filter === "" || item.studentID.class === filter) &&
      (searchTerm === "" || item.studentID.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="w-full">

        <table className="w-full bg-white">
          <thead className="bg-blue-200 h-14 py-10">
            <tr className="text-gray-700 text-sm font-normal leading-normal">
              <th className="py-4 px-6 text-left">Sr. No</th>
              <th className="py-4 px-6 text-left">Student Id</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Class</th>
              <th className="py-4 px-6 text-left">DOB</th>
              <th className="py-4 px-6 text-left">Gender</th>
              <th className="py-4 px-6 text-left">Aadhar No</th>
              <th className="py-4 px-6 text-left">Father Name</th>
              <th className="py-4 px-6 text-left">Contact No</th>
              <th className="py-4 px-6 text-left">Paid Amount</th>
              <th className="py-4 px-6 text-left">Due Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td className="py-4 px-6 text-left">{index + 1}</td>
                <td className="py-4 px-6 text-left">{item.studentID.studentID}</td>
                <td className="py-4 px-6 text-left text-blue-600 underline">
                  <Link href={`/AdminDashboard/Fees/FeeDetails/${item.studentID.studentID}`}>
                    {item.studentID.name}
                  </Link>
                </td>
                <td className="py-4 px-6 text-left">{item.studentID.class}</td>
                <td className="py-4 px-6 text-left">{format(new Date(item.studentID.dateOfBirth), "yyyy-MM-dd")}</td>
                <td className="py-4 px-6 text-left">{item.studentID.gender}</td>
                <td className="py-4 px-6 text-left">{item.studentID.aadharNumber}</td>
                <td className="py-4 px-6 text-left">{item.studentID.parent.fatherName}</td>
                <td className="py-4 px-6 text-left">{item.studentID.contactNumber}</td>
                <td className="py-4 px-6 text-left text-green-600 underline">
                  <button onClick={() => openSlip(item._id)}>View Fee Slip</button>
                </td>
                <td className="py-4 px-6 text-left text-red-500 underline">
                  <button onClick={() => openNotice(item._id)}>View Due Notice</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isNoticeOpen && <FeeNotice2 onClose={closeNotice} feeId={selectedFeeId} />}
      {isSlipOpen && <FeeSlip onClose={closeSlip} feeId={selectedFeeId} />}
    </>
  );
}
{/*
import Link from "next/link";
import { useState } from "react";
import FeeNotice2 from "./FeeNotice2";
import FeeSlip from "./FeeSlip";

const feesData = [
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Paid Amount",
    color: { bg: "bg-gray-100", text: "text-green-600" },
  },
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Due Amount",
    color: { bg: "bg-gray-100", text: "text-orange-400" },
  },

  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Paid Amount",
    color: { bg: "bg-gray-100", text: "text-green-600" },
  },
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Due Amount",
    color: { bg: "bg-gray-100", text: "text-orange-400" },
  },

  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Paid Amount",
    color: { bg: "bg-gray-100", text: "text-green-600" },
  },
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Due Amount",
    color: { bg: "bg-gray-100", text: "text-orange-400" },
  },

  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Paid Amount",
    color: { bg: "bg-gray-100", text: "text-green-600" },
  },
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Due Amount",
    color: { bg: "bg-gray-100", text: "text-orange-400" },
  },

  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Paid Amount",
    color: { bg: "bg-gray-100", text: "text-green-600" },
  },
  {
    srNo: "01",
    StudentId: "316606",
    name: "Abhinav Kumar",
    class: "8",
    DOF: "14-08-2002",
    Gender: "Male",
    aadharNo: "895442252657",
    fatherName: "Vivek Kumar",
    contactNo: "9999999999",
    action: "Due Amount",
    color: { bg: "bg-gray-100", text: "text-orange-400" },
  },

  // Add more student data as needed
];

export default function FeesTable({ filter, searchTerm }) {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [isSlipOpen, setIsSlipOpen] = useState(false);

  const openSlip = () => {
    setIsSlipOpen(true);
  };

  const closeSlip = () => {
    setIsSlipOpen(false);
  };

  const openNotice = () => {
    setIsNoticeOpen(true);
  };

  const closeNotice = () => {
    setIsNoticeOpen(false);
  };

  const filteredData = feesData.filter(
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
              <th className="py-4 px-6 text-left">Student Id</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Class</th>
              <th className="py-4 px-6 text-left">DOB</th>
              <th className="py-4 px-6 text-left">Gender</th>
              <th className="py-4 px-6 text-left">Aadhar No</th>
              <th className="py-4 px-6 text-left">Father Name</th>
              <th className="py-4 px-6 text-left">Contact No</th>
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
                <td className="py-4 px-6 text-left">{item.StudentId}</td>
                <td className="py-4 px-6 text-left text-blue-600 underline">
                  <Link href={"/AdminDashboard/Fees/FeeDetails"}>
                    {item.name}
                  </Link>
                </td>

                <td className="py-4 px-6 text-left">{item.class}</td>
                <td className="py-4 px-6 text-left">{item.DOF}</td>
                <td className="py-4 px-6 text-left">{item.Gender}</td>
                <td className="py-4 px-6 text-left">{item.aadharNo}</td>
                <td className="py-4 px-6 text-left">{item.fatherName}</td>
                <td className="py-4 px-6 text-left">{item.contactNo}</td>
                <button
                  onClick={item.action === "Due Amount" ? openNotice : openSlip}
                >
                  <td className={`py-4 px-6 text-left ${item.color.text}`}>
                    {item.action}
                  </td>
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isNoticeOpen && <FeeNotice2 onClose={closeNotice} />}
      {isSlipOpen && <FeeSlip onClose={closeSlip} />}
    </>
  );
}
  */}
