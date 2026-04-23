/**
 * Clean minimalist hero visual — grid background only.
 */
const HeroDiagram = () => {
  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(125, 211, 252, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(125, 211, 252, 0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  );
};

export default HeroDiagram;
