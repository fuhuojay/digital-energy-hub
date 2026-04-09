import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Landmark, Factory, Globe, Cpu, Server } from "lucide-react";

const scenarios = [
  { icon: Globe, label: "电信运营商", desc: "核心机房与边缘节点" },
  { icon: Landmark, label: "金融机构", desc: "高等级容灾数据中心" },
  { icon: Building2, label: "政府与公共事业", desc: "电子政务与智慧城市" },
  { icon: Factory, label: "工业制造", desc: "生产数据与工控系统" },
  { icon: Cpu, label: "智算中心", desc: "AI 与高性能计算集群" },
  { icon: Server, label: "企业机房", desc: "中小型 IT 基础设施" },
];

const ScenariosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="scenarios" className="py-20 md:py-28 bg-gradient-dark text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-energy-green mb-3 block">
            Scenarios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            覆盖多元应用场景
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            从大型运营商机房到企业级 IT 环境，我们的方案适配各类关键基础设施场景
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-primary-foreground/10 hover:border-teal/30 hover:bg-primary-foreground/5 transition-all"
            >
              <s.icon size={28} className="text-teal-light mb-4" />
              <h3 className="text-sm font-semibold mb-1">{s.label}</h3>
              <p className="text-xs text-primary-foreground/50">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;
