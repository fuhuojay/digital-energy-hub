import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Layers, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "高可靠性保障",
    desc: "严格的产品准入与工程标准，确保系统在极端工况下稳定运行。",
    metric: "99.99%",
    metricLabel: "可用性",
  },
  {
    icon: Clock,
    title: "快速响应服务",
    desc: "全国服务网络覆盖，专业工程师团队 7×24 小时待命，快速到场处置。",
    metric: "2h",
    metricLabel: "城市响应",
  },
  {
    icon: Layers,
    title: "全栈集成能力",
    desc: "从供电、制冷到监控的一体化方案设计与交付，减少多供应商协调成本。",
    metric: "端到端",
    metricLabel: "解决方案",
  },
  {
    icon: Lightbulb,
    title: "深刻行业理解",
    desc: "深耕数据中心与关键基础设施行业，理解客户业务场景与痛点需求。",
    metric: "10+",
    metricLabel: "年行业经验",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            为什么选择硅基数能
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            可靠、高效、专业——我们以客户价值为导向，持续提升服务品质
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-7 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-5">
                <r.icon size={22} />
              </div>
              <div className="text-2xl font-bold text-accent mb-1">{r.metric}</div>
              <div className="text-xs text-muted-foreground mb-4">{r.metricLabel}</div>
              <h3 className="text-base font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
