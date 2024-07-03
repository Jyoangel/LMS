"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "./img/logo.png";
import calender from "./img/calender.png";
import dashboard from "./img/dashboard.png";
import attendance from "./img/attendance.png";
import assignment from "./img/assignment.png";
import student from "./img/student.png";
import chats from "./img/chats.png";
import library from "./img/library.png";
import reportcard from "./img/reportcard.png";
import exam from "./img/exam.png";
import course from "./img/course.png";
import Attendance from "@/app/StudentPanel/Attendance/page";

export default function Sidenavbar() {
  const [isSelected, setIsSelected] = useState(1);

  const handleSelect = (value) => {
    setIsSelected(value);
  };

  return (
    <>
      <div className="h-auto  w-[280px] flex flex-col shadow-xl">
        <div className="p-5">
          <Image src={logo} />
        </div>

        <Link href={"/teacherspanel/Dashboard"}>
          <button
            onClick={() => {
              handleSelect(1);
            }}
            className={` ${
              isSelected === 1 ? "bg-blue-600 text-white" : " text-black"
            } h-[50px] w-full  px-5 py-3 flex gap-3`}
          >
            <Image
              src={dashboard}
              className={`h-6 w-6 ${isSelected === 1 ? "invert-0" : "invert "}`}
            />
            <h1 className="">Dashboard</h1>
          </button>
        </Link>
        <Link href={"/teacherspanel/Attendance"}>
          <button
            onClick={() => {
              handleSelect(10);
            }}
            className={` ${
              isSelected === 10 ? "bg-blue-600 text-white" : " text-black"
            } h-[50px] w-full  px-5 py-3 flex gap-3`}
          >
            <Image
              src={attendance}
              className={`h-6 w-6 ${
                isSelected === 10 ? "invert" : "invert-0 "
              }`}
            />
            <h1 className="">Attendance</h1>
          </button>
        </Link>

        <Link href={"/teacherspanel/Assignment"}>
          <button
            onClick={() => {
              handleSelect(2);
            }}
            className={` ${
              isSelected === 2 ? "bg-blue-600 text-white" : " text-black"
            } h-[50px] w-full  px-5 py-3 flex gap-3`}
          >
            <Image
              src={assignment}
              className={`h-6 w-6 ${isSelected === 2 ? "invert" : "invert-0 "}`}
            />
            <h1 className="">Assignments</h1>
          </button>
        </Link>

        <Link href={"/teacherspanel/Student"}>
          <button
            onClick={() => {
              handleSelect(3);
            }}
            className={` ${
              isSelected === 3 ? "bg-blue-600 text-white" : " text-black"
            } h-[50px] w-full  px-5 py-3 flex gap-3`}
          >
            <Image
              src={student}
              className={`h-6 w-6 bg-black ${
                isSelected === 3 ? "invert" : "invert-0 "
              }`}
            />
            <h1 className="">Students</h1>
          </button>
        </Link>

        <Link href={"/teacherspanel/Classes"}>
          <button
            onClick={() => {
              handleSelect(4);
            }}
            className={` ${
              isSelected === 4 ? "bg-blue-600 text-white" : " text-black"
            } h-[50px] w-full  px-5 py-3 flex gap-3`}
          >
            <Image
              src={calender}
              className={`h-6 w-6 ${isSelected === 4 ? "invert" : "invert-0 "}`}
            />
            <h1 className="">Classes</h1>
          </button>
        </Link>

        <Link href={"/teacherspanel/Chats"}>
          <button
            onClick={() => {
              handleSelect(5);
            }}
            className={` ${
              isSelected === 5 ? "bg-blue-600 text-white" : " text-black"
            } h-[50px] w-full  px-5 py-3 flex gap-3`}
          >
            <Image
              src={chats}
              className={`h-6 w-6 ${isSelected === 5 ? "invert" : "invert-0 "}`}
            />
            <h1 className="">Chats</h1>
          </button>
        </Link>

        <Link href={"/teacherspanel/Library"}>
          <button
            onClick={() => {
              handleSelect(6);
            }}
            className={` ${
              isSelected === 6 ? "bg-blue-600 text-white" : " text-black"
            } h-[50px] w-full  px-5 py-3 flex gap-3`}
          >
            <Image
              src={library}
              className={`h-6 w-6 ${isSelected === 6 ? "invert" : "invert-0 "}`}
            />
            <h1 className="">Library</h1>
          </button>
        </Link>
        <Link href={"/teacherspanel/ReportCard"}>
          <button
            onClick={() => {
              handleSelect(7);
            }}
            className={` ${
              isSelected === 7 ? "bg-blue-600 text-white" : " text-black"
            } h-[50px] w-full  px-5 py-3 flex gap-3`}
          >
            <Image
              src={reportcard}
              className={`h-6 w-6 ${isSelected === 7 ? "invert" : "invert-0 "}`}
            />
            <h1 className="">Report Card</h1>
          </button>
        </Link>
        <Link href={"/teacherspanel/Exam"}>
          <button
            onClick={() => {
              handleSelect(8);
            }}
            className={` ${
              isSelected === 8 ? "bg-blue-600 text-white" : " text-black"
            } h-[50px] w-full  px-5 py-3 flex gap-3`}
          >
            <Image
              src={exam}
              className={`h-6 w-6 ${isSelected === 8 ? "invert" : "invert-0 "}`}
            />
            <h1 className="">Exam</h1>
          </button>
        </Link>
        <Link href={"/teacherspanel/Course"}>
          <button
            onClick={() => {
              handleSelect(9);
            }}
            className={` ${
              isSelected === 9 ? "bg-blue-600 text-white" : " text-black"
            } h-[50px] w-full  px-5 py-3 flex gap-3`}
          >
            <Image
              src={course}
              className={`h-6 w-6 ${isSelected === 9 ? "invert" : "invert-0 "}`}
            />
            <h1 className="">Course</h1>
          </button>
        </Link>
      </div>
    </>
  );
}
