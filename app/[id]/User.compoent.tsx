"use client";

import Image from "next/image";
import Menus from "./Menus.compoent";

interface IUser {
  data: {
    name: string;
    age: number;
  };
}
const UserDetail = ({ data }: IUser) => {
  console.log("data", data);
  return (
    <div className=" w-full h-screen justify-center flex">
      <div className="w-full">
        <div className="h-[150px] bg-blue-200 rounded-b-[24px] relative">
          <div className="absolute bottom-[-40px] w-full flex justify-center">
            <div className="rounded-full  border-white border-4 overflow-hidden">
              <Image
                src="https://picsum.photos/200"
                alt="wadudu"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex flex-col w-full items-center justify-center">
            <h1 className="text-xl font-bold">Dewa Qintoro</h1>
            <div>Frontend Engineer</div>
          </div>
          <Menus />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
