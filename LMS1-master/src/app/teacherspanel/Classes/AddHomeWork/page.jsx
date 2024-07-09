"use client";
import Successcard from "@/Components/Successcard";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { addHomeworkData } from "../../../../../api/homeworkapi";

export default function AddHomeWork() {
    const [isSelectOpen, setisSelectOpen] = useState(false);
    const [formData, setFormData] = useState({
        class: '',
        subjects: '',
        chapter: '',
        homework: '',
        submissionMethod: '',
        startDate: '',
        endDate: '',
        assignTo: '',
        attachments: '',
        description: ''
    });

    const openModal = () => {
        setisSelectOpen(true);
    };

    const closeModal = () => {
        setisSelectOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addHomeworkData(formData);

            openModal();
        } catch (error) {
            console.error("Failed to add exam data:", error);
            // Handle error, e.g., show an error message to the user
        }
    };
    {/*
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert dates to YYYY-MM-DD format
    const [startDay, startMonth, startYear] = formData.startDate.split("/");
    const [endDay, endMonth, endYear] = formData.endDate.split("/");

    const formattedFormData = {
      ...formData,
      startDate: `${startYear}-${startMonth}-${startDay}`,
      endDate: `${endYear}-${endMonth}-${endDay}`
    };

    console.log("Formatted Form Data before submission:", formattedFormData); // Log formatted formData

    try {
      await addHomeworkData(formattedFormData);
      openModal();
      setFormData({
        class: '',
        subjects: '',
        chapter: '',
        homework: '',
        submissionMethod: '',
        startDate: '',
        endDate: '',
        assignTo: '',
        attachments: '',
        description: ''
      });
    } catch (error) {
      console.error("Failed to add homework data:", error);
    }
  };
  */}

    return (
        <>
            <div className="h-screen w-full flex flex-col px-5 py-10 gap-10">
                <div className="w-full">
                    <Link href={"/teacherspanel/Classes"}>
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
                            {/*  Class *  */}
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Class *
                                </label>
                                <input
                                    type="text"
                                    name="class"
                                    value={formData.class}
                                    onChange={handleChange}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            {/* Subjects * */}
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Subjects *
                                </label>
                                <input
                                    type="text"
                                    name="subjects"
                                    value={formData.subjects}
                                    onChange={handleChange}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            {/* Chapter * */}
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Chapter *
                                </label>
                                <input
                                    type="text"
                                    name="chapter"
                                    value={formData.chapter}
                                    onChange={handleChange}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            {/*  Home Work * */}
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Home Work *
                                </label>
                                <input
                                    type="text"
                                    name="homework"
                                    value={formData.homework}
                                    onChange={handleChange}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            {/* Submission Method *  */}
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Submission Method*
                                </label>
                                <select
                                    name="submissionMethod"
                                    value={formData.submissionMethod}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                >
                                    <option value="" className="text-gray-400">
                                        Select
                                    </option>
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                </select>
                            </div>

                            {/*  Start Date *     */}
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Start Date *
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            {/*  End Date *     */}
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    End Date *
                                </label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            {/* Assign To */}
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Assign To*
                                </label>
                                <input
                                    type="text"
                                    name="assignTo"
                                    value={formData.assignTo}
                                    onChange={handleChange}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            {/* Attachments  */}
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Attachments*
                                </label>
                                <input
                                    type="text"
                                    name="attachments"
                                    value={formData.attachments}
                                    onChange={handleChange}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Description* */}
                    <div className="flex flex-col gap-3 w-full">
                        <label className="text-lg font-normal text-black">
                            Description*
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Type here"
                            className="h-20 border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                        ></textarea>
                    </div>

                    <div className="flex gap-5 pb-10">
                        <button
                            type="submit"
                            className="w-[33%] bg-blue-600 text-white font-medium text-lg p-3 rounded-lg"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormData({
                                class: '',
                                subjects: '',
                                chapter: '',
                                homework: '',
                                submissionMethod: '',
                                startDate: '',
                                endDate: '',
                                assignTo: '',
                                attachments: '',
                                description: ''
                            })}
                            className="w-44 text-black border border-gray-400 font-medium text-lg p-2"
                        >
                            Cancel
                        </button>
                    </div>

                    {isSelectOpen && (
                        <Successcard
                            onClose={closeModal}
                            para={"Homework created successfully!"}
                        />
                    )}
                </form>
            </div>
        </>
    );
}
