import React from "react";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";
import formatDate from "@/utils/formatDate";

interface CreditCard {
  name: string;
  cardNumber: string;
  expiredDate: Date;
}

const CreditCard = (props: CreditCard) => {
  const { formatMonthYear } = formatDate();
  return (
    <BaseCard
      isBorder={false}
      customStyle={"px-5 h-full bg-[#4553DC] rounded-xl relative"}
    >
      <div className="flex flex-col justify-between text-white h-full pb-5">
        <div className="flex flex-row justify-between items-center">
          <div className="text-3xl font-semibold">S.</div>
          <Icon icon={"icons/visa"} height={60} width={60} customStyle={""} />
        </div>
        <div className="flex flex-row justify-between items-center text-sm">
          <div className="flex flex-col gap-2">
            <div>{props.cardNumber}</div>
            <div>{props.name}</div>
          </div>
          <div className="self-end">{formatMonthYear(props.expiredDate)}</div>
        </div>
      </div>
      <Icon
        icon={"illustrations/credit"}
        height={180}
        width={180}
        customStyle={
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      />
    </BaseCard>
  );
};

CreditCard.propTypes = {};

export default CreditCard;
