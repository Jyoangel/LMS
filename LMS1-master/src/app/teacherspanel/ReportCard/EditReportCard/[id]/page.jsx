"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Successcard from "@/Components/Successcard";
import { fetchReportCardById, updateReportCardData } from "../../../../../../api/reportcardapi";

export default function EditReportCard({ params }) {
    const { id } = params; // Extract the id from params

    const [formData, setFormData] = useState({
        type: "",
        name: "",
        fatherName: "",
        class: "",
        session: "",
        rollNumber: "",
        dateOfBirth: "",
        numberOfSubjects: "",
        subjects: [
            { subjectName: "", marks: "" },
            { subjectName: "", marks: "" },
            { subjectName: "", marks: "" },
            { subjectName: "", marks: "" },
            { subjectName: "", marks: "" },
        ],
        classTeacher: "",
        principleSignature: "",
    });

    const [isSelectOpen, setIsSelectOpen] = useState(false);

    useEffect(() => {
        if (id) {
            fetchReportCardData(id);
        }
    }, [id]);

    const fetchReportCardData = async (id) => {
        try {
            const data = await fetchReportCardById(id);
            setFormData(data);
        } catch (error) {
            console.error("Failed to fetch report card data:", error.message);
        }
    };

    const openModal = () => {
        setIsSelectOpen(true);
    };

    const closeModal = () => {
        setIsSelectOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const updatedData = await updateReportCardData(formData._id, formData);
            console.log("Report card updated successfully:", updatedData);
            openModal();
        } catch (error) {
            console.error("Failed to update report card:", error.message);
        }
    };

    return (
        <>
            <div className="h-screen w-full flex flex-col px-5 py-10 gap-10">
                <div className="w-full">
                    <Link href="/AdminDashboard/ReportCard">
                        <button className="flex items-center justify-center gap-3">
                            <FaArrowLeft className="h-10 w-10 bg-gray-100 rounded-full p-2" />
                            <h1 className="text-lg font-semibold">Back</h1>
                        </button>
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-10" data-testid="form"  >
                    <div className="flex flex-col gap-8">
                        <div className="w-full grid grid-cols-3 gap-5">
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="type" className="text-lg font-normal text-black">Type*</label>
                                <input
                                    id="type"
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="name" className="text-lg font-normal text-black">Name*</label>
                                <input
                                    id="name"
                                    data-testid="name-input"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="fatherName" className="text-lg font-normal text-black">Father Name*</label>
                                <input
                                    id="fatherName"
                                    type="text"
                                    value={formData.fatherName}
                                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="class" className="text-lg font-normal text-black">Class*</label>
                                <input
                                    id="class"
                                    type="text"
                                    value={formData.class}
                                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="session" className="text-lg font-normal text-black">Session*</label>
                                <input
                                    id="session"
                                    type="text"
                                    value={formData.session}
                                    onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="rollNumber" className="text-lg font-normal text-black">Roll Number*</label>
                                <input
                                    id="rollNumber"
                                    type="text"
                                    value={formData.rollNumber}
                                    onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="dateOfBirth" className="text-lg font-normal text-black">Date of Birth*</label>
                                <input
                                    id="dateOfBirth"
                                    type="date"
                                    value={formData.dateOfBirth}
                                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="numberOfSubjects" className="text-lg font-normal text-black">Number Of Subjects*</label>
                                <select
                                    id="numberOfSubjects"

                                    value={formData.numberOfSubjects}
                                    onChange={(e) => setFormData({ ...formData, numberOfSubjects: e.target.value })}
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            {/* Loop through subjects based on numberOfSubjects */}
                            {formData.subjects.map((subject, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col gap-3 w-full">
                                        <label htmlFor={`subjectName-${index}`} className="text-lg font-normal text-black">Subject Name*</label>
                                        <input
                                            id={`subjectName-${index}`}
                                            data-testid={`subject-name-input-${index}`}
                                            type="text"
                                            value={subject.subjectName}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    subjects: formData.subjects.map((sub, idx) =>
                                                        idx === index ? { ...sub, subjectName: e.target.value } : sub
                                                    ),
                                                })
                                            }
                                            placeholder="Type here"
                                            className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <label htmlFor={`marks-${index}`} className="text-lg font-normal text-black">Marks*</label>
                                        <input
                                            id={`marks-${index}`}
                                            data-testid={`marks-input-${index}`}
                                            type="text"
                                            value={subject.marks}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    subjects: formData.subjects.map((sub, idx) =>
                                                        idx === index ? { ...sub, marks: e.target.value } : sub
                                                    ),
                                                })
                                            }
                                            placeholder="Type here"
                                            className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                            required
                                        />
                                    </div>
                                </React.Fragment>
                            ))}

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="classTeacher" className="text-lg font-normal text-black">Class Teacher*</label>
                                <input
                                    id="classTeacher"
                                    type="text"
                                    value={formData.classTeacher}
                                    onChange={(e) => setFormData({ ...formData, classTeacher: e.target.value })}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="principleSignature" className="text-lg font-normal text-black">Principal Signature*</label>
                                <input
                                    id="principleSignature"
                                    type="text"
                                    value={formData.principleSignature}
                                    onChange={(e) => setFormData({ ...formData, principleSignature: e.target.value })}
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button

                        type="submit"
                        className="bg-blue-500 text-white px-5 py-3 rounded-md"
                    >
                        Update
                    </button>
                </form>
            </div>
            {/* Success Modal */}
            {isSelectOpen && (
                <Successcard
                    title="Report Card Updated Successfully!"
                    description="Your changes have been successfully saved."
                    handleClose={closeModal}
                />
            )}
        </>
    );
}
