import React from "react";
import PropTypes from "prop-types";

interface BaseCard {
  children: React.ReactNode;
  isBorder: boolean;
  customStyle: string;
}

const BaseCard = (props: BaseCard) => {
  return (
    <div
      className={`${props.isBorder && "border border-gray-300 rounded-xl"} ${
        props.customStyle
      }`}
    >
      {props.children}
    </div>
  );
};

BaseCard.propTypes = {};

export default BaseCard;
