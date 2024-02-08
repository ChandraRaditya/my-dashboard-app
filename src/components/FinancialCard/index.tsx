import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BaseCard from "@/components/BaseCard";
import formatNumber from "@/utils/formatNumber";
import "./index.scss";

interface FinancialCard {
  expensePercentage: number;
  expenseTotal: number;
  incomePercentage: number;
  incomeTotal: number;
}

const FinancialCard = (props: FinancialCard) => {
  return (
    <BaseCard isBorder={true} customStyle={"financial-card"}>
      <h2 className="financial-card__title">Expenses and income</h2>
      <div className="financial-card__section-information">
        <div className="financial-card__category">
          <div>Expense</div>
          <div className="financial-card__percentage">
            {props.expensePercentage}%
          </div>
          <div className="financial-card__number">
            {formatNumber(props.expenseTotal ?? 0)}
          </div>
        </div>
        <div className="financial-card__label-section">
          <div className="financial-card__label-line" />
          <div>vs</div>
          <div className="financial-card__label-line" />
        </div>
        <div className="financial-card__category">
          <div>Income</div>
          <div className="financial-card__percentage">
            {props.incomePercentage}%
          </div>
          <div className="financial-card__number">
            {formatNumber(props.incomeTotal ?? 0)}
          </div>
        </div>
      </div>
      <div className="financial-card__section-chart">
        <div
          className="financial-card__chart financial-card__chart--blue"
          style={{ flexBasis: `${props.expensePercentage}%` }}
        />
        <div
          className="financial-card__chart financial-card__chart--yellow"
          style={{ flexBasis: `${props.incomePercentage}%` }}
        />
      </div>
    </BaseCard>
  );
};

export default FinancialCard;
