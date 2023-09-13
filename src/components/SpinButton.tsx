import { FC } from "react";

interface SpinButtonProps {}

const SpinButton: FC<SpinButtonProps> = ({}) => {
  function handleSpin() {}
  return (
    <div>
      <button
        onClick={handleSpin}
        className="px-4 py-2 bg-green-600 text-white mx-2"
      >
        Spin
      </button>
    </div>
  );
};

export default SpinButton;
