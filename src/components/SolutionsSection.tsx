import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Snowflake, Battery, Monitor, Settings, LifeBuoy } from "lucide-react";

const solutions = [
  { idx: "01", icon: Server, title: "数据中心机房方案", desc: "包括精密空调、UPS、配电系统、列头柜、PDU、模块化机房等，适用于企业机房、IDC、边缘节点和园区算力基础设施建设。" },
  { idx: "02", icon: Snowflake, title: "节能制冷方案", desc: "结合风冷、自然冷、行级制冷等路线，面向不同热密度和部署环境，帮助客户优化 PUE 与全年运行能耗。" },
  { idx: "03", icon: Battery, title: "储能系统方案", desc: "围绕工商业储能、移动储能与设备配套场景，提供储能柜、集装箱系统、PACK 配套及应用集成服务。" },
  { idx: "04", icon: Monitor, title: "智能监控方案", desc: "面向机房环境、动环监测与关键设备状态可视化需求，提供更高效的智能监控与告警联动能力。" },
  { idx: "05", icon: Settings, title: "项目集成与交付", desc: "支持从需求调研、设备配置、系统联动到现场交付的全流程协同，提升项目实施效率与交付质量。" },
  { idx: "06", icon: LifeBuoy, title: "售后服务协同", desc: "依托品牌方与服务能力，协助客户做好设备运行保障、问题响应与后续扩容升级支持。" },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="py-20 md:py-28 bg-surface-subtle" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-energy-green mb-4 block">
            Solutions · 核心解决方案
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4 leading-tight">
            从单一设备到系统级整合的灵活服务
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            面向不同项目类型，提供从方案咨询、设备选型到系统集成与运维协同的端到端服务。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 rounded-2xl bg-card shadow-card hover:shadow-card-hover border border-border/60 hover:border-energy-green/40 transition-all overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/10 to-energy-green/10 text-electric-blue flex items-center justify-center group-hover:bg-gradient-energy group-hover:text-white transition-all">
                <s.icon size={22} />
                </div>
                <span className="text-xs font-semibold tracking-widest text-energy-green">{s.idx}</span>
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
