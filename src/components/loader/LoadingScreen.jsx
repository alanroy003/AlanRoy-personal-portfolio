import React from "react";
import { useLoadingProgress } from "../../hooks/useLoadingProgress";

const LoadingScreen = ({ onFinish }) => {
  const { progress } = useLoadingProgress(12, () => {
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 400);
  });

  const filledBlocks = Math.floor(progress / 25);

  const COLORS = {
    screenBg: "#DDDDDD",
    fontColor: "#B6B6B6",
    batteryBorder: "#D8D8D8",
    batteryBg: "#DDDDDD",
    activeBlock: "#B6B6B6",
    emptyBlock: "#A3A3A3",
    statusText: "#525252",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center select-none"
      style={{ backgroundColor: COLORS.screenBg }}
    >
      <div className="flex flex-col items-center gap-4">
        {" "}
        {/* Reduced gap from 6 to 4 */}
        {/* Shrunk Percentage Counter (text-4xl / text-5xl instead of 7xl / 8xl) */}
        <div
          className="font-pixel text-4xl md:text-5xl tracking-wider"
          style={{ color: COLORS.fontColor }}
        >
          {progress}%
        </div>
        {/* Battery Container */}
        <div className="flex items-center">
          {/* Outer Battery Frame: Shrunk width to w-36 (from 56) & height to h-10 (from 16) */}
          <div
            className="w-36 h-10 border-2 rounded-md p-1 flex gap-1 shadow-inner"
            style={{
              borderColor: COLORS.batteryBorder,
              backgroundColor: COLORS.batteryBg,
            }}
          >
            {[1, 2, 3, 4].map((blockIndex) => (
              <div
                key={blockIndex}
                className="flex-1 h-full rounded-xs transition-all duration-300 ease-out"
                style={{
                  backgroundColor:
                    blockIndex <= filledBlocks
                      ? COLORS.activeBlock
                      : COLORS.emptyBlock,
                  opacity: blockIndex <= filledBlocks ? 1 : 0.2,
                  transform:
                    blockIndex <= filledBlocks ? "scale(1)" : "scale(0.95)",
                }}
              />
            ))}
          </div>

          {/* Battery Cap: Shrunk to w-2 h-5 (from w-3 h-8) to match the new battery height */}
          <div
            className="w-2 h-5 rounded-r-sm -ml-0.5"
            style={{ backgroundColor: COLORS.batteryBorder }}
          />
        </div>
        {/* Status Text (Slightly smaller text-base) */}
        <p
          className="font-pixel text-base tracking-widest uppercase"
          style={{ color: COLORS.statusText }}
        >
          {progress < 100 ? "System Loading..." : "Ready"}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
