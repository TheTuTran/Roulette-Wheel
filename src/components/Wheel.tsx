import { ROULETTE_VALUES } from "@/config";
import { FC, useEffect, useState } from "react";

interface WheelProps {}

const Wheel: FC<WheelProps> = ({}) => {
  const radius = 230;

  return (
    <div
      className="h-[500px] w-[500px] rounded-full flex items-center justify-center relative border-2 border-gray-300"
      style={{
        backgroundImage: `conic-gradient(
            red 0% 2.0%,
            black 2.0% 4.7%,
            red 4.7% 7.4%,
            black 7.4% 10.1%,
            red 10.1% 12.8%,
            black 12.8% 15.5%,
            red 15.5% 18.2%,
            black 18.2% 20.9%,
            red 20.9% 23.6%,
            green 23.6% 26.3%,
            black 26.3% 29.0%,
            red 29.0% 31.7%,
            black 31.7% 34.4%,
            red 34.4% 37.1%,
            black 37.1% 39.8%,
            red 39.8% 42.5%,
            black 42.5% 45.2%,
            red 45.2% 47.9%,
            black 47.9% 50.6%,
            red 50.6% 53.3%,
            black 53.3% 56.0%,
            red 56.0% 58.7%,
            black 58.7% 61.4%,
            red 61.4% 64.1%,
            black 64.1% 66.8%,
            red 66.8% 69.5%,
            black 69.5% 72.2%,
            red 72.2% 74.9%,
            black 74.9% 77.6%,
            red 77.6% 80.3%,
            black 80.3% 83.0%,
            red 83.0% 85.7%,
            black 85.7% 88.4%,
            red 88.4% 91.1%,
            black 91.1% 93.8%,
            red 93.8% 96.5%,
            black 96.5% 99.2%,
            red 99.3% 100%
        )`,
      }}
    >
      <div className="absolute h-[420px] w-[420px] rounded-[50%] border-2 border-gray-300 flex items-start justify-center" />
      <div className="absolute bg-orange-950 h-[350px] w-[350px] rounded-[50%] border-2 border-gray-300" />
      <div className="absolute bg-yellow-600 h-[70px] w-[70px] rounded-[50%]" />
      <div className="absolute bg-orange-950 h-[40px] w-[40px] rounded-[50%]" />
      {ROULETTE_VALUES.map(({ num, color }, index) => {
        const angle = (index / ROULETTE_VALUES.length) * 360; // angle in degrees
        const radian = (angle * Math.PI) / 180; // convert angle to radian
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        return (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 text-white origin-center`}
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${
                angle + 90
              }deg)`,
            }}
          >
            <span>{num}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Wheel;
