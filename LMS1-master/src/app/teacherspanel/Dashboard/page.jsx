import Image from "next/image";
import ColorCard from "./components/ColorCard";
import EventCard from "./components/EventCard";
import StudentCard from "./components/StudentCard";
import StudentTable from "./components/StudentTable";
import TeacherTable from "./components/TeacherTable";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import graph from "./graph.png";
import total from "./total.png";
import struggling from "./struggling.png";
import excellent from "./excellent.png";
import progress from "./progress.png";
import staffs from "./img/staffs.png";
import student from "./img/student.png";
import teachers from "./img/teachers.png";
import InteractiveGraph from "@/app/AdminDashboard/Main/components/InteractiveGraph";
export default function Dashboard() {
  return (
    <>
      <div className=" w-full px-10 flex flex-col gap-5  py-10 ">
        <div className="flex w-full gap-9">
          <ColorCard
            icon={student}
            text={"Total Students"}
            number={"60"}
            color={"bg-blue-600"}
          />
          <ColorCard
            icon={student}
            text={"Total Present Students"}
            number={"58"}
            color={"bg-green-600"}
          />
          <ColorCard
            icon={teachers}
            text={"Course Name"}
            number={"50%"}
            color={"bg-blue-600"}
          />
          <ColorCard
            icon={teachers}
            text={"Course Name"}
            number={"50%"}
            color={"bg-green-600"}
          />
          <ColorCard
            icon={staffs}
            text={"Home work"}
            number={"60"}
            color={"bg-blue-600"}
          />
          <ColorCard
            icon={staffs}
            text={"Undone Home Work"}
            number={"3"}
            color={"bg-green-600"}
          />
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

        {/* School Parformance */}

        <div className="h-auto w-full flex flex-row gap-5 items-center justify-center  ">
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
          <div className="w-[50%]   flex flex-col gap-3">
            <h1 className="text-black text-md font-bold">School Overview</h1>
            <InteractiveGraph />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between">
            <h1>Attendance</h1>
            <div className="flex flex-row items-center justify-between gap-3 ">
              <h1>Filter</h1>
              <select className="h-10 w-24 rounded-lg border border-gray-300 outline-none">
                <option>Select</option>
              </select>
            </div>
          </div>
          <Image src={graph} className=" w-full" />
        </div>

        <div className="flex flex-row gap-5 w-full">
          <div className="w-[50%] flex flex-col  gap-5">
            <h1>Class Statistics</h1>
            <div className="h-[400px] w-full bg-blue-300 flex flex-col gap-10 items-center justify-center rounded-lg">
              <div className="flex flex-row gap-5 items-center justify-center">
                <div className="h-[165px] w-[160px] flex flex-col gap-3 bg-white rounded-lg items-center justify-center border border-blue-500">
                  <Image src={total} />
                  <h1 className="text-black text-lg font-semibold">
                    Total Students
                  </h1>
                  <h1 className="text-black text-xl font-bold">60</h1>
                </div>
                <div className="h-[165px] w-[160px] flex flex-col gap-3 bg-white rounded-lg items-center justify-center border border-blue-500">
                  <Image src={struggling} />
                  <h1 className="text-black text-lg font-semibold">
                    Total Students
                  </h1>
                  <h1 className="text-black text-xl font-bold">40</h1>
                </div>
                <div className="h-[165px] w-[160px] flex flex-col gap-3 bg-white rounded-lg items-center justify-center border border-blue-500">
                  <Image src={excellent} />
                  <h1 className="text-black text-lg font-semibold">
                    Total Students
                  </h1>
                  <h1 className="text-black text-xl font-bold">20</h1>
                </div>
              </div>
              <div className="h-[110px] w-[525px] border border-blue-500 rounded-lg bg-white flex flex-row gap-5">
                <Image src={progress} className="h-20 w-20" />
                <div className="flex flex-col">
                  <h1>Class Progress</h1>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-600 h-2.5 rounded-full w-full"></div>
                  </div>
                  <h1>30% of the proress</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[50%] flex flex-col  gap-5 ">
            <h1>Struggling & Excelling</h1>
            <div className="h-[400px] w-full bg-blue-200 flex flex-col gap-10   rounded-lg p-5">
              <h1>Top 3 Excellent Student</h1>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row gap-5">
                  <Image src={excellent} />

                  <div className="flex flex-col">
                    <h1>Jay Kumar Rajak</h1>
                    <h1 className="text-gray-500 text-sm">
                      English, Hindi, Physics
                    </h1>
                  </div>
                </div>
                <div className="h-10 w-16 border border-blue-500 rounded-xl text-blue-500 p-2">
                  View
                </div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row gap-5">
                  <Image src={excellent} />

                  <div className="flex flex-col">
                    <h1>Jay Kumar Rajak</h1>
                    <h1 className="text-gray-500 text-sm">
                      English, Hindi, Physics
                    </h1>
                  </div>
                </div>
                <div className="h-10 w-16 border border-blue-500 rounded-xl text-blue-500 p-2">
                  View
                </div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row gap-5">
                  <Image src={excellent} />

                  <div className="flex flex-col">
                    <h1>Jay Kumar Rajak</h1>
                    <h1 className="text-gray-500 text-sm">
                      English, Hindi, Physics
                    </h1>
                  </div>
                </div>
                <div className="h-10 w-16 border border-blue-500 rounded-xl text-blue-500 p-2">
                  View
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
