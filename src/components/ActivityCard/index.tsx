import React from "react";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";

const ActivityCard = () => {
  const items = [
    {
      item: "Macbook",
      isChecked: false,
    },
    {
      item: "Motorcycle",
      isChecked: false,
    },
    {
      item: "Bicycle",
      isChecked: false,
    },
    {
      item: "Iphon 14 pro max",
      isChecked: false,
    },
  ];

  return (
    <BaseCard isBorder={false} customStyle={"h-full bg-white rounded-xl"}>
      <div className="grid grid-cols-[60%_40%]">
        <div className="px-4 py-4 flex flex-col justify-start gap-4 border-r border-gray-300">
          <h2 className="text-sm">List of items to buy </h2>
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-col gap-1">
              <div className="text-lg font-semibold">02:00</div>
              <div className="text-xs text-gray-400">Sat, August 12</div>
            </div>
            <Icon
              icon={"icons/arrow-right"}
              height={20}
              width={20}
              customStyle={""}
            />
            <div className="flex flex-col gap-1">
              <div className="text-lg font-semibold">02:00</div>
              <div className="text-xs text-gray-400">Sat, August 12</div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-1">
            <div className="text-xs">
              <span className="text-gray-400">0/3 </span>Shopping list
            </div>
            <button className="text-xs flex flex-row items-center gap-1">
              <Icon
                icon={"icons/plus"}
                height={15}
                width={15}
                customStyle={"mt-[-2px]"}
              />
              <div>Add items</div>
            </button>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-1">
            {items.map((value: any, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-[#F6F6F8] flex flex-row justify-between p-3 rounded-xl text-xs"
                >
                  <div className="flex flex-row gap-2 items-center">
                    <input type="checkbox" name="" id="" />
                    <label>{value.item}</label>
                  </div>
                  <Icon
                    icon={"icons/option"}
                    height={20}
                    width={20}
                    customStyle={"cursor-pointer"}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-4 py-4 flex flex-col">
          <div className="mb-4">Esther Howard</div>
          <div className="flex flex-col gap-2 h-[120px] h-max-[120px] overflow-y-scroll text-xs">
            <div className="flex flex-row gap-2 self-end">
              <div className="bg-[#4553DC] text-white rounded-lg rounded-br-none p-3">
                Are you ready?
              </div>
              <Icon
                icon={"avatars/avatar3"}
                height={40}
                width={40}
                customStyle={"bg-purple-200"}
              />
            </div>
            <div className="flex flex-row-reverse gap-2 self-start">
              <div className="bg-[#F6F6F8] rounded-lg rounded-bl-none p-3">
                I have prepared everything
              </div>
              <Icon
                icon={"avatars/avatar3"}
                height={40}
                width={40}
                customStyle={"bg-purple-200"}
              />
            </div>
          </div>
          <div className="bg-[#F6F6F8] rounded-xl grow p-2 flex flex-col justify-between">
            <textarea
              className="bg-[#F6F6F8] text-xs resize-none outline-none placeholder:text-xs placeholder:text-gray-400"
              rows={3}
              placeholder="Type your message"
            />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <button>
                  <Icon
                    icon={"icons/emoticon"}
                    height={20}
                    width={20}
                    customStyle={"mt-[-2px]"}
                  />
                </button>
                <button>
                  <Icon
                    icon={"icons/attachment"}
                    height={20}
                    width={20}
                    customStyle={"mt-[-2px]"}
                  />
                </button>
              </div>
              <button className="text-xs text-gray-200 px-6 py-2 rounded-md bg-[#4553DC]">
                Send now
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default ActivityCard;
