"use client";
import Successcard from "@/Components/Successcard";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/router";
import { fetchTranspotationById, updateTranspotationData } from "../../../../../../api/transpotationapi";

export default function EditTranspotation({ params }) {
    const { id } = params;
    const [isSelectOpen, setisSelectOpen] = useState(false);
    const [formData, setFormData] = useState({
        studentName: "",
        class: "",
        rollNo: "",
        fatherName: "",
        fatherContactNumber: "",
        pickupLocation: "",
        dropLocation: "",
        transportationFee: ""
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            if (id) {
                try {
                    const data = await fetchTranspotationById(id);
                    setFormData(data);
                    setIsLoading(false);
                } catch (error) {
                    setError(error.message);
                    setIsLoading(false);
                }
            }
        }
        getData();
    }, [id]);

    const openModal = () => {
        setisSelectOpen(true);
    };

    const closeModal = () => {
        setisSelectOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateTranspotationData(id, formData);
            openModal();
        } catch (error) {
            setError(error.message);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="h-screen w-full flex flex-col p-5 gap-10">
                <div className="w-full">
                    <Link href={"/AdminDashboard/Transpotation"}>
                        <button className="flex items-center justify-center gap-2">
                            <FaArrowLeftLong className="h-10 w-10 bg-gray-100 rounded-full p-2" />
                            <h1 className="text-lg font-semibold">Back</h1>
                        </button>
                    </Link>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                    <div className="w-full grid grid-cols-3 items-center gap-8">

                        {/* Student Name */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="studentName" className="text-lg font-normal text-black">
                                Student Name *
                            </label>
                            <input
                                id="studentName"
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Class */}
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="class" className="text-lg font-normal text-black">Class*</label>
                            <select
                                id="class"
                                name="class"
                                value={formData.class}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            >
                                <option value="" className="text-gray-400">
                                    Select
                                </option>
                                {[...Array(10)].map((_, index) => (
                                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                                ))}
                            </select>
                        </div>

                        {/* Roll No */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="rollNo" className="text-lg font-normal text-black">
                                Roll No *
                            </label>
                            <input
                                id="rollNo"
                                name="rollNo"
                                value={formData.rollNo}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Father Name */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="fatherName" className="text-lg font-normal text-black">
                                Father Name *
                            </label>
                            <input
                                id="fatherName"
                                name="fatherName"
                                value={formData.fatherName}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Father Contact Number */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="fatherContactNumber" className="text-lg font-normal text-black">
                                Father Contact Number *
                            </label>
                            <input
                                id="fatherContactNumber"
                                name="fatherContactNumber"
                                value={formData.fatherContactNumber}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Pickup Location */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="pickupLocation" className="text-lg font-normal text-black">
                                Pickup Location *
                            </label>
                            <input
                                id="pickupLocation"
                                name="pickupLocation"
                                value={formData.pickupLocation}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Drop Location */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="dropLocation" className="text-lg font-normal text-black">
                                Drop Location *
                            </label>
                            <input
                                id="dropLocation"
                                name="dropLocation"
                                value={formData.dropLocation}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>

                        {/* Transportation Fee */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="transportationFee" className="text-lg font-normal text-black">
                                Transportation Fee *
                            </label>
                            <input
                                id="transportationFee"
                                name="transportationFee"
                                value={formData.transportationFee}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Type here"
                                className="border border-gray-300 rounded-md w-full py-3 px-5 outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-[33%] bg-blue-400 text-white font-medium text-lg p-3 rounded-lg"
                    >
                        Update
                    </button>
                    {isSelectOpen && (
                        <Successcard
                            onClose={closeModal}
                            para={"Transpotation Updated successfully!"}
                        />
                    )}
                </form>
            </div>
        </>
    );
}
