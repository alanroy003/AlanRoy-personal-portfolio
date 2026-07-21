import { useState, useEffect } from "react";

export const useLoadingProgress = (speed = 15, onComplete) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          if (onComplete) onComplete();
          return 100;
        }
        // Increment by random steps between 1 and 4 for a natural fast feel
        return prev + Math.floor(Math.random() * 4) + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed, onComplete]);

  return { progress: Math.min(progress, 100), isComplete };
};
