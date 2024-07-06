"use client"

import { useState, useEffect } from "react";
import { Calendar } from "antd";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

import { fetchStudentById } from "../../../../../../api/api";
import format from "date-fns/format";



export default function StudentAtdDetails({ params }) {
    const { studentID } = params;
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        const getStudentData = async () => {
            const data = await fetchStudentById(studentID);
            setStudentData(data);
        };

        getStudentData();
    }, [studentID]);

    if (!studentData) {
        return <div>Loading...</div>; // Render a loading state while fetching data
    }

    return (
        <>
            <div className="h-auto w-full flex flex-col p-5 gap-10">
                {/* buttons */}
                <div className="flex w-full justify-between items-center ">
                    <Link href={"/teacherspanel/Attendance"}>
                        <button className="flex items-center justify-center gap-2">
                            <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
                            <h1 className="text-lg font-semibold">Back</h1>
                        </button>
                    </Link>
                    <div className="flex gap-3 items-center justify-center">
                        <div className="flex items-center justify-center gap-1">
                            <button className="text-blue-400 text-lg font-medium">
                                Edit
                            </button>{" "}
                            <h1 className="text-gray-300 ">|</h1>
                            <button className="text-red-500 text-lg font-medium">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                {/* student details */}
                <div className="w-full flex flex-col rounded-t-xl overflow-hidden">
                    <div className="w-full h-12 px-5 flex items-center bg-blue-200">
                        <h1 className="text-blue-600 font-semibold ">
                            {studentData.name}
                        </h1>
                    </div>

                    <div className="p-5 w-full h-auto flex flex-col gap-10 border border-gray-300 rounded-b-lg py-5">
                        {/* student name */}
                        <div className="flex flex-col gap-5 w-full">
                            <h1 className="text-black font-bold text-lg">Student Details</h1>

                            <div className="w-full grid grid-cols-5 items-center justify-between gap-5">
                                {/* Form Number */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Form Number
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.formNumber}
                                    </h1>
                                </div>

                                {/* Admission Number */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Admission Number
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.admissionNumber}
                                    </h1>
                                </div>

                                {/* Name */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">Name</h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.name}
                                    </h1>
                                </div>

                                {/* Class */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">Class</h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.class}
                                    </h1>
                                </div>

                                {/* Date of Birth */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Date of Birth
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {format(new Date(studentData.dateOfBirth), "yyyy-MM-dd")}
                                    </h1>
                                </div>

                                {/* Gender */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">Gender</h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.gender}
                                    </h1>
                                </div>

                                {/* Nationality */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Nationality
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.nationality}
                                    </h1>
                                </div>

                                {/* Mother Tongue */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Mother Tongue
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.motherTongue}
                                    </h1>
                                </div>

                                {/* Religion */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Religion
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.religion}
                                    </h1>
                                </div>

                                {/* Caste */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">Caste</h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.caste}
                                    </h1>
                                </div>

                                {/* Blood Group */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Blood Group
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.bloodGroup}
                                    </h1>
                                </div>

                                {/* Aadhar Number */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Aadhar Number
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.aadharNumber}
                                    </h1>
                                </div>

                                {/* Contact Number */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Contact Number
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.contactNumber}
                                    </h1>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-gray-400 font-normal text-lg">Address </h1>
                                <h1 className="text-black font-bold text-lg">
                                    {studentData.address}
                                </h1>
                            </div>

                            {/* Parent Details */}
                            <h1 className="text-black font-bold text-lg">Parent Details</h1>

                            <div className="w-full grid grid-cols-5 items-center justify-between gap-5">
                                {/* Father Name */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Father Name
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.parent.fatherName}
                                    </h1>
                                </div>

                                {/* Contact Number */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Contact Number
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.parent.fatherContactNumber}
                                    </h1>
                                </div>

                                {/* Aadhar Number */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Aadhar Number
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.parent.fatherAadharNumber}
                                    </h1>
                                </div>

                                {/* Occupation */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Occupation
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.parent.fatherOccupation}
                                    </h1>
                                </div>

                                {/* Annual Income */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Annual Income
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.parent.annualIncome}
                                    </h1>
                                </div>

                                {/* Mother Name */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Mother Name
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.parent.motherName}
                                    </h1>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-gray-400 font-normal text-lg">Address </h1>
                                <h1 className="text-black font-bold text-lg">
                                    {studentData.parent.parentAddress}
                                </h1>
                            </div>

                            {/* Local Guardian Details  */}
                            <h1 className="text-black font-bold text-lg">
                                Local Guardian Details{" "}
                            </h1>

                            <div className="w-full grid grid-cols-5 items-center justify-between gap-5">
                                {/* Guardian name */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Guardian name{" "}
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.localGuardian.guardianName}
                                    </h1>
                                </div>

                                {/* Relation With Student */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Relation With Student{" "}
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.localGuardian.relationWithStudent}
                                    </h1>
                                </div>

                                {/* Contact Number */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Contact Number{" "}
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.localGuardian.guardianContactNumber}
                                    </h1>
                                </div>

                                {/* Aadhar Number */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Aadhar Number{" "}
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.localGuardian.guardianAadharNumber}
                                    </h1>
                                </div>

                                {/* Occupation*/}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-400 font-normal text-lg">
                                        Occupation{" "}
                                    </h1>
                                    <h1 className="text-black font-bold text-lg">
                                        {studentData.localGuardian.guardianOccupation}
                                    </h1>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-gray-400 font-normal text-lg">Address </h1>
                                <h1 className="text-black font-bold text-lg">
                                    {studentData.localGuardian.guardianAddress}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <Calendar />
            </div>
        </>
    );
}
