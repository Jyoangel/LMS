export default function ClassSchedule() {
  return (
    <>
      <div className="h-[70px] w-[250px] bg-white rounded-lg border-2 border-blue-300 p-2 flex items-center gap-3">
        <div className="h-full  w-1.5 bg-green-600 rounded-lg" />
        <div className="flex flex-col justify-between">
          <h1 className="text-base font-normal">9:00 AM - 10:00 AM</h1>

          <div className="flex items-center justify-center gap-5">
            <h1 className="text-base text-gray-500 font-normal"> English</h1>
            <h1 className="text-base text-gray-500 font-normal">
              {" "}
              Kamlesh Kumar
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
