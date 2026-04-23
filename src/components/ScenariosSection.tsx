import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Landmark, Factory, Globe, Cpu, Server } from "lucide-react";

const scenarios = [
  { icon: Building2, label: "政府与公共事业", desc: "电子政务与智慧城市" },
  { icon: Landmark, label: "金融与企业总部", desc: "高等级容灾数据中心" },
  { icon: Globe, label: "园区与算力节点", desc: "新型基础设施配套" },
  { icon: Cpu, label: "智算中心", desc: "AI 与高性能计算集群" },
  { icon: Factory, label: "工业制造", desc: "生产数据与工控系统" },
  { icon: Server, label: "企业机房", desc: "中小型 IT 基础设施" },
];

const ScenariosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="scenarios" className="relative py-20 md:py-28 bg-gradient-dark text-primary-foreground overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-electric-blue/20 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-energy-green/15 blur-[120px]" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-energy-green mb-4 block">
            Scenarios · 应用场景
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            适配数据中心 · 储能 · 工业多元场景
          </h2>
          <p className="text-primary-foreground/65 leading-relaxed">
            从政府企业到园区算力，从工业产线到新型基础设施，硅基数能为不同行业客户提供贴合场景的解决方案。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-primary-foreground/10 hover:border-energy-green/40 bg-primary-foreground/[0.02] hover:bg-primary-foreground/[0.05] backdrop-blur-sm transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/[0.05] border border-primary-foreground/10 flex items-center justify-center mb-4 group-hover:border-energy-green/40 transition-colors">
                <s.icon size={22} className="text-energy-green-light" />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{s.label}</h3>
              <p className="text-[11px] text-primary-foreground/55 leading-snug">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;
