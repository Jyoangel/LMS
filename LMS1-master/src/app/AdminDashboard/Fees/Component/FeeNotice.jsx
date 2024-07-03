"use client";
import Successcard from "@/Components/Successcard";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import logo from "./logo.png";

export default function FeeNotice({ onClose }) {
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
          className="h-[700px] w-[500px] border border-blue-500 bg-white rounded-lg flex flex-col gap-3 p-5"
        >
          <div className="flex flex-row items-center justify-between ">
            <h1 className="text-black text-sm font-semibold">Fees Notice</h1>
            <button onClick={onClose} className="cursor-pointer">
              <RxCrossCircled size={20} color="gray" />
            </button>
          </div>
          <div className="flex flex-row gap-5 border-b border-gray-500 pb-5">
            <Image src={logo} />
            <div className="flex flex-col gap-1">
              <h1 className="text-black text-lg font-semibold uppercase">
                Gyan Ganga Public School
              </h1>
              <p className="text-gray-400 uppercase text-sm leading-5 tracking-wider">
                piprahiyan road bhagwati pur barauli gopalganj [ Bihar ] u-dise-
                10151204303 affilation no 217122620211218101625
              </p>
            </div>
          </div>

          <form action="#" className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h1>Message</h1>
              <input
                type="text"
                placeholder="Type here"
                className=" w-full border border-gray-300 rounded-lg text-start p-3 outline-none pb-20"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1>Remark </h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className=" w-full border border-gray-300 rounded-lg p-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1>Total Dues Fees Amount </h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className=" w-full border border-gray-300 rounded-lg p-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1>Months</h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className=" w-full border border-gray-300 rounded-lg p-3"
                />
              </div>
              <button
                className="h-12 w-full bg-blue-600 text-white font-bold text-xl rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  setSuccess(true);
                }}
              >
                Send
              </button>
              {success && (
                <Successcard para={"Fee notice send successfully!"} />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
