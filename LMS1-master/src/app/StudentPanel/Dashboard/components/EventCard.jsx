export default function EventCard() {
  return (
    <>
      <div className="h-[100px] w-full bg-blue-100 rounded-lg flex flex-col gap-2 p-4 border-2 border-blue-300">
        <h1 className="text-black text-sm font-medium">Event Name </h1>
        <p className="text-xs text-gray-800">22-05-24 | 10:00 AM</p>
        <p className="text-xs text-gray-800">Discription</p>
      </div>
    </>
  );
}
