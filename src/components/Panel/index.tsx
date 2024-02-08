import React from "react";
import FinancialCard from "@/components/FinancialCard";
import SpendingCard from "@/components/SpendingCard";
import SubscriptionCard from "@/components/SubscriptionCard";
import "./index.scss";

const Panel = () => {
  const spendingData = [
    {
      image: "illustrations/shopping",
      detail: "Online Store",
      date: new Date(),
    },
    {
      image: "illustrations/hospital",
      detail: "Pay the hospital",
      date: new Date(),
    },
    {
      image: "illustrations/ticket",
      detail: "Ticket",
      date: new Date(),
    },
  ];
  return (
    <div className="panel">
      <FinancialCard
        expensePercentage={70}
        expenseTotal={5653}
        incomePercentage={40}
        incomeTotal={2656}
      />
      <SpendingCard spendingData={spendingData} />
      <SubscriptionCard />
    </div>
  );
};

export default Panel;
