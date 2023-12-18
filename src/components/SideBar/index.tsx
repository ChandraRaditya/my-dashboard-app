"use client";

import React, { useState } from "react";
import Icon from "@/components/Icon";

interface navigation {
  id: number;
  icon: string;
  isActive: boolean;
  link: string;
}

const SideBar = () => {
  const [active, setActive] = useState(1);
  const navigation = [
    {
      id: 1,
      icon: "icons/home",
      isActive: false,
      link: "/",
    },
    {
      id: 2,
      icon: "icons/notification",
      isActive: false,
      link: "/notification",
    },
    {
      id: 3,
      icon: "icons/schedule",
      isActive: false,
      link: "/notification",
    },
    {
      id: 4,
      icon: "icons/customer",
      isActive: false,
      link: "/notification",
    },
    {
      id: 5,
      icon: "icons/transaction",
      isActive: false,
      link: "/transaction",
    },
    {
      id: 6,
      icon: "icons/setting",
      isActive: false,
      link: "/setting",
    },
  ];

  return (
    <div className="py-5 flex flex-col items-center gap-32">
      <div className="flex flex-col items-center gap-16">
        <div className="text-3xl font-semibold">S.</div>
        <Icon
          icon={"icons/chat"}
          height={20}
          width={20}
          customStyle={"bg-orange-200 p-2"}
        />
      </div>
      <div className="bg-[#F6F6F8] p-2 rounded-3xl">
        <ul className="flex flex-col gap-5 cursor-pointer">
          {navigation.map((val: navigation, index: number) => {
            return (
              <li key={index} onClick={() => setActive(val.id)}>
                <Icon
                  icon={val.icon}
                  isActive={val.id == active ? true : false}
                  height={20}
                  width={20}
                  customStyle={`${
                    val.id == active ? "bg-[#4553dc]" : ""
                  } transition delay-150 duration-500 ease-in-out p-2`}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Icon
          icon={"avatars/avatar1"}
          height={40}
          width={40}
          customStyle={"bg-purple-200"}
        />
        <Icon
          icon={"icons/logout"}
          height={20}
          width={20}
          customStyle={"bg-[#F6F6F8] p-2"}
        />
      </div>
    </div>
  );
};

export default SideBar;
