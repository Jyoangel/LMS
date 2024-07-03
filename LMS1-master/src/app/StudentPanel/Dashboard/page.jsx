import Image from "next/image";
import AssignmentStatus from "./components/AssignmentStatus";
import ClassSchedule from "./components/ClassSchedule";
import ColorCard from "./components/ColorCard";
import CourseProgress from "./components/CourseProgess";
import EventCard from "./components/EventCard";
import HomeWork from "./components/HomeWork";
import UpcomingDeadline from "./components/UpcomingDeadline";
import graph from "./graph.png";
import img1 from "./img/img1.png";
import staffs from "./img/staffs.png";
import student from "./img/student.png";
import teachers from "./img/teachers.png";
import InteractiveGraph from "@/app/AdminDashboard/Main/components/InteractiveGraph";

export default function Dashboard() {
  return (
    <>
      <div className=" w-full px-10 flex flex-col gap-10  py-10 ">
        {/* color card */}
        <div className="flex w-full gap-9">
          <ColorCard
            icon={student}
            text={"Total Students"}
            number={"60"}
            color={"bg-blue-600"}
          />
          <ColorCard
            icon={student}
            text={"Today Learning Hours"}
            number={"8"}
            color={"bg-green-600"}
          />
          <ColorCard
            icon={teachers}
            text={"Actual Leacturing Hours"}
            number={"6"}
            color={"bg-blue-600"}
          />
          <ColorCard
            icon={teachers}
            text={"Assign Home Work"}
            number={"10"}
            color={"bg-green-600"}
          />
          <ColorCard
            icon={staffs}
            text={"Completed Home Work"}
            number={"9"}
            color={"bg-blue-600"}
          />
          <ColorCard
            icon={staffs}
            text={"Daily Performance"}
            number={"80%"}
            color={"bg-green-600"}
          />
        </div>

        <div className="h-auto w-full flex flex-row gap-5 items-center justify-center  ">
          {/* Course List */}
          <div className="flex flex-col gap-3  w-[50%]">
            <h1 className="text-black text-lg font-bold">Course List</h1>
            <div className="w-full h-[324px] bg-blue-100 flex flex-col gap-3  justify-items-center p-5 rounded-lg overflow-y-auto no-scrollbar">
              <CourseProgress />
              <CourseProgress />
              <CourseProgress />
            </div>
          </div>

          {/* Class Schedule */}
          <div className="w-[50%]   flex flex-col gap-3">
            <h1 className="text-black text-lg font-bold">Class Schedule</h1>
            <div className=" h-[324px] justify-items-center grid grid-cols-2 gap-5 bg-blue-100 p-5 overflow-y-auto no-scrollbar rounded-lg">
              <ClassSchedule />
              <ClassSchedule />
              <ClassSchedule />
              <ClassSchedule />
              <ClassSchedule />
              <ClassSchedule />
              <ClassSchedule />
              <ClassSchedule />
            </div>
          </div>
        </div>

        {/* Assignment Status & Upcoming Deadlines */}
        <div className="h-auto w-full flex flex-row gap-5 items-center justify-center  ">
          {/* Assignment Status */}
          <div className="flex flex-col gap-3  w-[50%]">
            <h1 className="text-black text-lg font-bold">Assignment Status</h1>
            <div className="w-full h-[324px] bg-blue-100 flex flex-col gap-5  justify-items-center p-5 rounded-lg overflow-y-auto no-scrollbar">
              <AssignmentStatus />
              <AssignmentStatus />
              <AssignmentStatus />
              <AssignmentStatus />
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="w-[50%]   flex flex-col gap-3">
            <h1 className="text-black text-lg font-bold">Upcoming Deadlines</h1>
            <div className="w-full h-[324px] bg-blue-100 flex flex-col gap-5  justify-items-center p-5 rounded-lg overflow-y-auto no-scrollbar">
              <UpcomingDeadline />
              <UpcomingDeadline />
              <UpcomingDeadline />
              <UpcomingDeadline />
            </div>
          </div>
        </div>

        {/* Home Work and My Performance */}
        <div className="h-auto w-full flex flex-row gap-5 items-center justify-center  ">
          {/* Assignment Status */}
          <div className="flex flex-col gap-3  w-[50%]">
            <h1 className="text-black text-lg font-bold">Home Work</h1>
            <div className="w-full h-[324px] bg-blue-100 flex flex-col gap-5  justify-items-center p-5 rounded-lg overflow-y-auto no-scrollbar">
              <HomeWork />
              <HomeWork />
              <HomeWork />
              <HomeWork />
            </div>
          </div>

          {/* My Performace */}

          <div className=" w-[50%] flex flex-col gap-5">
            <div className="flex flex-col justify-between">
              <h1 className="text-black text-xl font-bold">My Performance</h1>

              <div className="flex items-center justify-between w-full">
                <h1 className="text-lg font-bold text-black">June</h1>
                <div className="flex flex-row items-center justify-center gap-2">
                  <h1 className="text-lg font-medium">Filter</h1>
                  <select className="h-10 w-32 p-2 rounded-lg border border-gray-300">
                    <option>Select</option>
                  </select>
                </div>
              </div>
            </div>
            <InteractiveGraph />
          </div>
        </div>

        {/*  Upcoming School Events */}

        <div className="flex flex-col gap-3  w-full ">
          <h1 className="text-black text-xl font-bold">
            Upcoming School Events
          </h1>
          <div className="flex flex-row gap-3">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>

        {/* Attendence */}

        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between">
            <h1 className="text-black text-xl font-bold">Attendance</h1>
            <div className="flex flex-row items-center justify-center gap-2">
              <h1 className="text-lg font-medium">Filter</h1>
              <select className="h-10 w-32 p-2 rounded-lg border border-gray-300">
                <option>Select</option>
              </select>
            </div>
          </div>
          <Image src={graph} className="w-full h-96" />
        </div>
      </div>
    </>
  );
}
