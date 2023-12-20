"use client";

import React from "react";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const AnalyticCard = () => {
  const data = {
    datasets: [
      {
        data: [8, 10, 9, 8],
        backgroundColor: [
          "rgb(69, 8, 220, 1)",
          "rgba(255, 156, 49, 1)",
          "rgba(231, 90, 74, 1)",
          "rgba(246, 246, 248, 1)",
        ],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        weight: 100,
        cutout: "90%",
      },
    ],
  };

  return (
    <BaseCard
      isBorder={false}
      customStyle={"px-4 py-5 bg-white rounded-xl h-full"}
    >
      <div className="flex flex-row justify-between">
        <h2 className="mb-4">Analytic</h2>
        <Icon
          icon={"icons/option"}
          height={20}
          width={20}
          customStyle={"mt-[-2px] cursor-pointer"}
        />
      </div>
      <div className="flex flex-col-reverse items-center relative h-[80%]">
        <div className="h-[250px] absolute top-[-70px]">
          <Doughnut data={data} />
        </div>
        <div className="absolute bottom-12 z-10 flex flex-col gap-2">
          <div className="text-lg font-semibold">90%</div>
          <div className="text-xs text-gray-400">Done</div>
        </div>
        <div className="w-full flex flex-row gap-4 justify-center text-xs text-gray-400">
          <div className="flex flex-row items-center gap-2">
            <div className="bg-[#4553DC] w-2 h-2 rounded-xl mb-[2px]" />
            <div>Done</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-[#FF9C31] w-2 h-2 rounded-xl mb-[2px]" />
            <div>In progress</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-[#E75A4A] w-2 h-2 rounded-xl mb-[2px]" />
            <div>To do</div>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

AnalyticCard.propTypes = {};

export default AnalyticCard;
