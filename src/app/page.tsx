const colors = ["red", "black"];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700">
      <main className="flex flex-col items-center justify-center flex-1 p-4 text-center">
        <h1 className="text-4xl font-bold text-gray-100">
          Welcome to Roulette Wheel!
        </h1>

        <div className="relative mt-6 w-96 h-96">
          <svg
            className="rotate-0 transition-transform duration-5000 transform"
            width="384"
            height="384"
          >
            {colors.map((color, index) => (
              <path
                key={index}
                fill={color}
                d={`M192,192 L192,0 A192,192 0 0,1 
                                ${
                                  192 +
                                  192 *
                                    Math.sin(
                                      ((index + 1) * (2 * Math.PI)) /
                                        colors.length
                                    )
                                },
                                ${
                                  192 -
                                  192 *
                                    Math.cos(
                                      ((index + 1) * (2 * Math.PI)) /
                                        colors.length
                                    )
                                } Z`}
              />
            ))}
          </svg>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {colors.map((_, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "50%",
                  height: 2,
                  background: "white",
                  transformOrigin: "100%",
                  transform: `rotate(${
                    ((index + 0.5) * 360) / colors.length
                  }deg)`,
                }}
              ></div>
            ))}
          </span>
        </div>
      </main>
    </div>
  );
};

export default Home;
