"use client";



import Link from "next/link";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Successcard from "@/Components/Successcard";
import { addReportCardData } from "../../../../../api/reportcardapi"; // Adjust the import path as per your project structure

export default function AddReportCard() {
  const [isSelectOpen, setisSelectOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    fatherName: "",
    session: "",
    rollNumber: "",
    class: "",
    dateOfBirth: "",
    numberOfSubjects: 0,
    subjects: [],
    classTeacher: "",
    principleSignature: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index][name] = value;

    setFormData({
      ...formData,
      subjects: updatedSubjects,
    });
  };

  const handleNumberOfSubjectsChange = (e) => {
    const numberOfSubjects = parseInt(e.target.value, 10);
    const subjects = Array(numberOfSubjects).fill({ subjectName: "", marks: "" });
    setFormData({
      ...formData,
      numberOfSubjects,
      subjects,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Call your API function to add report card data
      const response = await addReportCardData(formData);
      console.log("Report card data added:", response); // Optional: Handle success message or redirect

      // Optionally, open success modal or handle success state
      openModal();
    } catch (error) {
      console.error("Failed to add report card data:", error);
      // Handle error state or display error message
    }
  };

  const openModal = () => {
    setisSelectOpen(true);
  };

  const closeModal = () => {
    setisSelectOpen(false);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col px-5 py-10 gap-10">
        <div className="w-full">
          <Link href={"/AdminDashboard/ReportCard"}>
            <button className="flex items-center justify-center gap-3">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Student Details */}
          <div className="grid grid-cols-2 gap-8">
            {/* Type */}
            <div className="flex flex-col gap-3">
              <label className="text-lg font-normal text-black">Type*</label>
              <input
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                required
              />

            </div>

            {/* Name */}
            <div className="flex flex-col gap-3">
              <label className="text-lg font-normal text-black">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                placeholder="Type here"
                required
              />
            </div>

            {/* Father's Name */}
            <div className="flex flex-col gap-3">
              <label className="text-lg font-normal text-black">Father Name*</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                placeholder="Type here"
                required
              />
            </div>

            {/* Session */}
            <div className="flex flex-col gap-3">
              <label className="text-lg font-normal text-black">Session*</label>
              <input
                type="text"
                name="session"
                value={formData.session}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                placeholder="Type here"
                required
              />
            </div>

            {/* Roll Number */}
            <div className="flex flex-col gap-3">
              <label className="text-lg font-normal text-black">Roll Number*</label>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                placeholder="Type here"
                required
              />
            </div>

            {/* Class */}
            <div className="flex flex-col gap-3">
              <label className="text-lg font-normal text-black">Class*</label>
              <input
                type="text"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                placeholder="Type here"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-3">
              <label className="text-lg font-normal text-black">Date of Birth*</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                required
              />
            </div>

            {/* Number of Subjects */}
            <div className="flex flex-col gap-3">
              <label className="text-lg font-normal text-black">Number Of Subjects*</label>
              <select
                name="numberOfSubjects"
                value={formData.numberOfSubjects}
                onChange={handleNumberOfSubjectsChange}
                className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                required
              >
                <option value="">Select</option>
                {[...Array(10).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Subjects */}
          <div className="grid grid-cols-2 gap-8">
            {formData.subjects.map((subject, index) => (
              <div key={index} className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Subject Name*</label>
                <input
                  type="text"
                  name="subjectName"
                  value={subject.subjectName}
                  onChange={(e) => handleSubjectChange(index, e)}
                  className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                  placeholder="Type here"
                  required
                />
                <label className="text-lg font-normal text-black">Marks*</label>
                <input
                  type="number"
                  name="marks"
                  value={subject.marks}
                  onChange={(e) => handleSubjectChange(index, e)}
                  className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                  placeholder="Type here"
                  required
                />
              </div>
            ))}
          </div>

          {/* Class Teacher */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-lg font-normal text-black">Class Teacher*</label>
              <input
                type="text"
                name="classTeacher"
                value={formData.classTeacher}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                placeholder="Add Signature"
                required
              />
            </div>

            {/* Principal Signature */}
            <div className="flex flex-col gap-3">
              <label className="text-lg font-normal text-black">Principal Signature*</label>
              <input
                type="text"
                name="principleSignature"
                value={formData.principleSignature}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3 px-5 outline-none"
                placeholder="Add Signature"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-5 rounded-md"
          >
            Submit
          </button>
        </form>

        {/* Success Modal */}
        {isSelectOpen && (
          <Successcard closeModal={closeModal} />
        )}
      </div>
    </>
  );
}

{/*"use client";
import Link from "next/link";

import Successcard from "@/Components/Successcard";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function AddReportCard() {
  const [isSelectOpen, setisSelectOpen] = useState(false);

  const openModal = () => {
    setisSelectOpen(true);
  };

  const closeModal = () => {
    setisSelectOpen(false);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col px-5 py-10 gap-10">
        <div className="w-full">
          <Link href={"/AdminDashboard/ReportCard"}>
            <button className="flex items-center justify-center gap-3">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>
        </div>



        <form action="#" className="flex flex-col gap-10">

          <div className="flex flex-col gap-8">
            <div className="w-full grid grid-cols-3 items-center gap-5">

              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Type*</label>
                <select
                  name=""
                  id=""
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                >
                  <option value="">select</option>
                </select>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Name*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Father Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Class*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Session*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Roll Number*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Date of Birth*
                </label>
                <input
                  type="date"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Number Of Subjects *
                </label>
                <select
                  name=""
                  id=""
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                >
                  <option value="">select</option>
                </select>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Marks*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Marks*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Marks*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Marks*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
             
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Marks*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
             
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Marks*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject Name*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Marks*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Class Teacher*
                </label>
                <input
                  type="text"
                  placeholder=" Add Signature"
                  className="border border-gray-300 rounded-md w-full py-3 pl-36 placeholder:text-green-400 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Principle Signature*
                </label>
                <input
                  type="text"
                  placeholder=" Add Signature"
                  className="border border-gray-300 rounded-md w-full py-3 pl-36 placeholder:text-green-400 outline-none"
                />
              </div>
            </div>{" "}
          </div>

          <div className="flex gap-5 pb-10">
            <button
              onsubmit={event.preventDefault()}
              onClick={openModal}
              className="w-[33%] bg-blue-600 text-white font-medium text-lg p-3 rounded-lg"
            >
              Send
            </button>
            <button className="w-44   text-black border border-gray-400 font-medium text-lg p-2  ">
              Cancle
            </button>
          </div>
          {isSelectOpen && (
            <Successcard
              para={"Report Card send Successfully"}
              onClose={closeModal}
            />
          )}
        </form>
      </div>
    </>
  );
}
*/}