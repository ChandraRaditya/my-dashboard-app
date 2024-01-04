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

  const circularOptions = {
    responsive: true,
  };

  const cirucularPlugins = [
    {
      id: "roundedDoughnoutChartjs",
      afterUpdate: function (chart: any) {
        const arcs = chart.getDatasetMeta(0).data;

        arcs.forEach(function (arc: any) {
          arc.round = {
            x: (chart.chartArea.left + chart.chartArea.right) / 2,
            y: chart.chartArea.top + chart.chartArea.bottom - 66,
            radius: (arc.outerRadius + arc.innerRadius) / 2,
            thickness: (arc.outerRadius - arc.innerRadius) / 2,
            backgroundColor: arc.options.backgroundColor,
          };
        });
      },
      afterDraw: (chart: any) => {
        const { ctx, canvas } = chart;

        chart.getDatasetMeta(0).data.forEach((arc: any) => {
          const startAngle = Math.PI / 2 - arc.startAngle;
          const endAngle = Math.PI / 2 - arc.endAngle;

          if (arc.options.backgroundColor == "rgb(69, 8, 220, 1)") {
            // Calculate positions for start
            const startX = arc.round.radius * Math.sin(startAngle);
            const startY = arc.round.radius * Math.cos(startAngle);

            // Draw rounded edge at the start for background rgb(69, 8, 220, 1)
            ctx.save();
            ctx.translate(arc.round.x, arc.round.y);
            ctx.fillStyle = arc.options.backgroundColor;
            ctx.beginPath();
            ctx.arc(startX, startY, arc.round.thickness, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
          }

          ctx.save();
          ctx.translate(arc.round.x, arc.round.y);
          ctx.fillStyle = arc.options.backgroundColor;
          ctx.beginPath();
          ctx.arc(
            arc.round.radius * Math.sin(endAngle),
            arc.round.radius * Math.cos(endAngle),
            arc.round.thickness,
            0,
            2 * Math.PI,
          );
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        });
      },
    },
  ];

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
        <div className="min-h-[220px] absolute top-[-60px] scale-[90%]">
          <Doughnut
            data={data}
            plugins={cirucularPlugins}
            options={circularOptions}
          />
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
