import Image from "next/image";
import ColorCard from "./components/ColorCard";
import EventCard from "./components/EventCard";
import StudentCard from "./components/StudentCard";
import StudentTable from "./components/StudentTable";
import TeacherTable from "./components/TeacherTable";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import staffs from "./img/staffs.png";
import student from "./img/student.png";
import teachers from "./img/teachers.png";
import Link from "next/link";
import InteractiveGraph from "./components/InteractiveGraph";
export default function Main() {
  return (
    <>
      <div className=" w-full px-10 flex flex-col gap-5  py-10 ">
        <div className="flex w-full gap-9">
          <ColorCard
            icon={student}
            text={"Number of Students"}
            number={"500"}
            color={"bg-blue-600"}
          />
          <ColorCard
            icon={student}
            text={"Total Present Students"}
            number={"450"}
            color={"bg-green-600"}
          />
          <ColorCard
            icon={teachers}
            text={"Number of Teachers"}
            number={"20"}
            color={"bg-blue-600"}
          />
          <ColorCard
            icon={teachers}
            text={"Total Present Teacher"}
            number={"18"}
            color={"bg-green-600"}
          />
          <ColorCard
            icon={staffs}
            text={"Number of Staffs"}
            number={"10"}
            color={"bg-blue-600"}
          />
          <ColorCard
            icon={staffs}
            text={"Total Present Staffs"}
            number={"9"}
            color={"bg-green-600"}
          />
        </div>

        {/* School Parformance */}

        <div className="h-auto w-full flex flex-row gap-5 items-center justify-center  ">
          <div className="w-[50%]   flex flex-col gap-3">
            <h1 className="text-black text-md font-bold">School Performance</h1>
            <InteractiveGraph />
          </div>
          <div className="w-[50%]   flex flex-col gap-3">
            <h1 className="text-black text-md font-bold">School Overview</h1>
            <InteractiveGraph />
          </div>
        </div>

        {/*  Upcoming School Events */}

        <div className="flex flex-col gap-3  w-full ">
          <div className="flex flex-row justify-between">
            <h1 className="text-black text-xl font-bold">
              Upcoming School Events
            </h1>
            <Link href={"/AdminDashboard/SeeAll"}>
              <h1 className="text-blue-600 text-sm underline">See All</h1>
            </Link>
          </div>

          <div className="flex flex-row gap-3">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>

        {/* Top Student */}

        <div className="flex flex-row gap-3 w-full ">
          <div className="flex flex-col gap-3  w-[50%]">
            <h1 className="text-black text-xl font-bold">Top Student</h1>
            <div className="w-full h-[324px] bg-blue-100 grid grid-cols-2 gap-3  justify-items-center p-5 rounded-lg">
              <StudentCard />
              <StudentCard />
              <StudentCard />
              <StudentCard />
              <StudentCard />
              <StudentCard />
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[50%]">
            <h1 className="text-lg text-black font-semibold">Top Teachers</h1>
            <div className="w-full h-[324px] bg-blue-100 grid grid-cols-2 gap-3  justify-items-center p-5  rounded-lg">
              <StudentCard />
              <StudentCard />
              <StudentCard />
              <StudentCard />
              <StudentCard />
              <StudentCard />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <h1 className="text-lg text-black font-semibold">Teachers Details</h1>
          <div className="flex flex-col ">
            <TeacherTable />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-lg text-black font-semibold">
            Fees Unpaid Students Lists
          </h1>
          <div className="flex flex-col">
            <StudentTable />
          </div>
        </div>
      </div>
    </>
  );
}
