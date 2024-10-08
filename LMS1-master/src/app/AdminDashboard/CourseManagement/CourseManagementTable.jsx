


import Link from "next/link";
import { showCourse } from "@/app/actions/course";
import DeleteButton from "@/app/Button/deletebutton";
import toast from "react-hot-toast";

// Function to format dates
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

export default async function CourseManagementTable() {
  const courseData = await showCourse();
  const handleDelete = (id) => {
    setCourseData(courseData.filter((course) => course._id !== id));
    toast.success("Course deleted successfully");
  };

  return (
    <>
      <div className="w-full">
        <table className="w-full bg-white">
          <thead className="bg-blue-200 h-14 py-10">
            <tr className="text-gray-700 text-sm font-normal leading-normal">
              <th className="py-4 px-6 text-left">Sr. No</th>
              <th className="py-4 px-6 text-left">Course Name</th>
              <th className="py-4 px-6 text-left">Course Code</th>
              <th className="py-4 px-6 text-left">Instructor Name</th>
              <th className="py-4 px-6 text-left">Start Date</th>
              <th className="py-4 px-6 text-left">End Date</th>
              <th className="py-4 px-6 text-left">Class Timing</th>
              <th className="py-4 px-6 text-left">Class Days</th>
              <th className="py-4 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {courseData.map((item, index) => (
              <tr
                key={index}
                className={`text-gray-700 text-sm font-normal leading-normal ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td className="py-4 px-6 text-left">{index + 1}</td>
                <td className="py-4 px-6 text-left text-blue-600 underline">
                  <Link href={`/AdminDashboard/LiveClassScreen/CourseName/${item?._id.toString()}`}>
                    {item.courseName}
                  </Link>
                </td>
                <td className="py-4 px-6 text-left ">{item.courseCode}</td>
                <td className="py-4 px-6 text-left">{item.primaryInstructorname}</td>
                <td className="py-4 px-6 text-left">{formatDate(item.schedule.startDate)}</td>
                <td className="py-4 px-6 text-left">{formatDate(item.schedule.endDate)}</td>
                <td className="py-4 px-6 text-left">{item.schedule.classTime}</td>
                <td className="py-4 px-6 text-left">{item.schedule.classDays.join(', ')}</td>
                <td className="py-4 px-6 text-left flex gap-2">
                  <Link href={`/AdminDashboard/CourseManagement/UpdateDetail/${item?._id.toString()}`} >
                    <button className="text-blue-600">Edit</button>
                  </Link>
                  <h1 className="text-gray-400">|</h1>
                  <DeleteButton id={item._id.toString()} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div >

    </>
  );
}



{/*

import ConfirmationCard from "@/Components/ConfirmationCard";
import Link from "next/link";
import { useState } from "react";

const liveClassesData = [
  {
    srNo: "01",
    courseName: "Course Name 1",
    courseCode: "5678",
    instName: "Kamlesh Kumar",
    startDate: "14-08-2002",
    endDate: "14-08-2002",
    classTiming: "10:00 AM to 11: 00 AM",

    classDays: "Mon, Wed, Fry ",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    courseName: "Course Name 1",
    courseCode: "5678",
    instName: "Kamlesh Kumar",
    startDate: "14-08-2002",
    endDate: "14-08-2002",
    classTiming: "10:00 AM to 11: 00 AM",

    classDays: "Mon, Wed, Fry ",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    courseName: "Course Name 1",
    courseCode: "5678",
    instName: "Kamlesh Kumar",
    startDate: "14-08-2002",
    endDate: "14-08-2002",
    classTiming: "10:00 AM to 11: 00 AM",

    classDays: "Mon, Wed, Fry ",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    courseName: "Course Name 1",
    courseCode: "5678",
    instName: "Kamlesh Kumar",
    startDate: "14-08-2002",
    endDate: "14-08-2002",
    classTiming: "10:00 AM to 11: 00 AM",

    classDays: "Mon, Wed, Fry ",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    courseName: "Course Name 1",
    courseCode: "5678",
    instName: "Kamlesh Kumar",
    startDate: "14-08-2002",
    endDate: "14-08-2002",
    classTiming: "10:00 AM to 11: 00 AM",

    classDays: "Mon, Wed, Fry ",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    courseName: "Course Name 1",
    courseCode: "5678",
    instName: "Kamlesh Kumar",
    startDate: "14-08-2002",
    endDate: "14-08-2002",
    classTiming: "10:00 AM to 11: 00 AM",

    classDays: "Mon, Wed, Fry ",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    courseName: "Course Name 1",
    courseCode: "5678",
    instName: "Kamlesh Kumar",
    startDate: "14-08-2002",
    endDate: "14-08-2002",
    classTiming: "10:00 AM to 11: 00 AM",

    classDays: "Mon, Wed, Fry ",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    courseName: "Course Name 1",
    courseCode: "5678",
    instName: "Kamlesh Kumar",
    startDate: "14-08-2002",
    endDate: "14-08-2002",
    classTiming: "10:00 AM to 11: 00 AM",

    classDays: "Mon, Wed, Fry ",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    courseName: "Course Name 1",
    courseCode: "5678",
    instName: "Kamlesh Kumar",
    startDate: "14-08-2002",
    endDate: "14-08-2002",
    classTiming: "10:00 AM to 11: 00 AM",

    classDays: "Mon, Wed, Fry ",
    action: { edit: "Edit", delete: "Delete" },
  },
  {
    srNo: "01",
    courseName: "Course Name 1",
    courseCode: "5678",
    instName: "Kamlesh Kumar",
    startDate: "14-08-2002",
    endDate: "14-08-2002",
    classTiming: "10:00 AM to 11: 00 AM",

    classDays: "Mon, Wed, Fry ",
    action: { edit: "Edit", delete: "Delete" },
  },
];

export default function CourseManagementTable({ filter, searchTerm }) {
  const [isDelete, setDelete] = useState(false);

  const openDelete = () => {
    setDelete(true);
  };

  const closeDelete = () => {
    setDelete(false);
  };

  const filteredData = liveClassesData.filter(
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
              <th className="py-4 px-6 text-left">Course Name</th>
              <th className="py-4 px-6 text-left">Course Code</th>
              <th className="py-4 px-6 text-left">Instructor Name</th>
              <th className="py-4 px-6 text-left">Start Date</th>
              <th className="py-4 px-6 text-left">End Date</th>
              <th className="py-4 px-6 text-left">Class Timing</th>
              <th className="py-4 px-6 text-left">Class Days</th>
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
                <td className="py-4 px-6 text-left text-blue-600 underline">
                  <Link href={"/AdminDashboard/LiveClassScreen/CourseName"}>
                    {item.courseName}
                  </Link>
                </td>
                <td className="py-4 px-6 text-left ">{item.courseCode}</td>

                <td className="py-4 px-6 text-left">{item.instName}</td>
                <td className="py-4 px-6 text-left">{item.startDate}</td>
                <td className="py-4 px-6 text-left">{item.endDate}</td>
                <td className="py-4 px-6 text-left">{item.classTiming}</td>
                <td className="py-4 px-6 text-left">{item.classDays}</td>

                <td className={`py-4 px-6 text-left flex gap-2  `}>
                  <Link href={"/AdminDashboard/CourseManagement/UpdateDetail"}>
                    <button
                      // onClick={item.action === "Due Amount" ? openNotice : openSlip}
                      className="text-blue-600"
                    >
                      {item.action.edit}
                    </button>{" "}
                  </Link>
                  <h1 className="text-gray-400">|</h1>

                  <button onClick={openDelete} className="text-red-600">
                    {item.action.delete}
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
          onClose={closeDelete}
        />
      )}
    </>
  );
}

*/}
