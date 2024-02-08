import React from "react";
import "./index.scss";

interface BaseCard {
  children: React.ReactNode;
  isBorder: boolean;
  customStyle: string;
}

const BaseCard = (props: BaseCard) => {
  return (
    <div className={`${props.isBorder && "base-card"} ${props.customStyle}`}>
      {props.children}
    </div>
  );
};

BaseCard.propTypes = {};

export default BaseCard;
