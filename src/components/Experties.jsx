import React from "react";
import Join from '../assets/img/join.png';

const ProgressCircle = ({ percentage, label }) => {
  const radius = 75;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center w-full animate-topToBottom">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform rotate-[-90deg]"
      >
        <circle
          stroke="#425B79"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-stroke duration-300 ease-in-out"
        />
      </svg>
      <span className="text-xl md:text-2xl font-bold text-white">{percentage}%</span>
      <span className="text-xl md:text-2xl text-blue-200 p-4">{label}</span>
    </div>
  );
};

const SkillProgress = () => {
  const skills = [
    { label: "Bootstrap 5", percentage: 98 },
    { label: "CSS", percentage: 86 },
    { label: "HTML 5", percentage: 95 },
    { label: "Javascript", percentage: 89 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 p-6 md:p-12 items-center lg:ml-24">
      <ProgressCircle percentage={skills[0].percentage} label={skills[0].label} />
      <div className="flex justify-center">
        <img src={Join} alt="Join Icon" className="w-24 md:w-20 lg:w-24 h-auto animate-wiggle" />
      </div>
      <ProgressCircle percentage={skills[1].percentage} label={skills[1].label} />
      <div className="flex justify-center">
        <img src={Join} alt="Join Icon" className="w-24 md:w-20 lg:w-24 h-auto animate-wiggle" />
      </div>
      <ProgressCircle percentage={skills[2].percentage} label={skills[2].label} />
      <div className="flex justify-center">
        <img src={Join} alt="Join Icon" className="w-24 md:w-20 lg:w-24 h-auto animate-wiggle" />
      </div>
      <ProgressCircle percentage={skills[3].percentage} label={skills[3].label} />
    </div>

  );
};

export default SkillProgress;
