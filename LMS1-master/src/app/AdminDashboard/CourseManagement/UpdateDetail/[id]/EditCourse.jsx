"use client";

import React, { useState } from 'react';
import { updateCourse } from '@/app/actions/course';
import Successcard from '../../../../../Components/Successcard';

export default function EditCourse({ course }) {

    const [formData, setFormData] = useState({
        id: course._id,
        courseName: course.courseName,
        courseCode: course.courseCode,
        primaryInstructorname: course.primaryInstructorname,
        instructorEmail: course.instructorEmail,
        startDate: course.schedule.startDate.slice(0, 10), // Format to 'YYYY-MM-DD'
        endDate: course.schedule.endDate.slice(0, 10), // Format to 'YYYY-MM-DD'
        classDays: course.schedule.classDays.join(', '),
        classTime: course.schedule.classTime,
        courseObjectives: course.courseObjectives,
        supplementaryMaterials: course.supplementaryMaterials,
        onlineResources: course.onlineResources,
        courseDescription: course.courseDescription,
    });

    const [isSelectOpen, setSelectOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await updateCourse(formData);
        if (response.success) {
            setSelectOpen(true);
        } else {
            console.error(response.error);
        }
    };

    const closeModal = () => {
        setSelectOpen(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="flex flex-col gap-8">
                    <h1 className="text-lg font-semibold">Course Details</h1>
                    <div className="w-full grid grid-cols-3 items-center gap-5">
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">Course Name*</label>
                            <input
                                type="text"
                                name="courseName"
                                value={formData.courseName}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">Course Code*</label>
                            <input
                                type="text"
                                name="courseCode"
                                value={formData.courseCode}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">Instructor Name*</label>
                            <input
                                type="text"
                                name="primaryInstructorname"
                                value={formData.primaryInstructorname}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">Instructor Email*</label>
                            <input
                                type="text"
                                name="instructorEmail"
                                value={formData.instructorEmail}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">Start Date*</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">End Date *</label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">Class Days*</label>
                            <input
                                type="text"
                                name="classDays"
                                value={formData.classDays}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">Class Time*</label>
                            <input
                                type="text"
                                name="classTime"
                                value={formData.classTime}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">Course Objective*</label>
                            <input
                                type="text"
                                name="courseObjectives"
                                value={formData.courseObjectives}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">Supplementary Materials*</label>
                            <input
                                type="text"
                                name="supplementaryMaterials"
                                value={formData.supplementaryMaterials}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">Online Resources*</label>
                            <input
                                type="text"
                                name="onlineResources"
                                value={formData.onlineResources}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <label className="text-lg font-normal text-black">Course Description*</label>
                    <textarea
                        name="courseDescription"
                        value={formData.courseDescription}
                        onChange={handleChange}
                        placeholder="Type here"
                        className="h-20 border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                    ></textarea>
                </div>
                <div className="flex gap-5 pb-10">
                    <button
                        type="submit"
                        className="w-[33%] bg-blue-400 text-white font-medium text-lg p-3 rounded-lg"
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        className="w-44 text-black border border-gray-400 font-medium text-lg p-2"
                    >
                        Cancel
                    </button>
                </div>
                {isSelectOpen && (
                    <Successcard
                        onClose={closeModal}
                        para={"Course updated successfully!"}
                    />
                )}
            </form>
        </>
    );
}
