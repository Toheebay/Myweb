
import React from "react";

interface ShootingStarProps {
  color?: string;
  duration?: number;
  delay?: number;
  top?: string;
  left?: string;
}

const ShootingStar: React.FC<ShootingStarProps> = ({
  color = "#8B5CF6",
  duration = 3,
  delay = 0,
  top = "10%",
  left = "10%",
}) => {
  return (
    <div
      className="absolute h-px w-[100px] opacity-0"
      style={{
        top,
        left,
        background: `linear-gradient(to right, transparent, ${color}, transparent)`,
        animation: `shootingStar ${duration}s linear ${delay}s infinite`,
        transform: "rotate(-35deg)",
      }}
    ></div>
  );
};

export default ShootingStar;
