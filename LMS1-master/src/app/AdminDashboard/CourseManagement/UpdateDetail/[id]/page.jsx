import { getCourseById } from "@/app/actions/course";
import EditCourse from "./EditCourse";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
const page = async ({ params }) => {
    const id = params?.id;
    const courseInfo = await getCourseById(id);
    const courseData = courseInfo && JSON.parse(JSON.stringify(courseInfo));

    return (
        <>
            <div className="h-screen w-full flex flex-col px-5 py-10 gap-10">
                <div className="w-full">
                    <Link href={"/AdminDashboard/UserManagement"}>
                        <button className="flex items-center justify-center gap-3">
                            <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
                            <h1 className="text-lg font-semibold">Back</h1>
                        </button>
                    </Link>
                </div>
                {courseInfo && <EditCourse course={courseData} />}
            </div>
        </>
    );
};

export default page;




{/*"use client";
import Successcard from "@/Components/Successcard";
import Link from "next/link";

import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function UpdateDetail() {
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
                    <Link href={"/AdminDashboard/UserManagement"}>
                        <button className="flex items-center justify-center gap-3">
                            <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
                            <h1 className="text-lg font-semibold">Back</h1>
                        </button>
                    </Link>
                </div>

                

                <form action="#" className="flex flex-col gap-10">
                   
                    <div className="flex flex-col gap-8">
                        <h1 className="text-lg font-semibold">Course Details</h1>
                        <div className="w-full grid grid-cols-3 items-center gap-5">
                            
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Course Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Course Code*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Instructor Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Instructor Email*
                                </label>
                                <select
                                    type="text"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                >
                                    {" "}
                                    <option value="" className="text-gray-400 px">
                                        Select
                                    </option>
                                </select>
                            </div>

                           
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Start Date*
                                </label>
                                <input
                                    type="date"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    End Date *
                                </label>
                                <input
                                    type="date"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Class Days*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Class Time*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                />
                            </div>

                            
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Course Objective*
                                </label>
                                <select
                                    type="text"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                >
                                    {" "}
                                    <option value="" className="text-gray-400 px">
                                        Select
                                    </option>
                                </select>
                            </div>

                            
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Supplementary Materials*
                                </label>
                                <select
                                    type="text"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                >
                                    {" "}
                                    <option value="" className="text-gray-400 px">
                                        Select
                                    </option>
                                </select>
                            </div>

                            
                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-lg font-normal text-black">
                                    Online Resources*
                                </label>
                                <select
                                    type="text"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                >
                                    {" "}
                                    <option value="" className="text-gray-400 px">
                                        Select
                                    </option>
                                </select>
                            </div>
                        </div>{" "}
                    </div>

                    
                    <div className="flex flex-col gap-3 w-full">
                        <label className="text-lg font-normal text-black">
                            Course Description*
                        </label>
                        <textarea
                            type="text"
                            placeholder="Type here"
                            className="h-20 border border-gray-300 rounded-md w-full py-3
             px-5 outline-none "
                        ></textarea>
                    </div>

                    <div className="flex gap-5 pb-10">
                        <button
                            onsubmit={event.preventDefault()}
                            onClick={openModal}
                            className="w-[33%] bg-blue-400 text-white font-medium text-lg p-3 rounded-lg"
                        >
                            Update
                        </button>
                        <button className="w-44   text-black border border-gray-400 font-medium text-lg p-2  ">
                            Cancle
                        </button>
                    </div>
                    {isSelectOpen && (
                        <Successcard
                            onClose={closeModal}
                            para={"Course updated successfully!"}
                        />
                    )}
                </form>
            </div>
        </>
    );
}

*/}
