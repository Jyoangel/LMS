"use client";
import { useState } from "react";
import Successcard from "@/Components/Successcard";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { addLibraryData } from "../../../../../api/libraryapi"; // Adjust the import path according to your file structure

export default function AddLibrary() {
  const [isSelectOpen, setisSelectOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    subject: "",
    class: "",
    authorName: "",
    uploadedBy: "",
    description: "",
  });

  const openModal = () => {
    setisSelectOpen(true);
  };

  const closeModal = () => {
    setisSelectOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addLibraryData(formData);
      openModal();
    } catch (error) {
      console.error("Failed to add Library data", error);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col p-5 gap-10">
      <div className="w-full">
        <Link href={"/AdminDashboard/LibraryManage"}>
          <button className="flex items-center justify-center gap-2">
            <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
            <h1 className="text-lg font-semibold">Back</h1>
          </button>
        </Link>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="w-full grid grid-cols-3 items-center gap-8">
          {/* title */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-normal text-black">Title *</label>
            <input
              type="text"
              name="title"
              placeholder="Type here"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
            />
          </div>

          {/* subject */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-normal text-black">Subject*</label>
            <input
              name="subject"
              placeholder="Type here"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
            />

          </div>

          {/* class */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-normal text-black">Class*</label>
            <input
              name="class"
              placeholder="Type here"
              value={formData.class}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
            />

          </div>

          {/* type */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-normal text-black">Type*</label>
            <input
              name="type"
              placeholder="Type here"
              value={formData.type}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
            />

          </div>

          {/* author Name */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-normal text-black">Author Name*</label>
            <input
              type="text"
              name="authorName"
              placeholder="Type here"
              value={formData.authorName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
            />
          </div>

          {/* uploaded by */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-normal text-black">Uploaded By*</label>
            <input
              type="text"
              name="uploadedBy"
              placeholder="Type here"
              value={formData.uploadedBy}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
            />
          </div>
        </div>

        {/* description */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-lg font-normal text-black">Description *</label>
          <textarea
            name="description"
            placeholder="Type here"
            value={formData.description}
            onChange={handleChange}
            className="h-20 border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
          ></textarea>
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
            para={"Library added successfully!"}
          />
        )}
      </form>
    </div>
  );
}
