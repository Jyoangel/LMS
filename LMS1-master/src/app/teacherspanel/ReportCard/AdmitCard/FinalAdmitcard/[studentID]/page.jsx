"use client";

import React, { useState, useEffect, useRef } from "react";
import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import logo from "../../logo.png";
import { fetchAdmitCardByStudentID, fetchReportCardByStudentID, deleteAdmitCardData } from "../../../../../../../api/reportcardapi";
import { format } from "date-fns";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";


export default function FinalAdmitcard({ params, onClose }) {
  const { studentID } = params; // StudentID
  const [admitCardData, setAdmitCardData] = useState(null);
  const [reportCardData, setReportCardData] = useState(null); // For report card data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingReport, setLoadingReport] = useState(false); // To manage report card loading
  const [deleteError, setDeleteError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showAdmitCard, setShowAdmitCard] = useState(false);// To manage delete errors
  const noticeRef = useRef();

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchAdmitCardByStudentID(studentID),
      fetchReportCardByStudentID(studentID)
    ])
      .then(([admitCardData, reportCardData]) => {
        if (admitCardData.error) {
          setAdmitCardData(null);
          setError(admitCardData.error);
        } else {
          setAdmitCardData(admitCardData);
          setError(null);
        }

        if (reportCardData.error) {
          setReportCardData(null);
          setErrorMessage(reportCardData.error);
        } else {
          setReportCardData(reportCardData);
          setErrorMessage(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching report card:', error);
        setError('An unexpected error occurred while fetching the report card.');
        setLoading(false);
      });
  }, [studentID]);



  const handleFetchReportCard = () => {
    setLoadingReport(true);

    fetchReportCardByStudentID(studentID)
      .then((reportData) => {
        if (reportData.error) {
          setReportCardData(null);
          setErrorMessage(reportData.error);
        } else {
          setReportCardData(reportData);
          setErrorMessage(null);
        }
        setLoadingReport(false);
      })
      .catch((error) => {
        console.error('Error fetching report card:', error);
        setErrorMessage('An unexpected error occurred while fetching the report card.');
        setLoadingReport(false);
      });
  };


  const handleDeleteAdmitCard = () => {
    if (!admitCardData?._id) return;

    deleteAdmitCardData(admitCardData._id)
      .then(() => {
        alert('Admit card deleted successfully');
        onClose(); // Close or redirect the user after deletion
      })
      .catch((error) => {
        console.error('Error deleting admit card:', error);
        setDeleteError(error.message);
      });
  };

  const handleViewAdmitCard = () => {
    if (admitCardData) {
      setShowAdmitCard(true);
    } else {
      setErrorMessage('No admit card data available.');
    }
  };




  return (
    <>
      <div className="min-h-screen p-5">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-6">
          <Link href={"/teacherspanel/ReportCard"}>
            <button className="flex items-center justify-center gap-3 mb-4 sm:mb-0">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>
        </div>


        <div>
          <button onClick={handleViewAdmitCard} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            View Admit Card
          </button>
          {showAdmitCard && admitCardData ? (
            <>
              {/* Buttons to Add, Edit, and Delete Admit Card */}
              < div className="flex gap-4 mb-4">
                <Link href={`/teacherspanel/ReportCard/AddReportCard/${admitCardData._id}`}>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Add Report Card</button>
                </Link>
                <Link href={`/teacherspanel/ReportCard/EditAdmitCard/${admitCardData._id}`}>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Edit Admit Card</button>
                </Link>
                <button
                  onClick={handleDeleteAdmitCard}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete Admit Card
                </button>
              </div>

              <div className="w-full h-full flex ">
                <div ref={noticeRef} className="relative h-[640px] w-[700px] border border-blue-500 bg-white rounded-lg flex flex-col gap-3 p-5">
                  {/* Admit Card Info */}

                  <div className="flex flex-row gap-20">
                    <Image src={logo} alt="Logo" />
                    <h1 className="text-black text-lg font-bold">Soft Webtechs Solutions</h1>
                  </div>
                  <div className="grid grid-cols-2 w-full gap-5">
                    {/* Left Column */}
                    <div className="flex flex-col gap-5">
                      <h1 className="text-lg font-medium">Examination Roll Number: <span className="text-black text-lg font-bold">{admitCardData?.examination_roll_number}</span></h1>
                      <h1 className="text-lg font-medium">Session: <span className="text-black text-lg font-bold">{admitCardData?.studentID?.session}</span></h1>
                      <h1 className="text-lg font-medium">Student Name: <span className="text-black text-lg font-bold">{admitCardData?.studentID?.name}</span></h1>
                      <h1 className="text-lg font-medium">Start Date: <span className="text-black text-lg font-bold">{admitCardData?.startdate ? format(new Date(admitCardData?.startdate), "yyyy-MM-dd") : "N/A"}</span></h1>
                      <h1 className="text-lg font-medium">Exam Starting Date: <span className="text-black text-lg font-bold">{admitCardData?.examstarting_time}</span></h1>
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-col gap-5">
                      <h1 className="text-lg font-medium">School Name: <span className="text-black text-lg font-bold">{admitCardData?.school_name}</span></h1>
                      <h1 className="text-lg font-medium">Examination: <span className="text-black text-lg font-bold">{admitCardData?.examination}</span></h1>
                      <h1 className="text-lg font-medium">Class: <span className="text-black text-lg font-bold">{admitCardData?.studentID?.class}</span></h1>
                      <h1 className="text-lg font-medium">End Date: <span className="text-black text-lg font-bold">{admitCardData?.enddate ? format(new Date(admitCardData?.enddate), "yyyy-MM-dd") : "N/A"}</span></h1>
                      <h1 className="text-lg font-medium">Exam Ending Time: <span className="text-black text-lg font-bold">{admitCardData?.examending_time}</span></h1>
                    </div>
                  </div>
                  {/* Subject Table */}
                  <div className="flex flex-col">
                    <table className="w-full">
                      <thead>
                        <tr className="flex flex-row border border-gray-300">
                          <th className="text-black text-lg border-r border-gray-300 py-2 px-5">Sr. no</th>
                          <th className="text-black text-lg border-r border-gray-300 py-2 w-72 mx-auto">Subject Name</th>
                          <th className="text-black text-lg py-2 mx-auto">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {admitCardData?.examsubjects && admitCardData.examsubjects.length > 0 ? (
                          admitCardData.examsubjects.map((subject, index) => (
                            <tr key={index} className="flex flex-row border border-gray-300">
                              <td className="text-black text-lg border-r border-gray-300 py-2 px-5">{index + 1}.</td>
                              <td className="text-black text-lg border-r border-gray-300 py-2 w-72 mx-auto">{subject.subject}</td>
                              <td className="text-black text-lg py-2 mx-auto">{subject.examination_date ? format(new Date(subject.examination_date), "yyyy-MM-dd") : "N/A"}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3" className="text-center text-black text-lg py-2">No subjects available</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>

          ) : (
            !loading && <p>{error}</p>
          )}
        </div>

        {/* Report Card Section */}
        <div>
          <button onClick={handleFetchReportCard} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            View Report Card
          </button>
          {loadingReport && <p>Loading Report Card...</p>}
          {reportCardData ? (
            <div className=" w-full h-full flex ">
              <div
                ref={noticeRef}
                className="h-[720px] w-[700px] border border-blue-500 bg-white rounded-lg flex flex-col gap-3 p-5"
              >

                <div className="flex flex-row gap-20">
                  <Image src={logo} alt="logo" />
                  <h1 className="text-black text-lg font-bold">
                    Soft Webtechs Solutions
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full gap-5">
                  <div className="flex flex-col gap-5">
                    <h1 className="text-lg font-medium">
                      Examination Roll Number:{" "}
                      <span className="text-black text-lg font-bold">{reportCardData.rollNumber}</span>{" "}
                    </h1>
                    <h1 className="text-lg font-medium">
                      Session:{" "}
                      <span className="text-black text-lg font-bold">{reportCardData.session}</span>{" "}
                    </h1>
                    <h1 className="text-lg font-medium">
                      Student Name:{" "}
                      <span className="text-black text-lg font-bold">{reportCardData.studentID.name}</span>{" "}
                    </h1>
                    <h1 className="text-lg font-medium">
                      Percentage:{" "}
                      <span className="text-black text-lg font-bold">{reportCardData.percentage}</span>{" "}
                    </h1>

                  </div>
                  <div className="flex flex-col gap-5 ">
                    <h1 className="text-lg font-medium">
                      Examination:{" "}
                      <span className="text-black text-lg font-bold">{reportCardData.type}</span>
                    </h1>
                    <h1 className="text-lg font-medium">
                      Class: <span className="text-black text-lg font-bold">{reportCardData.studentID.class}</span>
                    </h1>
                    <h1 className="text-lg font-medium">
                      Date of Birth:{" "}
                      <span className="text-black text-lg font-bold">{reportCardData?.studentID.dateOfBirth ? format(new Date(reportCardData?.studentID.dateOfBirth), "yyyy-MM-dd") : "N/A"}</span>{" "}
                    </h1>
                    <h1 className="text-lg font-medium">
                      Status:{" "}
                      <span className="text-black text-lg font-bold">{reportCardData.status}</span>
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col">
                  <table className="w-full border border-gray-300">
                    <thead>
                      <tr className="border border-gray-300">
                        <th className="text-black text-lg border-r border-gray-300 py-2 px-5">Sr. no</th>
                        <th className="text-black text-lg border-r border-gray-300 py-2">Subject Name</th>
                        <th className="text-black text-lg py-2">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportCardData.subjects.map((subject, index) => (
                        <tr key={index} className="border border-gray-300">
                          <td className="text-black text-lg border-r border-gray-300 py-2 px-5">{index + 1}</td>
                          <td className="text-black text-lg border-r border-gray-300 py-2">{subject.subjectName}</td>
                          <td className="text-black text-lg py-2">{subject.marks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-4 flex flex-col gap-5">
                    <p className="font-bold">Remarks</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Type here"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            !loadingReport && <p>{errorMessage}</p>
          )}
        </div>

      </div >
    </>
  );
}
