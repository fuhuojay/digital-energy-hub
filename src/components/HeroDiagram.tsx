import { motion } from "framer-motion";

/**
 * Minimal wireframe technical diagram representing the digital energy stack:
 * grid/solar/storage → power conversion → data center racks.
 * Pure SVG, uses theme tokens via currentColor where useful.
 */
const HeroDiagram = () => {
  return (
    <div className="relative w-full aspect-[5/4]">
      {/* Soft halos */}
      <div className="absolute -inset-6 bg-gradient-energy opacity-15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-electric-blue/10 blur-3xl rounded-full pointer-events-none" />

      <motion.svg
        viewBox="0 0 600 480"
        className="relative w-full h-full"
        initial="hidden"
        animate="visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="strokeBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--electric-blue-light))" />
            <stop offset="100%" stopColor="hsl(var(--electric-blue))" />
          </linearGradient>
          <linearGradient id="strokeGreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--electric-blue-light))" />
            <stop offset="100%" stopColor="hsl(var(--energy-green))" />
          </linearGradient>
          <linearGradient id="fadeStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--electric-blue-light))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--electric-blue-light))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--energy-green))" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="hsl(var(--energy-green))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--energy-green))" stopOpacity="0" />
          </radialGradient>
          <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="hsl(var(--electric-blue-light))" opacity="0.18" />
          </pattern>
        </defs>

        {/* Background dot grid contained */}
        <rect x="20" y="20" width="560" height="440" fill="url(#dots)" rx="14" />
        <rect x="20" y="20" width="560" height="440" rx="14" stroke="hsl(var(--electric-blue) / 0.25)" strokeWidth="1" />

        {/* Connector lines: solar/wind → inverter → battery → DC → racks */}
        <motion.path
          d="M 95 160 C 160 160, 180 240, 245 240"
          stroke="url(#fadeStroke)"
          strokeWidth="1.4"
          strokeDasharray="3 4"
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
          transition={{ duration: 1.6, delay: 0.4 }}
        />
        <motion.path
          d="M 95 320 C 160 320, 180 240, 245 240"
          stroke="url(#fadeStroke)"
          strokeWidth="1.4"
          strokeDasharray="3 4"
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
          transition={{ duration: 1.6, delay: 0.55 }}
        />
        <motion.path
          d="M 355 240 L 425 240"
          stroke="url(#strokeGreen)"
          strokeWidth="1.6"
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
          transition={{ duration: 0.9, delay: 1.1 }}
        />

        {/* Left: solar panel (stylized) */}
        <motion.g
          variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, delay: 0.1 }}
          stroke="hsl(var(--electric-blue-light))"
          strokeWidth="1.2"
        >
          <rect x="50" y="130" width="80" height="60" rx="3" fill="hsl(var(--electric-blue) / 0.06)" />
          <line x1="50" y1="150" x2="130" y2="150" />
          <line x1="50" y1="170" x2="130" y2="170" />
          <line x1="76" y1="130" x2="76" y2="190" />
          <line x1="103" y1="130" x2="103" y2="190" />
          {/* Stand */}
          <line x1="90" y1="190" x2="90" y2="206" />
          <line x1="78" y1="206" x2="102" y2="206" />
        </motion.g>

        {/* Left: wind turbine (stylized) */}
        <motion.g
          variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, delay: 0.2 }}
          stroke="hsl(var(--energy-green-light))"
          strokeWidth="1.2"
          fill="none"
        >
          {/* Mast */}
          <line x1="90" y1="316" x2="90" y2="370" />
          {/* Hub */}
          <circle cx="90" cy="316" r="3.5" fill="hsl(var(--energy-green))" stroke="none" />
          {/* Blades */}
          <motion.g
            style={{ transformOrigin: "90px 316px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          >
            <line x1="90" y1="316" x2="90" y2="288" />
            <line x1="90" y1="316" x2="114" y2="328" />
            <line x1="90" y1="316" x2="66" y2="328" />
          </motion.g>
        </motion.g>

        {/* Center: power conversion / inverter node */}
        <motion.g
          variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ transformOrigin: "300px 240px" }}
        >
          <rect
            x="245"
            y="200"
            width="110"
            height="80"
            rx="10"
            fill="hsl(var(--ink) / 0.6)"
            stroke="url(#strokeGreen)"
            strokeWidth="1.4"
          />
          {/* Pins (chip-like, echoing logo) */}
          {[218, 232, 246].map((y) => (
            <line key={`l-${y}`} x1="245" y1={y} x2="237" y2={y} stroke="hsl(var(--electric-blue-light))" strokeWidth="1.2" />
          ))}
          {[218, 232, 246].map((y) => (
            <line key={`r-${y}`} x1="355" y1={y} x2="363" y2={y} stroke="hsl(var(--energy-green-light))" strokeWidth="1.2" />
          ))}
          {/* Inner waveform — homage to the brand mark */}
          <path
            d="M 260 246 C 275 230, 285 262, 300 246 C 315 230, 325 262, 340 246"
            stroke="url(#strokeGreen)"
            strokeWidth="1.6"
            fill="none"
          />
          {/* Pulse dot on waveform */}
          <motion.circle
            r="3"
            fill="hsl(var(--energy-green))"
            animate={{
              cx: [260, 300, 340, 300, 260],
              cy: [246, 240, 246, 252, 246],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Label tick */}
          <text x="300" y="270" textAnchor="middle" fontSize="7" fill="hsl(var(--energy-green))" letterSpacing="2">
            POWER · CONVERSION
          </text>
        </motion.g>

        {/* Right: data center rack cluster */}
        <motion.g
          variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, delay: 0.8 }}
          stroke="hsl(var(--electric-blue-light))"
          strokeWidth="1.2"
          fill="none"
        >
          {[0, 1, 2].map((i) => {
            const x = 425 + i * 38;
            return (
              <g key={i}>
                <rect x={x} y={170} width={28} height={140} rx={3} fill="hsl(var(--ink) / 0.35)" />
                {[0, 1, 2, 3, 4, 5].map((r) => (
                  <line key={r} x1={x + 4} y1={184 + r * 20} x2={x + 24} y2={184 + r * 20} />
                ))}
                {/* Status LEDs */}
                <motion.circle
                  cx={x + 22}
                  cy={180}
                  r={1.6}
                  fill="hsl(var(--energy-green))"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2 + i * 0.4, repeat: Infinity }}
                />
              </g>
            );
          })}
          {/* Floor line */}
          <line x1="420" y1="316" x2="545" y2="316" stroke="hsl(var(--electric-blue) / 0.4)" />
        </motion.g>

        {/* Floating data nodes */}
        {[
          { cx: 120, cy: 80, d: 0 },
          { cx: 480, cy: 95, d: 0.6 },
          { cx: 540, cy: 405, d: 1.1 },
          { cx: 75, cy: 410, d: 1.4 },
        ].map((n, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 3, delay: n.d, repeat: Infinity }}
          >
            <circle cx={n.cx} cy={n.cy} r="14" fill="url(#nodeGlow)" />
            <circle cx={n.cx} cy={n.cy} r="2" fill="hsl(var(--energy-green))" />
          </motion.g>
        ))}

        {/* Corner markers — clinical reference ticks */}
        {[
          { x: 30, y: 30 },
          { x: 570, y: 30 },
          { x: 30, y: 470 },
          { x: 570, y: 470 },
        ].map((c, i) => (
          <g key={i} stroke="hsl(var(--energy-green) / 0.55)" strokeWidth="1">
            <line x1={c.x - 6} y1={c.y} x2={c.x + 6} y2={c.y} />
            <line x1={c.x} y1={c.y - 6} x2={c.x} y2={c.y + 6} />
          </g>
        ))}

        {/* Tiny labels */}
        <text x="90" y="226" textAnchor="middle" fontSize="6.5" fill="hsl(var(--electric-blue-light) / 0.85)" letterSpacing="1.5">
          SOLAR
        </text>
        <text x="90" y="386" textAnchor="middle" fontSize="6.5" fill="hsl(var(--energy-green-light) / 0.85)" letterSpacing="1.5">
          WIND
        </text>
        <text x="485" y="332" textAnchor="middle" fontSize="6.5" fill="hsl(var(--electric-blue-light) / 0.85)" letterSpacing="1.5">
          DATA · CENTER
        </text>
      </motion.svg>
    </div>
  );
};

export default HeroDiagram;
