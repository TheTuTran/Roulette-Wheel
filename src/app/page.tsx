"use client";

import Ball from "@/components/Ball";
import ResultsModal from "@/components/ResultsModal";
import Wheel from "@/components/Wheel";
import { ROULETTE_VALUES } from "@/config";
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
  const [showWheelResult, setShowWheelResult] = useState(false);
  const ORDERED_VALUES = ROULETTE_VALUES.sort();

  const handleSpin = () => {
    setIsSpinning(true);

    const randomDuration = Math.floor(Math.random() * (8000 - 5000 + 1)) + 5000; // Random time between 5s to 15s

    setTimeout(() => {
      setIsSpinning(false);
      setShowWheelResult(true);
      setTimeout(() => {
        setShowWheelResult(false);
      }, 3000);
    }, randomDuration);
  };

  return (
    <>
      {showWheelResult ? (
        <ResultsModal selectedNumber={selectedNumber} />
      ) : (
        <></>
      )}
      <div className="bg-slate-700 text-center min-h-screen py-8">
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

        <div className="min-h-[100vh] flex items-center justify-between mx-[10vw]">
          <section className="flex items-start justify-center rounded-[50%]">
            <Wheel />
            <Ball
              setSelectedNumber={setSelectedNumber}
              isSpinning={isSpinning}
            />
          </section>
          <section className="text-white">
            <div className="grid grid-cols-10">
              {ORDERED_VALUES.map(({ num }) => (
                <div className="border w-full h-full m-4 flex items-center justify-center">
                  {num}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
