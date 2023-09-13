"use client";

import Ball from "@/components/Ball";
import Wheel from "@/components/Wheel";
import { useState } from "react";

const Home = () => {
  const [selectedNumber, setSelectedNumber] = useState<{
    num: number;
    color: string;
  }>({
    num: 0,
    color: "green",
  });

  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    setIsSpinning(true);

    const randomDuration = Math.floor(Math.random() * (8000 - 5000 + 1)) + 5000; // Random time between 5s to 15s

    setTimeout(() => {
      setIsSpinning(false);
    }, randomDuration);
  };

  return (
    <div className="bg-slate-700 text-center min-h-screen py-10">
      <button
        onClick={handleSpin}
        className={`px-4 py-2  text-white mx-2 ${
          isSpinning ? "bg-green-800" : "bg-green-600"
        }`}
        disabled={isSpinning}
      >
        Spin
      </button>
      <button
        className={`px-4 py-2  text-white mx-2 ${
          isSpinning ? "bg-green-800" : "bg-green-600"
        }`}
      >
        New Game
      </button>
      <div className="bg-gray-900 text-white flex flex-col mt-8">
        <span>Results:</span>
        <span className="">Selected Number: {selectedNumber.num}</span>
        <span className="">Selected Color: {selectedNumber.color}</span>
      </div>
      <div className="min-h-[100vh] flex items-center justify-between mx-[10vw]">
        <section className="flex items-start justify-center rounded-[50%]">
          <Wheel />
          <Ball setSelectedNumber={setSelectedNumber} isSpinning={isSpinning} />
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
