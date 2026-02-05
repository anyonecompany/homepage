
import React, { useMemo } from 'react';

interface RadarChartProps {
  lang: 'ko' | 'en';
}

const RadarChart: React.FC<RadarChartProps> = ({ lang }) => {
  const size = 300;
  const center = size / 2;
  const radius = size * 0.4;
  
  const axes = lang === 'ko' ? [
    { label: "전술", value: 0.85 },
    { label: "환경", value: 0.70 },
    { label: "문화", value: 0.90 }
  ] : [
    { label: "Tactical", value: 0.85 },
    { label: "Environ", value: 0.70 },
    { label: "Culture", value: 0.90 }
  ];

  const points = useMemo(() => {
    return axes.map((axis, i) => {
      const angle = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
      const x = center + radius * axis.value * Math.cos(angle);
      const y = center + radius * axis.value * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  }, [radius, center, axes]);

  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

  return (
    <div className="relative group">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grids */}
        {gridLevels.map((lvl, idx) => {
          const gridPoints = axes.map((_, i) => {
            const angle = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
            const x = center + radius * lvl * Math.cos(angle);
            const y = center + radius * lvl * Math.sin(angle);
            return `${x},${y}`;
          }).join(' ');
          return (
            <polygon
              key={idx}
              points={gridPoints}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis lines */}
        {axes.map((_, i) => {
          const angle = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          );
        })}

        {/* Data area */}
        <polygon
          points={points}
          fill="rgba(255, 106, 55, 0.2)"
          stroke="url(#grad1)"
          strokeWidth="3"
          className="transition-all duration-500 group-hover:fill-orange-500/30"
        />

        {/* Data points */}
        {axes.map((axis, i) => {
          const angle = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
          const x = center + radius * axis.value * Math.cos(angle);
          const y = center + radius * axis.value * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="#FF6A37"
              className="drop-shadow-md"
            />
          );
        })}

        {/* Axis Labels */}
        {axes.map((axis, i) => {
          const angle = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
          const x = center + (radius + 25) * Math.cos(angle);
          const y = center + (radius + 25) * Math.sin(angle);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              alignmentBaseline="middle"
              className="text-[12px] font-bold fill-[#6B7280]"
            >
              {axis.label}
            </text>
          );
        })}

        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FF6A37", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#FE3D67", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Central Score */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-3xl font-black text-gradient font-accent">85</span>
        <span className="text-[10px] font-bold text-[#6B7280]">HSI SCORE</span>
      </div>
    </div>
  );
};

export default RadarChart;
