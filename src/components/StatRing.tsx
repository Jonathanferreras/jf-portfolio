"use client";

import { useEffect, useRef, useState } from "react";

type StatRingProps = {
  value: number | string;
  label: string;
  delay?: number;
  strokeWidth?: number;
  size?: number;
  paddingRatio?: number;
};

export default function StatRing({
  value,
  label,
  delay = 0,
  strokeWidth = 10,
  size = 112,
  paddingRatio = 0.15,
}: StatRingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animate || typeof value !== "number") return;

    let start: number | null = null;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      const current = Math.round(value * percent);
      setDisplayedValue(current);
      if (percent < 1) requestAnimationFrame(step);
    };

    const timeout = setTimeout(() => requestAnimationFrame(step), delay * 1000);
    return () => clearTimeout(timeout);
  }, [animate, delay, value]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const padding = size * paddingRatio;
  const innerSize = size - padding * 2;
  const fontSizeValue = innerSize * 0.35;
  const fontSizeLabel = innerSize * 0.18;

  return (
    <div
      ref={ref}
      className="relative"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        className="rotate-[90deg]"
        width={size}
        height={size}
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          style={
            animate
              ? {
                  animation: `fillRing 2s ease-out forwards`,
                  animationDelay: `${delay}s`,
                }
              : {}
          }
        />
      </svg>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-[color:var(--accent)] text-center font-semibold leading-tight"
        style={{ padding: `${padding}px` }}
      >
        <div
          style={{
            fontSize: `${fontSizeValue}px`,
            lineHeight: 1,
          }}
        >
          {typeof value === "number" ? displayedValue.toLocaleString() : value}
        </div>
        <div
          style={{
            fontSize: `${fontSizeLabel}px`,
            lineHeight: 1.1,
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
