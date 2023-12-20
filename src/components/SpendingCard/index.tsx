import React from "react";
import PropTypes from "prop-types";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";
import formatDate from "@/utils/formatDate";

interface SpendingData {
  image: string;
  detail: string;
  date: Date;
}

interface SpendingCard {
  spendingData: SpendingData[];
}

const SpendingCard = (props: SpendingCard) => {
  const { formatFullWithTime } = formatDate();
  return (
    <BaseCard isBorder={true} customStyle={"px-4 py-5"}>
      <div className="flex flex-row justify-between">
        <h2 className="mb-4">Latest spending</h2>
        <Icon
          icon={"icons/option"}
          height={20}
          width={20}
          customStyle={"mt-[-2px] cursor-pointer"}
        />
      </div>
      <div className="flex flex-col">
        {props.spendingData.map((value, index) => {
          return (
            <div
              key={index}
              className="flex flex-row gap-4 py-3 border-b border-gray-200 last:border-0"
            >
              <Icon
                icon={value.image}
                height={40}
                width={40}
                customStyle={"bg-blue-200 p-2"}
              />
              <div className="flex flex-col justify-center">
                <div className="text-sm font-medium">{value.detail}</div>
                <div className="text-xs text-gray-400">
                  {formatFullWithTime(value.date)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-center mt-4 gap-2">
        <button className="text-sm text-[#4553DC]">View all</button>
        <Icon
          icon={"icons/arrow-blue"}
          height={20}
          width={20}
          customStyle={""}
        />
      </div>
    </BaseCard>
  );
};

export default SpendingCard;
