"use client";

import { motion } from "motion/react";
import { type RefObject, useEffect, useId, useState } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  repeatDelay?: number;
  startXOffset?: number;
  endXOffset?: number;
  curvature?: number;
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  reverse = false,
  duration = 1.8,
  delay = 0,
  repeatDelay = 0.4,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#34d399",
  gradientStopColor = "#34d399",
  startXOffset = 0,
  endXOffset = 0,
  curvature = 0,
}: AnimatedBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [coords, setCoords] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;
      const c = containerRef.current.getBoundingClientRect();
      const a = fromRef.current.getBoundingClientRect();
      const b = toRef.current.getBoundingClientRect();
      const startX = a.left - c.left + a.width / 2 + startXOffset;
      const startY = a.top - c.top + a.height / 2;
      const endX = b.left - c.left + b.width / 2 + endXOffset;
      const endY = b.top - c.top + b.height / 2;
      setCoords({
        startX,
        startY,
        endX,
        endY,
        width: c.width,
        height: c.height,
      });
      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2;
      const controlX = midX + curvature;
      setPathD(`M ${startX},${startY} Q ${controlX},${midY} ${endX},${endY}`);
    };

    const observer = new ResizeObserver(updatePath);
    if (containerRef.current) observer.observe(containerRef.current);
    updatePath();

    return () => observer.disconnect();
  }, [containerRef, fromRef, toRef, startXOffset, endXOffset, curvature]);

  const lineLength = Math.abs(coords.endY - coords.startY);
  const stripe = Math.max(20, lineLength * 0.5);

  const y1Keyframes = reverse
    ? [coords.endY + stripe, coords.startY]
    : [coords.startY - stripe, coords.endY];
  const y2Keyframes = reverse
    ? [coords.endY, coords.startY - stripe]
    : [coords.startY, coords.endY + stripe];

  return (
    <svg
      aria-hidden="true"
      fill="none"
      width={coords.width}
      height={coords.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute top-0 left-0 transform-gpu",
        className,
      )}
      viewBox={`0 0 ${coords.width} ${coords.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1={coords.startX}
          x2={coords.startX}
          initial={{ y1: y1Keyframes[0], y2: y2Keyframes[0] }}
          animate={{ y1: y1Keyframes, y2: y2Keyframes }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}
