"use client";
import ConfirmationCard from "@/Components/ConfirmationCard";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchStaffData, deleteStaffData } from "../../../../api/staffapi";
import { format } from "date-fns";

export default function TeacherManagementTable({ filter, searchTerm }) {
  const [data, setData] = useState({ staff: [] });
  const [isDelete, setDelete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [staffToDelete, setStaffToDelete] = useState(null);

  const openDelete = (id) => {
    setStaffToDelete(id);
    setDelete(true);
  };

  const closeDelete = () => {
    setStaffToDelete(null);
    setDelete(false);
  };

  const handleDelete = async () => {
    try {
      await deleteStaffData(teacherToDelete);
      loadItems();
      closeDelete();
    } catch (error) {
      console.error("Failed to delete student data:", error);
    }
  };

  const loadItems = async () => {
    try {
      const data = await fetchStaffData();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const filteredData = data.staff.filter(
    (item) =>
      (filter === "" || item.class === filter) &&
      (searchTerm === "" || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="w-full">
        <table className="w-full bg-white">
          <thead className="bg-blue-200 h-14 py-10">
            <tr className="text-gray-700 text-sm font-normal leading-normal">
              <th className="py-4 px-6 text-left">Sr. No</th>
              <th className="py-4 px-6 text-left">Staff Id</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Email</th>
              <th className="py-4 px-6 text-left">DOB</th>
              <th className="py-4 px-6 text-left">Gender</th>
              <th className="py-4 px-6 text-left">Aadhar No</th>
              <th className="py-4 px-6 text-left">Position</th>
              <th className="py-4 px-6 text-left">Contact No</th>
              <th className="py-4 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
              >
                <td className="py-4 px-6 text-left">{index + 1}</td>
                <td className="py-4 px-6 text-left">{item.staffID}</td>
                <td className="py-4 px-6 text-left text-blue-600 underline">
                  <Link href={`/AdminDashboard/Fees/FeeDetails/`}>{item.name}</Link>
                </td>
                <td className="py-4 px-6 text-left">{item.email}</td>
                <td className="py-4 px-6 text-left">{format(new Date(item.dateOfBirth), "yyyy-MM-dd")}</td>
                <td className="py-4 px-6 text-left">{item.gender}</td>
                <td className="py-4 px-6 text-left">{item.aadharNumber}</td>
                <td className="py-4 px-6 text-left">{item.position}</td>
                <td className="py-4 px-6 text-left">{item.contactNumber}</td>
                <td className="py-4 px-6 text-left flex gap-2">
                  <button className="text-blue-600">
                    <Link href={`/AdminDashboard/UserManagement/UpdateDetails/${item.studentID}`}>
                      Edit
                    </Link>
                  </button>
                  <h1 className="text-gray-400">|</h1>
                  <button onClick={() => openDelete(item._id)} className="text-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDelete && (
        <ConfirmationCard
          para={"Do you really want to delete this record?"}
          onConfirm={handleDelete}
          onClose={closeDelete}
        />
      )}
    </>
  );
}
