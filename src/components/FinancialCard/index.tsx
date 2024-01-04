import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BaseCard from "@/components/BaseCard";
import formatNumber from "@/utils/formatNumber";

interface FinancialCard {
  expensePercentage: number;
  expenseTotal: number;
  incomePercentage: number;
  incomeTotal: number;
}

const FinancialCard = (props: FinancialCard) => {
  return (
    <BaseCard isBorder={true} customStyle={"px-3 py-5"}>
      <h2 className="mb-4">Expenses and income</h2>
      <div className="flex flex-row justify-between text-xs">
        <div className="flex flex-col">
          <div>Expense</div>
          <div className="text-sm font-semibold">
            {props.expensePercentage}%
          </div>
          <div className="text-[10px] text-gray-400">
            {formatNumber(props.expenseTotal ?? 0)}
          </div>
        </div>
        <div className="flex flex-col mr-[5px]">
          <div className="h-4 w-0 mx-auto border-x border-gray-400" />
          <div>vs</div>
          <div className="h-4 w-0 mx-auto border-x border-gray-400" />
        </div>
        <div className="flex flex-col">
          <div>Income</div>
          <div className="text-sm font-semibold">{props.incomePercentage}%</div>
          <div className="text-[10px] text-gray-400">
            {formatNumber(props.incomeTotal ?? 0)}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-between mt-3">
        <div
          className="rounded-[3px] h-4 bg-[#4553DC]"
          style={{ flexBasis: `${props.expensePercentage}%` }}
        />
        <div
          className="rounded-[3px] h-4 bg-[#FF9C31] !basis-[${props.incomePercentage}%]"
          style={{ flexBasis: `${props.incomePercentage}%` }}
        />
      </div>
    </BaseCard>
  );
};

export default FinancialCard;
