"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineMail } from "react-icons/md";

import { LuPhone } from "react-icons/lu";

import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import logo from "./logo.png";
import Successcard from "@/Components/Successcard";

export default function FeeSlip({ onClose }) {
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
          className="h-[750px] w-[700px] border border-blue-500 bg-white rounded-lg flex flex-col gap-3 p-5"
        >
          <div className="flex flex-row items-center justify-between ">
            <h1 className="text-black text-sm font-semibold">Fees Slip</h1>
            <button onClick={onClose} className="cursor-pointer">
              <RxCrossCircled size={20} color="gray" />
            </button>
          </div>
          <div className="flex flex-row gap-5  pb-5">
            <Image src={logo} className="h-[80px] w-[80px]" />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="text-black text-lg font-semibold uppercase">
                  Gyan Ganga Public School
                </h1>
                <p className=" text-gray-400 font-semibold">
                  Piprahyan Road Bhagwatipur, Barauli, Gopal Ganj, (Bihar){" "}
                </p>
                <p className="text-sm text-black font-semibold">
                  Registration No- 217122620211218101625 U-Dise- 101520430
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <LuPhone size={20} color="gray" />
                  <h1 className="text-sm text-black font-semibold">
                    9999999999
                  </h1>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <MdOutlineMail size={20} color="gray" />
                  <h1 className="text-sm text-black font-semibold">
                    Example@gmail.com
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="h-[30px] w-full bg-gray-300 flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">Fee Receipt</h1>
              <h1 className="text-sm text-black font-semibold">
                Session: 2023 - 24
              </h1>
            </div>
            <div className="h-[30px] w-full bg-gray-200 flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">
                Receipt No: 4247
              </h1>
              <h1 className="text-sm text-black font-semibold">Ref No:</h1>
              <h1 className="text-sm text-black font-semibold">
                Date: 7-feb-24{" "}
              </h1>
            </div>
            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">REG. No: 362</h1>
              <h1 className="text-sm text-black font-semibold">SR No: 0</h1>
              <h1 className="text-sm text-black font-semibold">
                Class : 6 (A){" "}
              </h1>
            </div>
            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">
                Name: SAMIR ALAM
              </h1>
              <h1 className="text-sm text-black font-semibold">
                DOB: 10-Oct-2010{" "}
              </h1>
            </div>
            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">
                Father Name: AMIR ALAM
              </h1>
            </div>
            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">
                Address: PIRAHIYAN, GOPALGANJ
              </h1>
            </div>
            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">
                Fee Month: Dec, Jan
              </h1>
            </div>
          </div>
          <div className="flex flex-col border-b border-gray-500">
            <div className="h-[30px] w-full bg-gray-300 flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">Fee Type</h1>
              <h1 className="text-sm text-black font-semibold">Fee Amount</h1>
            </div>

            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">Monthly Fee</h1>
              <h1 className="text-sm text-black font-semibold">1,400 </h1>
            </div>
            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">Festive Fee</h1>
              <h1 className="text-sm text-black font-semibold">100 </h1>
            </div>
            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">Other Fee</h1>
            </div>
            <div className="h-[30px] w-full bg-gray-200 flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">Total : 1500</h1>
              <h1 className="text-sm text-black font-semibold">Dues: 0 </h1>
              <h1 className="text-sm text-black font-semibold">Total:1500</h1>
            </div>
            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black font-semibold">Paid : 1500</h1>
              <h1 className="text-sm text-black font-semibold">Balance:0</h1>
            </div>

            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black  font-semibold">
                Amount in word ( One Thousand Five Hundred Rupess Only)
              </h1>
            </div>
            <div className="h-[30px] w-full bg-white flex flex-row items-center justify-between px-5">
              <h1 className="text-sm text-black  font-semibold">
                Payment Mode: CASH Reference No:, Bank Name:, Remark: AMIR ALI
              </h1>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between px-5">
            <h1 className="text-red-500 text-sm font-semibold">Student Copy</h1>
            <h1 className="text-black text-sm font-semibold">
              Print-07-feb24 4:19:01 PM
            </h1>
            <h1 className="text-black text-sm font-semibold">
              Receipt By: BITTU KUMAR
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
