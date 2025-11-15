// app/components/Counter.tsx
"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  end: number;      // target number
  duration?: number; // animation duration in ms (default: 2000)
}

export default function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}+</span>;
}
