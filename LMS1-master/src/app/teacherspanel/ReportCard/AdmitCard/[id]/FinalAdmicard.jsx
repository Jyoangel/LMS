

"use client";

import React, { useState, useEffect, useRef } from "react";
import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import logo from "../logo.png";
import { fetchAdmitCardById } from "../../../../../../api/reportcardapi";
import { format } from "date-fns";

export default function FinalAdmitcard({ params, onClose }) {
  const { id } = params;
  const [admitCardData, setAdmitCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const noticeRef = useRef();

  useEffect(() => {
    fetchAdmitCardById(id)
      .then((data) => {
        setAdmitCardData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch admit card data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
        <div ref={noticeRef} className="relative h-[640px] w-[700px] border border-blue-500 bg-white rounded-lg flex flex-col gap-3 p-5">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-red-600 text-xl"
          >
            <RxCrossCircled />
          </button>
          <div className="flex flex-row gap-20">
            <Image src={logo} alt="Logo" />
            <h1 className="text-black text-lg font-bold">Soft Webtechs Solutions</h1>
          </div>
          <div className="grid grid-cols-2 w-full gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="text-lg font-medium">Examination Roll Number: <span className="text-black text-lg font-bold">{admitCardData?.examination_roll_number}</span></h1>
              <h1 className="text-lg font-medium">Session: <span className="text-black text-lg font-bold">{admitCardData?.session}</span></h1>
              <h1 className="text-lg font-medium">Student Name: <span className="text-black text-lg font-bold">{admitCardData?.student_name}</span></h1>
              <h1 className="text-lg font-medium">Start Date: <span className="text-black text-lg font-bold">{format(new Date(admitCardData?.startdate), "yyyy-MM-dd")}</span></h1>
              <h1 className="text-lg font-medium">Exam Starting Date: <span className="text-black text-lg font-bold">{admitCardData?.examstarting_time}</span></h1>
            </div>
            <div className="flex flex-col gap-5 ">
              <h1 className="text-lg font-medium">School Name: <span className="text-black text-lg font-bold">{admitCardData?.school_name}</span></h1>
              <h1 className="text-lg font-medium">Examination: <span className="text-black text-lg font-bold">{admitCardData?.examination}</span></h1>
              <h1 className="text-lg font-medium">Class: <span className="text-black text-lg font-bold">{admitCardData?.class}</span></h1>
              <h1 className="text-lg font-medium">End Date: <span className="text-black text-lg font-bold">{format(new Date(admitCardData?.enddate), "yyyy-MM-dd")}</span></h1>
              <h1 className="text-lg font-medium">Exam Ending Time: <span className="text-black text-lg font-bold">{admitCardData?.examending_time}</span></h1>
            </div>
          </div>
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
                {admitCardData?.examsubjects.map((subject, index) => (
                  <tr key={index} className="flex flex-row border border-gray-300">
                    <td className="text-black text-lg border-r border-gray-300 py-2 px-5">{index + 1}.</td>
                    <td className="text-black text-lg border-r border-gray-300 py-2 w-72 mx-auto">{subject.subject}</td>
                    <td className="text-black text-lg py-2 mx-auto">{format(new Date(subject.examination_date), "yyyy-MM-dd")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}





{/*}
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineMail } from "react-icons/md";

import { LuPhone } from "react-icons/lu";

import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import logo from "./logo.png";
import Successcard from "@/Components/Successcard";

export default function FinalAdmitcard({ onClose }) {
  const [success, setSuccess] = useState(false);
  const noticeRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (noticeRef.current && !noticeRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
        <div
          ref={noticeRef}
          className="h-[640px] w-[700px] border border-blue-500 bg-white rounded-lg flex flex-col gap-3 p-5"
        >
          <div className="flex flex-row gap-20">
            <Image src={logo} />
            <h1 className="text-black text-lg font-bold">
              Soft Webtechs Solutions
            </h1>
          </div>
          <div className="grid grid-cols-2 w-full gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="text-lg font-medium">
                Examination Roll Number :{" "}
                <span className="text-black text-lg font-bold">256</span>{" "}
              </h1>
              <h1 className="text-lg font-medium">
                Session :{" "}
                <span className="text-black text-lg font-bold">2024-2025</span>{" "}
              </h1>
              <h1 className="text-lg font-medium">
                Student Name :{" "}
                <span className="text-black text-lg font-bold">Jay Kumar</span>{" "}
              </h1>
              <h1 className="text-lg font-medium">
                Start Date :{" "}
                <span className="text-black text-lg font-bold">03-06-2024</span>{" "}
              </h1>
              <h1 className="text-lg font-medium">
                Exam Starting Date :{" "}
                <span className="text-black text-lg font-bold">10.00 AM</span>{" "}
              </h1>
            </div>
            <div className="flex flex-col gap-5 ">
              <h1 className="text-lg font-medium">
                School Name :{" "}
                <span className="text-black text-lg font-bold">
                  Soft Webtechs Solutions{" "}
                </span>
              </h1>
              <h1 className="text-lg font-medium">
                Examination :{" "}
                <span className="text-black text-lg font-bold">
                  Half Yearly{" "}
                </span>
              </h1>
              <h1 className="text-lg font-medium">
                Class : <span className="text-black text-lg font-bold">9 </span>
              </h1>
              <h1 className="text-lg font-medium">
                End Date :{" "}
                <span className="text-black text-lg font-bold">
                  13-06-2024{" "}
                </span>
              </h1>
              <h1 className="text-lg font-medium">
                Exam Ending Time :{" "}
                <span className="text-black text-lg font-bold">01.00 PM </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col   ">
            <tr className="flex flex-row  border border-gray-300">
              <td className="text-black text-lg border-r border-gray-300 py-2 px-5">
                Sr. no
              </td>
              <td className="text-black text-lg  border-r border-gray-300  py-2  w-72 mx-auto">
                Subject Name
              </td>
              <td className="text-black text-lg py-2  mx-auto ">Date</td>
            </tr>
            <tr className="flex flex-row  border border-gray-300">
              <td className="text-black text-lg border-r border-gray-300 py-2 px-[38px]">
                1.
              </td>
              <td className="text-black text-lg  border-r border-gray-300  py-2  w-72 mx-auto">
                Hindi
              </td>
              <td className="text-black text-lg py-2  mx-auto ">Date</td>
            </tr>
            <tr className="flex flex-row  border border-gray-300">
              <td className="text-black text-lg border-r border-gray-300 py-2 px-9">
                2.
              </td>
              <td className="text-black text-lg  border-r border-gray-300  py-2  w-72 mx-auto">
                English
              </td>
              <td className="text-black text-lg py-2  mx-auto ">Date</td>
            </tr>
            <tr className="flex flex-row  border border-gray-300">
              <td className="text-black text-lg border-r border-gray-300 py-2 px-9">
                3.
              </td>
              <td className="text-black text-lg  border-r border-gray-300  py-2  w-72 mx-auto">
                Maths
              </td>
              <td className="text-black text-lg py-2  mx-auto ">Date</td>
            </tr>
            <tr className="flex flex-row  border border-gray-300">
              <td className="text-black text-lg border-r border-gray-300 py-2 px-9">
                4.
              </td>
              <td className="text-black text-lg  border-r border-gray-300  py-2  w-72 mx-auto">
                Subject Name
              </td>
              <td className="text-black text-lg py-2  mx-auto ">Date</td>
            </tr>
            <tr className="flex flex-row  border border-gray-300">
              <td className="text-black text-lg border-r border-gray-300 py-2 px-9">
                5.
              </td>
              <td className="text-black text-lg  border-r border-gray-300  py-2  w-72 mx-auto">
                Subject Name
              </td>
              <td className="text-black text-lg py-2  mx-auto ">Date</td>
            </tr>
          </div>
        </div>
      </div>
    </>
  );
}
  */}
