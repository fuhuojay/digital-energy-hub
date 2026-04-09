import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  "从需求调研、方案设计到设备选型的全流程咨询",
  "工程交付覆盖土建配合、设备安装、系统联调",
  "多品牌设备集成能力，兼容主流厂商产品线",
  "7×24 小时技术响应与现场运维支持",
  "能效优化与绿色节能改造服务",
  "全生命周期资产管理与巡检保养",
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-surface-subtle" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5">
              工程交付与技术服务能力
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              硅基数能不仅提供产品与方案，更注重工程落地与持续服务。我们拥有专业的项目管理团队和技术服务工程师，确保每一个项目从设计到交付、从调试到运维的全过程品质可控。
            </p>
            <div className="space-y-4">
              {capabilities.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{c}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - visual block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl bg-gradient-dark p-8 md:p-12 text-primary-foreground">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-energy-green mb-1">500+</div>
                  <div className="text-sm text-primary-foreground/60">累计项目交付</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-light mb-1">99.99%</div>
                  <div className="text-sm text-primary-foreground/60">系统可用性承诺</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-foreground mb-1">7×24h</div>
                  <div className="text-sm text-primary-foreground/60">技术响应支持</div>
                </div>
              </div>
              {/* Decorative grid */}
              <div
                className="absolute inset-0 rounded-2xl opacity-[0.05]"
                style={{
                  backgroundImage: `radial-gradient(circle, hsl(var(--teal)) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
