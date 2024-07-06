"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import Successcard from "@/Components/Successcard";
import { addSExamData } from "../../../../../api/examapi"; // Update the path to where the addSExamData function is located

export default function ExamDetails() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    examTitle: "",
    subject: "",
    date: "",
    startTime: "",
    duration: "",
    instruction: "",
    totalMarks: "",
    passingMarks: "",
    uploadQuestionPaper: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addSExamData(formData);
      setIsSelectOpen(true);
    } catch (error) {
      console.error("Failed to add exam data:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col px-5 py-10 gap-10">
        <div className="w-full">
          <Link href={"/teacherspanel/Exam"}>
            <button className="flex items-center justify-center gap-3">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <div className="w-full grid grid-cols-3 items-center gap-5">
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Type*</label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Exam Title*
                </label>
                <input
                  type="text"
                  name="examTitle"
                  value={formData.examTitle}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Subject*</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Date*</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Start Time*</label>
                <input
                  type="text"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                >

                </input>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Duration*</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Instruction*</label>
                <input
                  type="text"
                  name="instruction"
                  value={formData.instruction}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Total Marks*</label>
                <input
                  type="text"
                  name="totalMarks"
                  value={formData.totalMarks}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Passing Marks*</label>
                <input
                  type="text"
                  name="passingMarks"
                  value={formData.passingMarks}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label className="text-lg font-normal text-black">Upload Question Paper*</label>
            <input
              type="file"
              name="uploadQuestionPaper"
              value={formData.uploadQuestionPaper}
              onChange={handleChange}
              placeholder="Upload"
              className="h-20 border border-gray-300 bg-gray-200 rounded-md w-full py-3 text-blue-500 px-5 outline-none"
            />
          </div>

          <div className="flex gap-5 pb-10">
            <button
              type="submit"
              className="w-[33%] bg-blue-600 text-white font-medium text-lg p-3 rounded-lg"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-44 text-black border border-gray-400 font-medium text-lg p-2"
              onClick={() => setFormData({
                type: "",
                examTitle: "",
                subject: "",
                date: "",
                startTime: "",
                duration: "",
                instruction: "",
                totalMarks: "",
                passingMarks: "",
                uploadQuestionPaper: "",
              })}
            >
              Cancel
            </button>
          </div>
          {isSelectOpen && (
            <Successcard
              onClose={() => setIsSelectOpen(false)}
              para={"Exam added successfully!"}
            />
          )}
        </form>
      </div>
    </>
  );
}


{/*
import Successcard from "@/Components/Successcard";
import Link from "next/link";

//import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import SubmitButton from "../SubmitButton";
import { addSExamData } from "../../../../../api/examapi";

export default function ExamDetails() {
  //const [isSelectOpen, setisSelectOpen] = useState(false);

  const openModal = () => {
    setisSelectOpen(true);
  };

  const closeModal = () => {
    setisSelectOpen(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col px-5 py-10 gap-10">
        <div className="w-full">
          <Link href={"/teacherspanel/Exam"}>
            <button className="flex items-center justify-center gap-3">
              <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
              <h1 className="text-lg font-semibold">Back</h1>
            </button>
          </Link>
        </div>

        

        <form action={addSExamData} className="flex flex-col gap-10">
         
          <div className="flex flex-col gap-8">
            <div className="w-full grid grid-cols-3 items-center gap-5">
              
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Type*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Exam Title*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">Date*</label>
                <input
                  type="date"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

             
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Start Time*
                </label>
                <input
                  type="text"
                  name="starttime"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />


              </div>

              
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Duration*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>

              }
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Instruction*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Total Marks*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-lg font-normal text-black">
                  Passing Maarks*
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 bg-gray-200 rounded-md w-full py-3 px-5 outline-none"
                />
              </div>
            </div>{" "}
          </div>
           {/*
          Course Description*
          <div className="w-full flex items-center justify-center">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer h-[90px] w-full bg-blue-200 border-dashed border-4  p-4 rounded-lg  flex items-center justify-center"
            >
              <div className="flex flex-col ">
                <span className="text-md text-blue-600 underline ">
                  Upload Documents/Picture
                </span>
                <span className="text-md text-blue-600 ">
                  .pdf .PNG .JPG . JPEG
                </span>
              </div>

              <input
                id="file-upload"
                type="file"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"

              />
            </label>
          </div>
          


          <div className="flex gap-5 pb-10">
            <SubmitButton title={"SUBMIT"} textColor={"text-blue-500"} />
            <button className="w-44   text-black border border-gray-400 font-medium text-lg p-2  ">
              Cancle
            </button>
          </div>
          {isSelectOpen && (
            <Successcard
              onClose={closeModal}
              para={"Course added successfully!"}
            />
          )}
        </form>
      </div>
    </>
  );
}
  */}
