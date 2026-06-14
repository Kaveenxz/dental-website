// hooks/useCountUp.ts
"use client";
import { useEffect, useState, useRef } from "react";

export function useCountUp(end: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0); // Provide an initial value (e.g., 0)

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, startCounting]);

  return count;
}