import { FC } from "react";

interface ResultsModalProps {
  selectedNumber: {
    num: number;
    color: string;
  };
}

const ResultsModal: FC<ResultsModalProps> = ({ selectedNumber }) => {
  return (
    <div className="">
      <div className="z-10 absolute w-[200px] h-[130px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gray-900 text-white flex flex-col items-center justify-center mt-8">
        <span>Results:</span>
        <span className="">Selected Number: {selectedNumber.num}</span>
        <span className="">Selected Color: {selectedNumber.color}</span>
      </div>
    </div>
  );
};

export default ResultsModal;
