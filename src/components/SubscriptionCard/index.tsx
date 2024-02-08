import React from "react";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";
import "./index.scss";

const SubscriptionCard = () => {
  return (
    <BaseCard isBorder={true} customStyle={"subscription-card"}>
      <div className="subscription-card__container-top">
        <h2 className="subscription-card__title">Go to premium</h2>
      </div>
      <div className="subscription-card__container-image">
        <Icon
          icon={"illustrations/subscribe"}
          height={100}
          width={100}
          customStyle={""}
        />
      </div>
      <div className="subscription-card__container-label">
        <div className="subscription-card__label-top">Need more features?</div>
        <div className="subscription-card__label-bottom">
          Update your account to premium to get more features.
        </div>
      </div>
      <div className="subscription-card__container-button">
        <button className="subscription-card__button">Get now</button>
      </div>
    </BaseCard>
  );
};

export default SubscriptionCard;
