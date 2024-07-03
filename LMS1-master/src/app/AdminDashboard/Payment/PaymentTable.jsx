"use client";

import { useState } from "react";
import PaymentEdit from "./PaymentEdit";

const paymentData = [
  {
    srNo: "01",
    name: "Kamlesh Kumar",
    assignClass: "class 8",
    aadharNo: "8954 ",
    subject: "English",
    contactNo: "9999 ",
    fatherName: "Vivek Kumar",
    salary: "₹10,000",
    status: "Due Amount",
    action: "Edit",
  },
  {
    srNo: "01",
    name: "Kamlesh Kumar",
    assignClass: "class 8",
    aadharNo: "8954 ",
    subject: "English",
    contactNo: "9999 ",
    fatherName: "Vivek Kumar",
    salary: "₹10,000",
    status: "Due Amount",
    action: "Edit",
  },
  {
    srNo: "01",
    name: "Kamlesh Kumar",
    assignClass: "class 8",
    aadharNo: "8954 ",
    subject: "English",
    contactNo: "9999 ",
    fatherName: "Vivek Kumar",
    salary: "₹10,000",
    status: "Due Amount",
    action: "Edit",
  },
  {
    srNo: "01",
    name: "Kamlesh Kumar",
    assignClass: "class 8",
    aadharNo: "8954 ",
    subject: "English",
    contactNo: "9999 ",
    fatherName: "Vivek Kumar",
    salary: "₹10,000",
    status: "Due Amount",
    action: "Edit",
  },
  {
    srNo: "01",
    name: "Kamlesh Kumar",
    assignClass: "class 8",
    aadharNo: "8954 ",
    subject: "English",
    contactNo: "9999 ",
    fatherName: "Vivek Kumar",
    salary: "₹10,000",
    status: "Due Amount",
    action: "Edit",
  },
  {
    srNo: "01",
    name: "Kamlesh Kumar",
    assignClass: "class 8",
    aadharNo: "8954 ",
    subject: "English",
    contactNo: "9999 ",
    fatherName: "Vivek Kumar",
    salary: "₹10,000",
    status: "Due Amount",
    action: "Edit",
  },
  {
    srNo: "01",
    name: "Kamlesh Kumar",
    assignClass: "class 8",
    aadharNo: "8954 ",
    subject: "English",
    contactNo: "9999 ",
    fatherName: "Vivek Kumar",
    salary: "₹10,000",
    status: "Due Amount",
    action: "Edit",
  },
  {
    srNo: "01",
    name: "Kamlesh Kumar",
    assignClass: "class 8",
    aadharNo: "8954 ",
    subject: "English",
    contactNo: "9999 ",
    fatherName: "Vivek Kumar",
    salary: "₹10,000",
    status: "Due Amount",
    action: "Edit",
  },
  {
    srNo: "01",
    name: "Kamlesh Kumar",
    assignClass: "class 8",
    aadharNo: "8954 ",
    subject: "English",
    contactNo: "9999 ",
    fatherName: "Vivek Kumar",
    salary: "₹10,000",
    status: "Due Amount",
    action: "Edit",
  },
  {
    srNo: "01",
    name: "Kamlesh Kumar",
    assignClass: "class 8",
    aadharNo: "8954 ",
    subject: "English",
    contactNo: "9999 ",
    fatherName: "Vivek Kumar",
    salary: "₹10,000",
    status: "Due Amount",
    action: "Edit",
  },
];

export default function PaymentTable({ filter, searchTerm }) {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const openNotice = () => {
    setIsNoticeOpen(true);
  };

  const closeNotice = () => {
    setIsNoticeOpen(false);
  };

  const filteredData = paymentData.filter(
    (item) =>
      (filter === "" || item.class === filter) &&
      (searchTerm === "" ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className="w-full">
        <table className="w-full bg-white">
          <thead className="bg-blue-200 h-14 py-10">
            <tr className="text-gray-700 text-sm font-normal leading-normal">
              <th className="py-4 px-6 text-left">Sr. No</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Assign Class</th>
              <th className="py-4 px-6 text-left">Aadhar No</th>
              <th className="py-4 px-6 text-left">Subject</th>
              <th className="py-4 px-6 text-left">Contact No</th>
              <th className="py-4 px-6 text-left">Father Name</th>
              <th className="py-4 px-6 text-left">Salary</th>
              <th className="py-4 px-6 text-left">Status</th>
              <th className="py-4 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 text-left">{item.srNo}</td>
                <td className="py-4 px-6 text-left">{item.name}</td>

                <td className="py-4 px-6 text-left">{item.assignClass}</td>
                <td className="py-4 px-6 text-left">{item.aadharNo}</td>
                <td className="py-4 px-6 text-left">{item.subject}</td>
                <td className="py-4 px-6 text-left">{item.contactNo}</td>
                <td className="py-4 px-6 text-left">{item.fatherName}</td>
                <td className="py-4 px-6 text-left">{item.salary}</td>

                <td
                  className={`py-4 px-6 text-left text-orange-400 underline ${item.color}`}
                >
                  {item.status}
                </td>

                <button onClick={openNotice}>
                  <td
                    className={`py-4 px-6 text-left text-blue-500 underline ${item.color}`}
                  >
                    {item.action}
                  </td>
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isNoticeOpen && <PaymentEdit onClose={closeNotice} />}
    </>
  );
}
