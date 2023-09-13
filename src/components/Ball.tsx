import { ROULETTE_VALUES } from "@/config";
import { FC, useEffect, useRef } from "react";

interface BallProps {
  isSpinning: boolean;
  setSelectedNumber: (number: { num: number; color: string }) => void;
}

const Ball: FC<BallProps> = ({ isSpinning, setSelectedNumber }) => {
  const rotationRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  const calculateLandedValue = (
    finalRotation: number,
    values: typeof ROULETTE_VALUES
  ) => {
    const segmentAngle = 360 / values.length;

    let landedSegment = Math.round((finalRotation % 360) / segmentAngle);

    const offset = 9;
    landedSegment = (landedSegment - offset + values.length) % values.length;

    return values[landedSegment];
  };

  const spin = () => {
    rotationRef.current += 5; // Adjust this value to change the speed of rotation
    const rotation = rotationRef.current % 360;
    const ballContainer = document.querySelector(".ballContainer");
    if (ballContainer instanceof HTMLElement) {
      ballContainer.style.transform = `rotate(${rotation}deg)`;
    }

    frameRef.current = requestAnimationFrame(spin);
  };

  useEffect(() => {
    if (isSpinning) {
      frameRef.current = requestAnimationFrame(spin);
    } else {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      const landedValue = calculateLandedValue(
        rotationRef.current,
        ROULETTE_VALUES
      );
      setSelectedNumber(landedValue);
    }
  }, [isSpinning]);

  return (
    <div className={`ballContainer `}>
      <div className="ball" />
    </div>
  );
};

export default Ball;
