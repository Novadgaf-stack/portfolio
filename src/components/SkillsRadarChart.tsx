import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface SkillDomain {
  name: string;
  shortName: string;
  level: number;
  color: string;
}

const skillDomains: SkillDomain[] = [
  { name: "Frontend Development", shortName: "Frontend", level: 95, color: "hsl(var(--primary))" },
  { name: "Backend & APIs", shortName: "Backend", level: 92, color: "hsl(var(--accent))" },
  { name: "Database Systems", shortName: "Database", level: 88, color: "hsl(187, 85%, 53%)" },
  { name: "DevOps & Cloud", shortName: "DevOps", level: 85, color: "hsl(142, 76%, 46%)" },
  { name: "AI & Machine Learning", shortName: "AI/ML", level: 78, color: "hsl(262, 83%, 58%)" },
  { name: "Blockchain & Web3", shortName: "Web3", level: 75, color: "hsl(38, 92%, 50%)" },
];

const SkillsRadarChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;
  const levels = 5;

  // Calculate point positions
  const getPointPosition = (index: number, level: number) => {
    const angle = (Math.PI * 2 * index) / skillDomains.length - Math.PI / 2;
    const radius = (level / 100) * maxRadius;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  // Generate polygon points for data
  const dataPoints = skillDomains
    .map((skill, i) => {
      const pos = getPointPosition(i, skill.level);
      return `${pos.x},${pos.y}`;
    })
    .join(" ");

  // Generate grid polygons
  const gridPolygons = Array.from({ length: levels }, (_, levelIndex) => {
    const levelValue = ((levelIndex + 1) / levels) * 100;
    return skillDomains
      .map((_, i) => {
        const pos = getPointPosition(i, levelValue);
        return `${pos.x},${pos.y}`;
      })
      .join(" ");
  });

  const activeSkill = hoveredIndex !== null ? skillDomains[hoveredIndex] : 
                      selectedIndex !== null ? skillDomains[selectedIndex] : null;

  return (
    <div ref={ref} className="relative">
      {/* Radar Chart Container */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* SVG Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <svg
            viewBox="0 0 300 300"
            className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px]"
          >
            {/* Background glow */}
            <defs>
              <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Background circle glow */}
            <circle cx={centerX} cy={centerY} r={maxRadius + 20} fill="url(#radarGlow)" />

            {/* Grid lines */}
            {gridPolygons.map((points, i) => (
              <motion.polygon
                key={i}
                points={points}
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                strokeOpacity={0.3 + i * 0.1}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.1 }}
              />
            ))}

            {/* Axis lines */}
            {skillDomains.map((_, i) => {
              const pos = getPointPosition(i, 100);
              return (
                <motion.line
                  key={i}
                  x1={centerX}
                  y1={centerY}
                  x2={pos.x}
                  y2={pos.y}
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                />
              );
            })}

            {/* Data polygon */}
            <motion.polygon
              points={dataPoints}
              fill="url(#dataGradient)"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: `${centerX}px ${centerY}px` }}
            />

            {/* Data points */}
            {skillDomains.map((skill, i) => {
              const pos = getPointPosition(i, skill.level);
              const isActive = hoveredIndex === i || selectedIndex === i;
              return (
                <motion.g key={i}>
                  {/* Outer glow for active */}
                  {isActive && (
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r="12"
                      fill={skill.color}
                      fillOpacity="0.3"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isActive ? 8 : 6}
                    fill={skill.color}
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}
                    className="cursor-pointer"
                    style={{ filter: isActive ? "drop-shadow(0 0 8px " + skill.color + ")" : "none" }}
                  />
                </motion.g>
              );
            })}

            {/* Labels */}
            {skillDomains.map((skill, i) => {
              const pos = getPointPosition(i, 115);
              const isActive = hoveredIndex === i || selectedIndex === i;
              return (
                <motion.text
                  key={i}
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`text-[10px] sm:text-xs font-medium transition-colors ${
                    isActive ? "fill-primary" : "fill-muted-foreground"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}
                  style={{ cursor: "pointer" }}
                >
                  {skill.shortName}
                </motion.text>
              );
            })}

            {/* Center percentage */}
            {activeSkill && (
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <text
                  x={centerX}
                  y={centerY - 8}
                  textAnchor="middle"
                  className="text-2xl font-bold fill-foreground"
                >
                  {activeSkill.level}%
                </text>
                <text
                  x={centerX}
                  y={centerY + 12}
                  textAnchor="middle"
                  className="text-[10px] fill-muted-foreground"
                >
                  proficiency
                </text>
              </motion.g>
            )}
          </svg>
        </motion.div>

        {/* Skills Legend */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col gap-3 w-full lg:w-auto"
        >
          {skillDomains.map((skill, i) => {
            const isActive = hoveredIndex === i || selectedIndex === i;
            return (
              <motion.div
                key={skill.name}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                  isActive 
                    ? "bg-primary/10 border border-primary/30" 
                    : "bg-secondary/50 border border-transparent hover:bg-secondary"
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: skill.color }}
                />
                <span className={`text-sm font-medium flex-1 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {skill.name}
                </span>
                <span className={`text-sm font-mono ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {skill.level}%
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsRadarChart;
