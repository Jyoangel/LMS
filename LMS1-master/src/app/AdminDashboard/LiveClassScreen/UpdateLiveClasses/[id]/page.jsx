"use client";
import Successcard from "@/Components/Successcard";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { fetchLiveClassById, updateLiveClassData } from "../../../../../../api/liveclassapi"; // Adjust path as per your project

export default function UpdateLiveClasses({ params }) {
    const { id } = params;
    const [liveclassData, setLiveclassData] = useState({
        topic: "",
        section: "",
        liveRoom: "",
        date: "",
        time: "",
        duration: "",
        assignTo: "",
        noteToStudents: "",
        courseId: "",
    });
    const [isSelectOpen, setisSelectOpen] = useState(false);

    useEffect(() => {
        if (id) {
            fetchInitialData(id);
        }
    }, [id]);

    const fetchInitialData = async (id) => {
        try {
            const initialData = await fetchLiveClassById(id);
            setLiveclassData(initialData);
        } catch (error) {
            console.error("Error fetching initial data:", error.message);
            // Handle error (e.g., show error message)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLiveclassData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateLiveClassData(id, liveclassData);
            setisSelectOpen(true); // Show success modal on successful update
        } catch (error) {
            console.error("Error updating live class:", error.message);
            // Handle error (e.g., show error message)
        }
    };

    const closeModal = () => {
        setisSelectOpen(false);
    };

    return (
        <>
            <div className="h-screen w-full flex flex-col p-5 gap-10">
                <div className="w-full">
                    <Link href={"/AdminDashboard/LiveClassScreen/CourseName"}>
                        <button className="flex items-center justify-center gap-2">
                            <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
                            <h1 className="text-lg font-semibold">Back</h1>
                        </button>
                    </Link>
                </div>

                {/* form */}

                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                    <div className="w-full grid grid-cols-3 items-center gap-8">
                        {/* live classes topic */}
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Live Classes Topic *</label>
                            <input
                                type="text"
                                name="topic"
                                placeholder="Type here"
                                value={liveclassData.topic}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* section */}
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Section*</label>
                            <input
                                name="section"
                                placeholder="Type here"
                                value={liveclassData.section}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Live Room */}
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Live Room*</label>
                            <input
                                name="liveRoom"
                                placeholder="Type here"
                                value={liveclassData.liveRoom}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Date */}
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Date*</label>
                            <input
                                type="date"
                                name="date"
                                value={liveclassData.date}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* time */}
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Time*</label>
                            <input
                                type="time"
                                name="time"
                                value={liveclassData.time}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* duration */}
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Duration*</label>
                            <input
                                type="text"
                                name="duration"
                                placeholder="Type here"
                                value={liveclassData.duration}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Assign To */}
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-lg font-normal text-black">Assign To*</label>
                            <input
                                type="text"
                                name="assignTo"
                                placeholder="Type here"
                                value={liveclassData.assignTo}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                    </div>

                    {/* Note to the students */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-lg font-normal text-black">Note to the students **</label>
                        <textarea
                            name="noteToStudents"
                            placeholder="Type here"
                            value={liveclassData.noteToStudents}
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
                        <Successcard onClose={closeModal} para={" Live class updated successfully!"} />
                    )}
                </form>
            </div>
        </>
    );
}
