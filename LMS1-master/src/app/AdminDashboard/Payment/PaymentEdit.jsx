"use client";
import Successcard from "@/Components/Successcard";
import { useEffect, useRef, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

export default function PaymentEdit({ onClose }) {
  const [success, setSuccess] = useState(false);

  const editRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (editRef.current && !editRef.current.contains(event.target)) {
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
          ref={editRef}
          className="h-[400px] w-[450px] border border-gray-300 bg-white rounded-lg p-5 flex flex-col gap-5"
        >
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-black text-sm font-semibold">Edit</h1>
            <button role="button" onClick={onClose}>
              <RxCrossCircled color="gray" size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-sm font-semibold ">Salary</h1>
            <input
              type="text"
              placeholder="Type here"
              className="h-10 w-full text-black border border-gray-300 rounded-lg p-2 "
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-sm font-semibold ">Remark</h1>
            <input
              type="text"
              placeholder="Type here"
              className=" w-full text-black border border-gray-300 rounded-lg pb-20 p-2"
            />
          </div>
          <button
            className="h-12 w-full bg-blue-600 text-white font-bold text-xl rounded-md"
            onClick={() => {
              setSuccess(true);
            }}
          >
            Send
          </button>
          {success && (
            <Successcard
              para={"Message send was successfully! "}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </>
  );
}
