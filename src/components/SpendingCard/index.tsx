import React from "react";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";
import formatDate from "@/utils/formatDate";
import "./index.scss";

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
    <BaseCard isBorder={true} customStyle={"spending-card"}>
      <div className="spending-card__container-top">
        <h2 className="spending-card__title">Latest spending</h2>
        <button className="spending-card__button-more">
          <Icon
            icon={"icons/option"}
            height={20}
            width={20}
            customStyle={"spending-card__button-more-icon"}
          />
        </button>
      </div>
      <div className="spending-card__container-list">
        {props.spendingData.map((value, index) => {
          return (
            <div key={index} className="spending-card__list">
              <Icon
                icon={value.image}
                height={40}
                width={40}
                customStyle={"spending-card__icon"}
              />
              <div className="spending-card__section-detail">
                <div className="spending-card__item-title">{value.detail}</div>
                <div className="spending-card__item-date">
                  {formatFullWithTime(value.date)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="spending-card__container-bottom">
        <button className="spending-card__button-view">View all</button>
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
