"use client";

import React from "react";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Scale,
  Tick,
  CoreScaleOptions,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import "./index.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BalanceCard = () => {
  const dataLineChart = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [3, 6, 9, 10, 12, 12, 14],
        borderColor: "rgba(69, 8, 220, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: false,
        pointRadius: 0,
        pointStyle: "none",
      },
    ],
  };

  const optionLineChart = {
    scales: {
      x: {
        display: false, // Hide x-axis
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        display: false, // Hide y-axis
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };

  const optionsBarChart: ChartOptions<any> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
        ticks: {
          callback: function (
            this: Scale<CoreScaleOptions>,
            tickValue: number | string,
            index: number,
            ticks: Tick[],
          ) {
            return `$${tickValue}`;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };

  const dataBarChart = {
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb"],
    datasets: [
      {
        data: [10, 20, 40, 60, 60],
        backgroundColor: "rgb(69, 8, 220, 1)",
      },
      {
        data: [10, 20, 40, 60, 60],
        backgroundColor: "rgba(190, 195, 251, 1)",
      },
    ],
  };

  return (
    <BaseCard isBorder={false} customStyle={"balance-card"}>
      <div className="balance-card__container-top">
        <h2 className="balance-card__title">Balance statistics</h2>
        <button className="balance-card__filter-button">
          <div>Filter</div>
          <Icon
            icon={"icons/arrow-down"}
            height={12}
            width={12}
            customStyle={""}
          />
        </button>
      </div>
      <div className="balance-card__container-balance">
        <div className="balance-card__balance-section">
          <div className="balance-card__balance">$564</div>
          <div className="balance-card__information-balance">
            <Icon
              icon={"illustrations/money"}
              height={50}
              width={50}
              customStyle={""}
            />
            <div className="balance-card__balance-label">
              Your total balance
            </div>
          </div>
          <div className="chart-line">
            <div className="chart-line__section">
              <Line options={optionLineChart} data={dataLineChart} />
            </div>
            <div className="chart-line__information">
              <Icon
                icon={"icons/arrow-up"}
                height={14}
                width={14}
                customStyle={""}
              />
              <div className="chart-line__percentage">6%</div>
            </div>
          </div>
          <div className="chart-line__label">
            Always see your earnings updates
          </div>
        </div>
        <div className="chart-bar">
          <div className="chart-bar__section">
            <Bar options={optionsBarChart} data={dataBarChart} />
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default BalanceCard;
