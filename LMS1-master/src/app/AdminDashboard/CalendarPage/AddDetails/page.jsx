"use client"
import Successcard from "@/Components/Successcard";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { addCalendarData } from "../../../../../api/calendarapi"; // Adjust the import path as necessary

const AddDetails = () => {
    const [formData, setFormData] = useState({
        type: '',
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        duration: '',
        description: '',
    });
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { type, title, date, startTime, endTime, duration, description } = formData;

        if (!type || !title || !date || !startTime || !endTime || !duration || !description) {
            alert('Please fill out all the fields.');
            return; // Stop form submission if validation fails
        }
        try {
            await addCalendarData(formData);
            setSuccessMessage('Event added successfully!');
            setIsSelectOpen(true);
        } catch (error) {
            console.error('Error adding calendar data:', error);
            setSuccessMessage('Failed to add event. Please try again.');
            setIsSelectOpen(true);
        }
    };

    return (
        <>
            <div className="h-screen w-full flex flex-col p-5 gap-10">
                <div className="w-full flex flex-row justify-between">
                    <Link href={"/AdminDashboard/CalendarPage"}>
                        <button className="flex items-center justify-center gap-2">
                            <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
                            <h1 className="text-lg font-semibold">Back</h1>
                        </button>
                    </Link>
                </div>

                <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    <div className="w-full grid grid-cols-3 items-center gap-8">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Type *</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                aria-label="Type"
                            >
                                <option value="" className="text-gray-400 px">
                                    Select
                                </option>
                                <option value="Event">Event</option>
                                <option value="Exam">Exam</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                aria-label="Title"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Date *</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                aria-label="Date"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Start Time *</label>
                            <input
                                type="time"
                                name="startTime"
                                value={formData.startTime}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                aria-label="Start Time"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">End Time *</label>
                            <input
                                type="time"
                                name="endTime"
                                value={formData.endTime}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                aria-label="End Time"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Duration *</label>
                            <input
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                aria-label="Duration"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <label htmlFor="description" className="text-lg font-normal text-black">Description *</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Type here"
                            className="h-20 border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-[33%] bg-blue-600 text-white font-medium text-lg p-3 rounded-lg"
                        aria-label="Submit"
                    >
                        Submit
                    </button>

                    {isSelectOpen && (
                        <Successcard onClose={() => setIsSelectOpen(false)} para={successMessage} url={"/AdminDashboard/CalendarPage"} />
                    )}
                </form>
            </div>
        </>
    );
}

export default AddDetails;

{/*"use client";


import Successcard from "@/Components/Successcard";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { addCalendarData } from "../../../../../api/calendarapi"; // Adjust the import path as necessary

const AddDetails = () => {
    const [formData, setFormData] = useState({
        type: '',
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        duration: '',
    });
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCalendarData(formData);
            setSuccessMessage('Event added successfully!');
            setIsSelectOpen(true);
        } catch (error) {
            console.error('Error adding calendar data:', error);
            setSuccessMessage('Failed to add event. Please try again.');
            setIsSelectOpen(true);
        }
    };

    return (
        <>
            <div className="h-screen w-full flex flex-col p-5 gap-10">
                <div className="w-full flex flex-row justify-between">
                    <Link href={"/AdminDashboard/CalendarPage"}>
                        <button className="flex items-center justify-center gap-2">
                            <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
                            <h1 className="text-lg font-semibold">Back</h1>
                        </button>
                    </Link>
                </div>

                <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    <div className="w-full grid grid-cols-3 items-center gap-8">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Type *</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            >
                                <option value="" className="text-gray-400 px">
                                    Select
                                </option>
                                <option value="Event">Event</option>
                                <option value="Exam">Exam</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Date *</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Start Time *</label>
                            <input
                                type="time"
                                name="startTime"
                                value={formData.startTime}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">End Time *</label>
                            <input
                                type="time"
                                name="endTime"
                                value={formData.endTime}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Duration *</label>
                            <input
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-[33%] bg-blue-600 text-white font-medium text-lg p-3 rounded-lg"
                    >
                        Submit
                    </button>

                    {isSelectOpen && (
                        <Successcard onClose={() => setIsSelectOpen(false)} para={successMessage} />
                    )}
                </form>
            </div>
        </>
    );
}

export default AddDetails;

{/*
import Successcard from "@/Components/Successcard";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const AddDetails = () => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    return (
        <>
            <div className="h-screen w-full flex flex-col p-5 gap-10">
                <div className="w-full flex flex-row justify-between">
                    <Link href={"/AdminDashboard/CalendarPage"}>
                        <button className="flex items-center justify-center gap-2">
                            <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
                            <h1 className="text-lg font-semibold">Back</h1>
                        </button>
                    </Link>
                </div>

                <form className="flex flex-col gap-10">
                    <div className="w-full grid grid-cols-3 items-center gap-8">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Type *</label>
                            <select
                                type="text"


                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            >
                                <option value="" className="text-gray-400 px">
                                    Select
                                </option>
                                <option value="Male">Event</option>
                                <option value="Female">Exam</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Title *</label>
                            <input
                                type="text"


                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Date *</label>
                            <input
                                type="Date"


                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Start Time *</label>
                            <input
                                type="time"


                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">End Time *</label>
                            <input
                                type="time"


                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Duration *</label>
                            <input
                                type="text"


                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-[33%] bg-blue-600 text-white font-medium text-lg p-3 rounded-lg"
                    >
                        Submit
                    </button>

                    {isSelectOpen && (
                        <Successcard onClose={() => setIsSelectOpen(false)} para={" Event added successfully!"} />
                    )}
                </form>
            </div>
        </>
    );
}


export default AddDetails
*/}