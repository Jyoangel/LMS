"use client"
import { useState, useEffect } from 'react';
import AssignmentStatus from "./components/AssignmentStatus";
import ClassSchedule from "./components/ClassSchedule";
import ColorCard from "./components/ColorCard";
import CourseProgress from "./components/CourseProgess";
import EventCard from "./components/EventCard";
import HomeWork from "./components/HomeWork";
import staffs from "./img/staffs.png";
import student from "./img/student.png";
import teachers from "./img/teachers.png";
import InteractiveGraph from "./components/InteractiveGraph";
import { useUser } from '@auth0/nextjs-auth0/client';
import AttendanceChart from './components/AttendanceChart';
import { fetcheventData } from '../../../../api/api';
import { fetchHomeWorkData } from '../../../../api/homeworkapi';
import { fetchAssignmentData } from '../../../../api/assignmentapi';
import { fetchClassScheduleData } from '../../../../api/classScheduleapi';

import { format } from "date-fns";


export default function Dashboard() {

  const { user, error, isLoading } = useUser();
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [events, setEvents] = useState([]);
  const [homeworks, setHomeworks] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [classSchedules, setClassSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [Error, setError] = useState(null); // Renamed to avoid confusion with user error

  const [studentData, setStudentData] = useState({
    loginUser: { name: 'My Performance', scores: [60, 70, 80, 90, 75, 85, 95] },
    top1: { name: 'Top One Student', scores: [65, 59, 80, 81, 56, 55, 40] },
    top2: { name: 'Top Second Student', scores: [28, 48, 40, 19, 86, 27, 90] },
    top3: { name: 'Top Three Student', scores: [18, 48, 77, 9, 100, 27, 40] }
  });

  const [selectedAttendanceStudent, setSelectedAttendanceStudent] = useState('loginUser');
  const attendanceData = {
    loginUser: { name: user?.name, monthlyAttendance: [20, 19, 22, 21, 18, 23, 24, 22, 23, 21, 20, 19] },
    top1: { name: 'Top Student 1', monthlyAttendance: [21, 20, 23, 24, 19, 24, 25, 23, 24, 22, 21, 20] },
    top2: { name: 'Top Student 2', monthlyAttendance: [22, 21, 24, 25, 20, 25, 26, 24, 25, 23, 22, 21] },
    top3: { name: 'Top Student 3', monthlyAttendance: [23, 22, 25, 26, 21, 26, 27, 25, 26, 24, 23, 22] }
  };

  useEffect(() => {
    if (user) {
      setSelectedStudent('loginUser');
    }
  }, [user]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const eventData = await fetcheventData();
        setEvents(eventData);
      } catch (err) {
        setIsError(err.message);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchAssignmentData();
        setAssignments(data.assignments);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []); //

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchClassScheduleData();
        setClassSchedules(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    async function loadHomeworks() {
      try {
        const data = await fetchHomeWorkData();
        console.log(data);
        setHomeworks(data.homeworks || []);
      } catch (err) {
        setIsError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadHomeworks();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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
          <div className="w-[50%] flex flex-col gap-3">
            <h1 className="text-black text-lg font-bold">Class Schedule</h1>
            <div className="h-[324px] justify-items-center grid grid-cols-2 gap-5 bg-blue-100 p-5 overflow-y-auto no-scrollbar rounded-lg">
              {Error && <p className="text-red-500">{Error}</p>}
              {classSchedules.map((schedule) => (
                <ClassSchedule
                  key={schedule.id} // assuming each schedule has a unique id
                  subject={schedule.subject}
                  startTime={schedule.startTime}
                  endTime={schedule.endTime}
                  day={schedule.day}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Assignment Status & Upcoming Deadlines */}
        <div className="h-auto w-full flex flex-row gap-5 items-center justify-center  ">
          {/* Assignment Status */}
          <div className="flex flex-col gap-3 w-[50%]">
            <h1 className="text-black text-lg font-bold">Assignment Status</h1>
            <div className="w-full h-[324px] bg-blue-100 flex flex-col gap-5 justify-items-center p-5 rounded-lg overflow-y-auto no-scrollbar">
              {Error && <p className="text-red-500">{Error}</p>}
              {assignments.map((assignment) => (
                <AssignmentStatus
                  key={assignment._id} // assuming each assignment has a unique id
                  assignmentName={assignment.assignmentTitle}
                  date={format(new Date(assignment.dueDate), "yyyy-MM-dd")}
                />
              ))}
            </div>
          </div>
          {/* Upcoming Deadlines */}
          <div className="flex flex-col gap-3 w-[50%]">
            <h1 className="text-black text-lg font-bold">Upcoming DeadLines</h1>
            <div className="w-full h-[324px] bg-blue-100 flex flex-col gap-5 justify-items-center p-5 rounded-lg overflow-y-auto no-scrollbar">
              {Error && <p className="text-red-500">{Error}</p>}
              {assignments.map((assignment) => (
                <AssignmentStatus
                  key={assignment._id} // assuming each assignment has a unique id
                  assignmentName={assignment.assignmentTitle}
                  date={format(new Date(assignment.dueDate), "yyyy-MM-dd")}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Home Work and My Performance */}
        <div className="h-auto w-full flex flex-row gap-5 items-center justify-center  ">
          {/* Homework Status */}
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>Error: {isError}</div>
            ) : (
              <div className="flex flex-col gap-3 w-[600px]">
                <h1 className="text-black text-lg font-bold">Home Work</h1>
                <div className="w-full h-[324px] bg-blue-100 flex flex-col gap-5 justify-items-center p-5 rounded-lg overflow-y-auto no-scrollbar">
                  {homeworks.length > 0 ? (
                    homeworks.map((hw, index) => (
                      <HomeWork
                        key={index}
                        homework={hw.homework}
                        dateofSubmission={format(new Date(hw.endDate), "yyyy-MM-dd")}
                      />
                    ))
                  ) : (
                    <div>No homework available</div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* My Performace */}

          <div className=" w-[50%] flex flex-col gap-5">
            <div className="flex flex-col justify-between">
              <h1 className="text-black text-xl font-bold">My Performance</h1>

              <div className="flex items-center justify-between w-full">
                <h1 className="text-lg font-bold text-black">2024</h1>
                <div className="flex flex-row items-center justify-center gap-2">
                  <h1 className="text-lg font-medium">Filter</h1>
                  <select value={selectedStudent} onChange={e => setSelectedStudent(e.target.value)}>
                    <option value="loginUser">{studentData.loginUser.name} (You)</option>
                    <option value="top1">{studentData.top1.name}</option>
                    <option value="top2">{studentData.top2.name}</option>
                    <option value="top3">{studentData.top3.name}</option>
                  </select>
                </div>
              </div>
            </div>
            {/* {selectedStudent && <InteractiveGraph studentData={studentData} selectedStudent={selectedStudent} />} */}
          </div>
        </div>

        {/*  Upcoming School Events */}

        <div className="flex flex-col gap-3 w-full">
          <h1 className="text-black text-xl font-bold">Upcoming School Events</h1>
          <div className="flex flex-row gap-3">
            {events.map((event) => (
              <EventCard
                key={event._id}
                name={event.eventName}
                date={new Date(event.eventDate).toLocaleDateString()}
                time={event.eventTime}
                description={event.description}
                organizer={event.organizerName}
              />
            ))}
          </div>
        </div>

        {/* Attendence */}

        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between">
            <h1 className="text-black text-xl font-bold">Attendance</h1>
            <div className="flex flex-row items-center justify-center gap-2">
              <h1 className="text-lg font-medium">Filter</h1>
              <select className="h-10 w-32 p-2 rounded-lg border border-gray-300" value={selectedAttendanceStudent} onChange={e => setSelectedAttendanceStudent(e.target.value)}>
                <option value="loginUser">{user?.name} (You)</option>
                <option value="top1">Top Student 1</option>
                <option value="top2">Top Student 2</option>
                <option value="top3">Top Student 3</option>
              </select>
            </div>
          </div>
          {/* <AttendanceChart attendanceData={attendanceData} selectedStudent={selectedAttendanceStudent} /> */}
        </div>
      </div>
    </>
  );
}
