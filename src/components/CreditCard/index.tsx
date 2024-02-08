import React from "react";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";
import formatDate from "@/utils/formatDate";
import "./index.scss";

interface CreditCard {
  name: string;
  cardNumber: string;
  expiredDate: Date;
}

const CreditCard = (props: CreditCard) => {
  const { formatMonthYear } = formatDate();
  return (
    <BaseCard isBorder={false} customStyle={"credit-card"}>
      <div className="credit-card__container-content">
        <div className="credit-card__section-top">
          <div className="credit-card__name">S.</div>
          <Icon icon={"icons/visa"} height={60} width={60} customStyle={""} />
        </div>
        <div className="credit-card__section-bottom">
          <div className="credit-card__information">
            <div>{props.cardNumber}</div>
            <div>{props.name}</div>
          </div>
          <div className="credit-card__expiration-date">
            {formatMonthYear(props.expiredDate)}
          </div>
        </div>
      </div>
      <Icon
        icon={"illustrations/credit"}
        height={180}
        width={180}
        customStyle={"credit-card__logo"}
      />
    </BaseCard>
  );
};

CreditCard.propTypes = {};

export default CreditCard;
