import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Zap, Wind, Battery, Monitor } from "lucide-react";

const solutions = [
  {
    icon: Server,
    title: "模块化数据中心",
    desc: "预制化、标准化的模块化数据中心解决方案，快速部署，灵活扩展，满足不同规模的算力需求。",
  },
  {
    icon: Zap,
    title: "UPS 与供配电系统",
    desc: "高可靠不间断电源及智能配电方案，保障关键负载持续稳定运行，支持多级冗余架构。",
  },
  {
    icon: Wind,
    title: "精密温控系统",
    desc: "行级、房间级、列间精密空调，精准控温控湿，优化气流组织，降低制冷能耗。",
  },
  {
    icon: Battery,
    title: "储能集成方案",
    desc: "锂电池储能系统与数据中心供电深度融合，实现削峰填谷、应急备电与绿色用能。",
  },
  {
    icon: Monitor,
    title: "智能监控与运维",
    desc: "数据中心基础设施管理平台（DCIM），实时监控、智能告警、能效分析，提升运维效率。",
  },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">
            Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            核心解决方案
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            围绕数据中心全生命周期，提供端到端的基础设施解决方案
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-7 rounded-2xl bg-card shadow-card hover:shadow-card-hover border border-transparent hover:border-accent/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
