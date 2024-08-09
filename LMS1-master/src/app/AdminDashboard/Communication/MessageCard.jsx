"use client";
import { useState, useEffect, useRef } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { sendMessages, sendSMS } from "../../../../api/api"; // Adjust this import based on your actual API function
import Successcard from "@/Components/Successcard";

export default function MessageCard({ onClose, selectedStudent }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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

  const handleSend = async () => {
    if (!subject || !message) {
      console.error("Subject and message are required");
      return;
    }

    try {
      await sendMessages(subject, message, selectedStudent);
      await sendSMS(message, selectedStudent); // Call API to send message
      setSuccess(true);
      onClose();
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
        <div
          ref={editRef}
          className="h-[400px] w-[450px] border border-gray-300 bg-white rounded-lg p-5 flex flex-col gap-5"
        >
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-black text-sm font-semibold">Message</h1>
            <button onClick={onClose}>
              <RxCrossCircled color="gray" size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-sm font-semibold">Subject</h1>
            <input
              type="text"
              placeholder="Type here"
              className="h-10 w-full text-black border border-gray-300 rounded-lg p-2"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-sm font-semibold">Message</h1>
            <textarea
              rows={4}
              placeholder="Type here"
              className="w-full text-black border border-gray-300 rounded-lg p-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className="h-12 w-full bg-blue-600 text-white font-bold text-xl rounded-md"
            onClick={handleSend}
          >
            Send
          </button>
          {success && (
            <Successcard para={"Message sent successfully!"} onClose={onClose} />
          )}
        </div>
      </div>
    </>
  );
}

{/*}
import Successcard from "@/Components/Successcard";
import React, { useState, useEffect, useRef } from "react";
import { RxCrossCircled } from "react-icons/rx";

export default function MessageCard({ onClose }) {
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
            <h1 className="text-black text-sm font-semibold">Message</h1>
            <button onClick={onClose}>
              <RxCrossCircled color="gray" size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-sm font-semibold ">Subject</h1>
            <input
              type="text"
              placeholder="Type here"
              className="h-10 w-full text-black border border-gray-300 rounded-lg p-2 "
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-sm font-semibold ">Message</h1>
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
*/}