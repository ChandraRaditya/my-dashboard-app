import React from "react";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";
import formatNumber from "@/utils/formatNumber";
import formatDate from "@/utils/formatDate";
import "./index.scss";

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
  const { formatDayMonthYear } = formatDate();
  return (
    <BaseCard isBorder={false} customStyle={"transaction-card"}>
      <div className="transaction-card__container-top">
        <h2 className="transaction-card__title">Last transactions</h2>
        <div className="transaction-card__container-order">
          <button className="transaction-card__button-order">Newest</button>
          <button className="transaction-card__button-order">Oldest</button>
        </div>
      </div>
      <div className="transaction-card__container-list">
        {props.transactionData.map((value, index) => {
          return (
            <div key={index} className="transaction-card__item">
              <div className="transaction-card__item-content">
                <Icon
                  icon={value.image}
                  height={40}
                  width={40}
                  customStyle={"transaction-card__icon"}
                />
                <div className="transaction-card__section-detail">
                  <div className="transaction-card__item-name">
                    {value.name}
                  </div>
                  <div className="transaction-card__item-date">
                    {formatDayMonthYear(value.date)}
                  </div>
                </div>
              </div>
              <div className="transaction-card__item-cost">
                <div className="transaction-card__item-label">{`${
                  value.detail == "incoming" ? "+" : "-"
                }$${formatNumber(value.total).replace(".", ",")}`}</div>
                <Icon
                  icon={"icons/option"}
                  height={20}
                  width={20}
                  customStyle={"transaction-card__item-option"}
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
