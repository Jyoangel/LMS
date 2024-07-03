import Image from "next/image";
import noti from "./img/notification.png";
import person1 from "./img/person1.png";
import { IoIosArrowDown } from "react-icons/io";

export default function uppernavbar() {
  return (
    <>
      <div className="h-20 w-full bg-white px-10 flex items-center justify-between shadow-lg">
        <h1 className="text-xl font-medium">Welcome Jay Kumar!</h1>
        <div className="flex gap-5 items-center justify-center">
          <Image src={noti} />
          <Image src={person1} />
          <h1 className="text-xl font-medium">Jay Kumar</h1>
          <IoIosArrowDown size={25} />
        </div>
      </div>
    </>
  );
}
