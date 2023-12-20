import React from "react";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";
import formatNumber from "@/utils/formatNumber";

interface TransactionData {
  image: string;
  name: string;
  date: Date;
  total: number;
  detail: "incoming" | "outgoing";
}

interface TransactionCard {
  transactionData: TransactionData[];
}
const TransactionCard = (props: TransactionCard) => {
  return (
    <BaseCard isBorder={true} customStyle={"px-4 py-5 h-full overflow-hidden"}>
      <div className="flex flex-row justify-between pb-3 border-b border-gray-300">
        <h2 className="text-sm">Last transactions</h2>
        <div className="flex flex-row gap-6 text-xs text-gray-500">
          <button className="underline">Newest</button>
          <button className="underline">Oldest</button>
        </div>
      </div>
      <div className="flex flex-col overflow-y-scroll h-full pb-10">
        {props.transactionData.map((value, index) => {
          return (
            <div
              key={index}
              className="flex flex-row py-3 border-b border-gray-300"
            >
              <div className="flex flex-row gap-4 grow">
                <Icon
                  icon={"avatars/avatar1"}
                  height={40}
                  width={40}
                  customStyle={"bg-purple-200"}
                />
                <div className="flex flex-col justify-center gap-1">
                  <div className="text-xs font-medium">{value.name}</div>
                  <div className="text-[10px] text-gray-400">
                    {value.date.toDateString()}
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center gap-4 grow">
                <div className="text-sm font-medium">{`${
                  value.detail == "incoming" ? "+" : "-"
                }$${formatNumber(value.total)}`}</div>
                <Icon
                  icon={"icons/option"}
                  height={20}
                  width={20}
                  customStyle={"cursor-pointer"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </BaseCard>
  );
};

TransactionCard.propTypes = {};

export default TransactionCard;
