"use client";

import React, { useState } from "react";
import Icon from "@/components/Icon";
import "./index.scss";

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
    <div className="sidebar">
      <div className="sidebar__container-username">
        <div className="sidebar__username">S.</div>
        <Icon
          icon={"icons/chat"}
          height={20}
          width={20}
          customStyle={"sidebar__username-icon"}
        />
      </div>
      <div className="sidebar__container-navigation">
        <ul className="sidebar__navigation-list">
          {navigation.map((val: navigation, index: number) => {
            return (
              <li key={index} onClick={() => setActive(val.id)}>
                <Icon
                  icon={val.icon}
                  isActive={val.id == active ? true : false}
                  height={20}
                  width={20}
                  customStyle={`${
                    val.id == active ? "sidebar__navigation-item--active" : ""
                  } sidebar__navigation-item`}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar__container-logout">
        <Icon
          icon={"avatars/avatar1"}
          height={40}
          width={40}
          customStyle={"sidebar__user-logo"}
        />
        <button className="button--logout">
          <Icon
            icon={"icons/logout"}
            height={20}
            width={20}
            customStyle={"sidebar__logout-icon"}
          />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
