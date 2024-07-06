import { createNewCourse } from '@/app/actions/course'
import React from 'react'

const AddForm = () => {
    return (
        <div>
            <form action={createNewCourse} method="POST" className="flex flex-col gap-10">
                {/* Course Details */}
                <div className="flex flex-col gap-8">
                    <h1 className="text-lg font-semibold">Course Details</h1>
                    <div className="w-full grid grid-cols-3 items-center gap-5">
                        {/* Course Name* */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                Course Name*
                            </label>
                            <input
                                name="courseName"
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Course Code* */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                Course Code*
                            </label>
                            <input
                                name="courseCode"
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Instructor Name* */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                Instructor Name*
                            </label>
                            <input
                                name="primaryInstructorname"
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Instructor Email* */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                Instructor Email*
                            </label>
                            <input
                                type="email"
                                name="instructorEmail"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Start Date* */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                Start Date*
                            </label>
                            <input
                                name="startDate"
                                type="date"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* End Date* */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                End Date*
                            </label>
                            <input
                                name="endDate"
                                type="date"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Class Days* */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                Class Days*
                            </label>
                            <input
                                name="classDays"
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Class Time* */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                Class Time*
                            </label>
                            <input
                                name="classTime"
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Course Objective* */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                Course Objective*
                            </label>
                            <input
                                name="courseObjectives"
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Supplementary Materials */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                Supplementary Materials
                            </label>
                            <input
                                name="supplementaryMaterials"
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Online Resources */}
                        <div className="flex flex-col gap-3 w-full">
                            <label className="text-lg font-normal text-black">
                                Online Resources
                            </label>
                            <input
                                name="onlineResources"
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Course Description* */}
                <div className="flex flex-col gap-3 w-full">
                    <label className="text-lg font-normal text-black">
                        Course Description*
                    </label>
                    <textarea
                        name="courseDescription"
                        type="text"
                        placeholder="Type here"
                        className="h-20 border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                    ></textarea>
                </div>

                <div className="flex gap-5 pb-10">
                    <button
                        type="submit"
                        className="w-[33%] bg-blue-400 text-white font-medium text-lg p-3 rounded-lg"
                    >
                        Save
                    </button>
                    <button type="button" className="w-44 text-black border border-gray-400 font-medium text-lg p-2">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddForm;
