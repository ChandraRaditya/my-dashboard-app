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
    <BaseCard
      isBorder={false}
      customStyle={"px-4 py-5 bg-white rounded-xl h-full"}
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-sm">Balance statistics</h2>
        <button className="bg-[#F6F6F8] p-2 flex flex-row gap-3 rounded-xl text-xs items-center">
          <div>Filter</div>
          <Icon
            icon={"icons/arrow-down"}
            height={12}
            width={12}
            customStyle={""}
          />
        </button>
      </div>
      <div className="grid grid-cols-[20%_80%]">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-semibold">$564</div>
          <div className="flex flex-row gap-2 pb-3 border-b border-gray-300">
            <Icon
              icon={"illustrations/money"}
              height={50}
              width={50}
              customStyle={""}
            />
            <div className="text-[12px] leading-4 w-[80px]">
              Your total balance
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="grow h-[40px] scale-75">
              <Line options={optionLineChart} data={dataLineChart} />
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Icon
                icon={"icons/arrow-up"}
                height={14}
                width={14}
                customStyle={""}
              />
              <div className="text-[10px] mr-3">6%</div>
            </div>
          </div>
          <div className="text-[10px] text-gray-400">
            Always see your earnings updates
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="pl-4 h-[190px] min-w-[231px] max-w-[800px] mt-[8px]">
            <Bar options={optionsBarChart} data={dataBarChart} />
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default BalanceCard;
