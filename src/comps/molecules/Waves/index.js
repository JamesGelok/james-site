import React from "react";
import Wave from "react-wavify";

export default React.memo(function Waves({
  waves = [
    "#f3e7c9",
    "#ddceb3",
    "#c6b59e",
    "#b09d89",
    "#988675",
    "#827063",
    "#6c5a50",
    "#57463f",
    "#43322d",
    "#2f211e",
  ],
  zIndex,
}) {
  return (
    <>
      {waves.map((el, i) => {
        return (
          <Wave
            fill={el}
            paused={false}
            style={{
              position: "absolute",
              bottom: 15 * 5 - i * 15,
              zIndex: zIndex ?? i,
            }}
            options={{
              height: 20,
              amplitude: 20,
              speed: 0.08,
              points: 4 + Math.floor(Math.random() * 6),
            }}
          />
        );
      })}
    </>
  );
});
