"use client";
import { useState } from "react";
import Successcard from "@/Components/Successcard";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { addTranspotationData } from "../../../../../api/transpotationapi"; // Update the path as necessary

export default function AddTranspotation() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    rollNo: "",
    class: "",
    fatherName: "",
    fatherContactNumber: "",
    pickupLocation: "",
    dropLocation: "",
    transportationFee: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTranspotationData(formData);
      setIsSelectOpen(true);
    } catch (error) {
      console.error("Failed to add transportation data", error);
    }
  };

  const closeModal = () => {
    setIsSelectOpen(false);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col p-5 gap-10">
        <div className="w-full">
          <Link href={"/AdminDashboard/Transportation"}>
            <button className="flex items-center justify-center gap-2">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="w-full grid grid-cols-3 items-center gap-8">
            {/* Student Name */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Student Name *</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            {/* Class */}
            <div className="flex flex-col gap-3 w-full">
              <label className="text-lg font-normal text-black">Class*</label>
              <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              >
                <option value="" className="text-gray-400">
                  Select
                </option>
                {[...Array(10)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
            </div>

            {/* Roll No */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Roll No *</label>
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            {/* Father Name */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Father Name *</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            {/* Father Contact Number */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Father Contact Number *</label>
              <input
                type="text"
                name="fatherContactNumber"
                value={formData.fatherContactNumber}
                onChange={handleChange}
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            {/* Pickup Location */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Pickup Location *</label>
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            {/* Drop Location */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Drop Location *</label>
              <input
                type="text"
                name="dropLocation"
                value={formData.dropLocation}
                onChange={handleChange}
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>

            {/* Transportation Fee */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-normal text-black">Transportation Fee *</label>
              <input
                type="text"
                name="transportationFee"
                value={formData.transportationFee}
                onChange={handleChange}
                placeholder="Type here"
                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-[33%] bg-blue-400 text-white font-medium text-lg p-3 rounded-lg"
          >
            Submit
          </button>

          {isSelectOpen && (
            <Successcard
              onClose={closeModal}
              para={"Transportation data added successfully!"}
            />
          )}
        </form>
      </div>
    </>
  );
}
