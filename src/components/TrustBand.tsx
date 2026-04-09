import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const keywords = [
  { label: "数据中心", icon: "🏢" },
  { label: "UPS 不间断电源", icon: "⚡" },
  { label: "精密空调", icon: "❄️" },
  { label: "智能配电", icon: "🔌" },
  { label: "储能系统", icon: "🔋" },
  { label: "运维服务", icon: "🔧" },
];

const TrustBand = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-surface-subtle" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 tracking-tight">
            值得信赖的数字能源伙伴
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            硅基数能专注于数据中心基础设施领域，围绕供电、制冷、配电、储能及智能管理，提供从规划设计到工程交付、运维保障的一体化服务，助力客户构建高效、可靠、绿色的数字基础设施。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {keywords.map((kw, i) => (
            <motion.div
              key={kw.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 p-5 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow"
            >
              <span className="text-2xl">{kw.icon}</span>
              <span className="text-sm font-medium text-foreground text-center">{kw.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBand;
