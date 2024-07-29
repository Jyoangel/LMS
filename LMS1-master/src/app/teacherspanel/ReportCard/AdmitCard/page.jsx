"use client";


import Link from "next/link";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
//import FinalAdmitcard from "../AdmitCard/[id]/FinalAdmicard";
import { addAdmitCardData } from "../../../../../api/reportcardapi"; // Adjust this import

export default function AdmitCard() {
  const [isSelectOpen, setisSelectOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    examination_roll_number: "",
    school_name: "",
    session: "",
    examination: "",
    student_name: "",
    class: "",
    startdate: "",
    enddate: "",
    examstarting_time: "",
    examending_time: "",
    examsubjects: [{ subject: "", examination_date: "" }],
  });

  const openModal = (id) => {
    setSelectedId(id);
    setisSelectOpen(true);
  };

  const closeModal = () => {
    setisSelectOpen(false);
    setSelectedId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubjectChange = (index, e) => {
    const { name, value } = e.target;
    const newSubjects = formData.examsubjects.slice();
    newSubjects[index] = { ...newSubjects[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      examsubjects: newSubjects,
    }));
  };

  const addSubjectField = () => {
    setFormData((prevData) => ({
      ...prevData,
      examsubjects: [...prevData.examsubjects, { subject: "", examination_date: "" }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const result = await addAdmitCardData(formData);
      console.log('Server Response:', result);
      openModal();
    } catch (error) {
      console.error('Failed to add admitcard data', error);
    }
  };


  return (
    <>
      <div className="h-screen w-full flex flex-col px-5 py-10 gap-10">
        <div className="w-full">
          <Link href={"/teacherspanel/ReportCard"}>
            <button className="flex items-center justify-center gap-3">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Student Details */}
          <div className="flex flex-col gap-8">
            <div className="w-full grid grid-cols-3 items-center gap-5">
              {/* Examination Roll Number */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Examination RollNo*
                </label>
                <input
                  type="text"
                  name="examination_roll_number"
                  value={formData.examination_roll_number}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* School Name */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  School Name*
                </label>
                <input
                  type="text"
                  name="school_name"
                  value={formData.school_name}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Session */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Session*
                </label>
                <input
                  type="text"
                  name="session"
                  value={formData.session}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Examination */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Examination*
                </label>
                <input
                  type="text"
                  name="examination"
                  value={formData.examination}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Student Name */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Student Name*
                </label>
                <input
                  type="text"
                  name="student_name"
                  value={formData.student_name}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Class */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Class*</label>
                <input
                  type="text"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Start Date */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Start Date*
                </label>
                <input
                  type="date"
                  name="startdate"
                  value={formData.startdate}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* End Date */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  End Date*
                </label>
                <input
                  type="date"
                  name="enddate"
                  value={formData.enddate}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Exam Starting Time */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Exam Starting Time*
                </label>
                <input
                  type="text"
                  name="examstarting_time"
                  value={formData.examstarting_time}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              {/* Exam Ending Time */}
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Exam Ending Time*
                </label>
                <input
                  type="text"
                  name="examending_time"
                  value={formData.examending_time}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>

            <h1 className="text-black text-xl font-semibold">Add Exam Subject</h1>
            {formData.examsubjects.map((subject, index) => (
              <div key={index} className="w-full grid grid-cols-3 items-center gap-5">
                {/* Subject */}
                <div className="flex flex-col gap-3 w-full">
                  <label className="text-lg font-normal text-black">Subject*</label>
                  <input
                    type="text"
                    name="subject"
                    value={subject.subject}
                    onChange={(e) => handleSubjectChange(index, e)}
                    placeholder="Type here"
                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                  />
                </div>

                {/* Examination Date */}
                <div className="flex flex-col gap-3 w-full">
                  <label className="text-lg font-normal text-black">Examination Date*</label>
                  <input
                    type="date"
                    name="examination_date"
                    value={subject.examination_date}
                    onChange={(e) => handleSubjectChange(index, e)}
                    placeholder="Type here"
                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addSubjectField}
              className="w-[33%] bg-green-600 text-white font-medium text-lg p-3 rounded-lg"
            >
              Add Subject
            </button>
          </div>

          <button
            type="submit"
            className="w-[33%] bg-blue-600 text-white font-medium text-lg p-3 rounded-lg"
          >
            Generate Admit Card
          </button>
        </form>
      </div>

      {/* Modal 
      {isSelectOpen && <FinalAdmitcard params={{ id: selectedId }} onClose={closeModal} />}*/}
    </>
  );
}
