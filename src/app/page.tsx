"use client";

import Wheel from "@/components/Wheel";
import { useState } from "react";
const numbers = [
  32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16,
  33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26, 0,
];

const Home = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <div className="bg-slate-700 text-center min-h-screen py-10">
      <button className="px-4 py-2 bg-green-600 text-white mx-2">Spin</button>
      <button className="px-4 py-2 bg-green-800 text-white mx-2">
        New Game
      </button>

      <Wheel />
    </div>
  );
};

export default Home;
