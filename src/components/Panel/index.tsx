import React from "react";
import BaseCard from "../BaseCard";
import FinancialCard from "../FinancialCard";

const Panel = () => {
  return (
    <div className="p-8 flex flex-col gap-6">
      <FinancialCard
        expensePercentage={70}
        expenseTotal={5653}
        incomePercentage={40}
        incomeTotal={2656}
      />
    </div>
  );
};

export default Panel;
