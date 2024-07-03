import Image from "next/image";
import { BsTelephone, BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { TiMicrophoneOutline } from "react-icons/ti";
import { VscDeviceCamera } from "react-icons/vsc";
import ChatBubbleLeft from "./ChatBubbleLeft";
import ChatBubbleRight from "./ChatBubbleRight";
import community from "./community.png";

export default function chats() {
  return (
    <>
      <div className="h-screen w-full flex flex-col gap-5 pl-10 py-10  ">
        <div className="h-12 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6">
            <h1 className="text-black text-lg font-medium">Total Students</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-black text-lg font-medium">Filter</h1>
            <select className="h-8 w-28 border border-gray-500 outline-none rounded-lg p-1 ">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div className="w-full h-screen flex flex-row">
          {/* left side */}
          <div className="h-auto w-[40%]  flex flex-col gap-5">
            <div className="h-10 w-[95%] border border-gray-300 rounded-sm flex flex-row items-center gap-2 px-5 py-5">
              <CiSearch size={20} />
              <h1>Search</h1>
            </div>
            <div className="h-auto py-5 w-[95%] border border-blue-300 flex flex-col gap-5 rounded-xl  px-5">
              <h1 className="text-black text-lg font-bold">Group</h1>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Class Community
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Class Community
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Class Community
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
            </div>
            <div className="h-auto py-5 rounded-xl w-[95%] border border-blue-300 flex flex-col gap-5  px-5">
              <h1 className="text-black text-lg font-bold">People</h1>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Jay Kumar
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-green-500">Online Now</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Kran Kumar
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Kamlesh Kumar
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">
                    Jyoti Gupta
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
              <div className="h-[62px] w-[90%] flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Image src={community} />
                  <h1 className="text-black text-md font-semibold">Nikita</h1>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xs text-gray-500">Last Seen</h1>
                  <h1 className="text-xs text-gray-500">10.00AM</h1>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="h-auto w-[60%]  flex flex-col  gap-5 ">
            <div className="h-[91px] w-[95%] flex flex-row items-center justify-between">
              <div className="flex flex-row gap-5 items-center justify-center">
                <Image src={community} />
                <h1 className="text-black text-md font-semibold">Jay Kumar</h1>
              </div>
              <div className="flex flex-row gap-3 items-center justify-center">
                <BsTelephone size={30} className="text-gray-400" />
                <BsThreeDotsVertical size={35} />
              </div>
            </div>
            <div className="h-auto w-full bg-blue-200 flex flex-col gap-5 py-10 px-5">
              <div className="w-full flex items-center justify-start">
                <ChatBubbleLeft
                  text={"    Hi, How are you ?"}
                  time={"Today, 10.30 pm"}
                />
              </div>
              <div className="w-full flex items-center justify-end">
                <ChatBubbleRight
                  text={"    Fine. WAU ?"}
                  time={"Today, 10.30 pm"}
                />
              </div>
              <div className="w-full flex items-center justify-start">
                <ChatBubbleLeft
                  text={"  Good. What are you doing ?"}
                  time={"Today, 10.31 pm"}
                />
              </div>
              <div className="w-full flex items-center justify-end">
                <ChatBubbleRight text={"  Study?"} time={"Today, 10.32 pm"} />
              </div>
              <div className="w-full flex items-center justify-start">
                <ChatBubbleLeft
                  text={"  I already finished my study"}
                  time={"Today, 10.32 pm"}
                />
              </div>
              <div className="w-full flex items-center justify-end">
                <ChatBubbleRight text={"  Good "} time={"Today, 10.33 pm"} />
              </div>

              <div className="w-full gap-10 flex ">
                <div className="flex items-center justify-center w-full relative">
                  <button className="h-7 w-7 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 absolute left-10 text-2xl font-normal">
                    +
                  </button>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full rounded-full bg-white h-14 border border-gray-300 px-20"
                  />
                  <div className="absolute right-20">
                    <VscDeviceCamera size={30} className="text-gray-400  " />
                  </div>
                  <div className="absolute right-8">
                    <FiSend size={25} className="text-blue-500  " />
                  </div>
                </div>
                <div className="rounded-full bg-white h-14 border border-gray-300 px-14 relative ">
                  <div className="absolute right-10 top-3">
                    <TiMicrophoneOutline
                      size={30}
                      className="text-gray-600  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
