import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/company-brand.png";

const capabilities = [
  { t: "方案定制能力", d: "根据客户场景、负载等级、后备时间、制冷形式与扩容需求，提供更贴合实际的配置建议。" },
  { t: "品牌整合能力", d: "围绕艾特网能、合肥铂兰特及智能监控类产品进行跨系统整合与项目配套。" },
  { t: "持续服务能力", d: "便于客户进行需求沟通、现场对接、交付协同和长期维护支持，保障项目全生命周期运行。" },
  { t: "项目交付协同", d: "覆盖需求调研、设备选型、系统联调到现场交付，提升项目实施效率与交付质量。" },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-end">
          {/* Left: content, top-aligned */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:col-span-3"
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-energy-green mb-4 block">
              Capabilities · 服务能力
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5 leading-tight">
              把复杂项目拆解为<br />可执行的工程路径
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              从产品到方案、从单点到系统，硅基数能不仅提供设备与方案配置，更注重工程落地与持续服务，确保每一个项目从设计到交付、从调试到运维的全过程品质可控。
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  className="p-5 rounded-xl bg-secondary/40 border border-border/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-energy-green" />
                    <h3 className="text-sm font-semibold text-foreground">{c.t}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: brand image, bottom-aligned */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-end lg:col-span-2"
          >
            <img
              src={heroBg}
              alt="品牌合成图"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "1.5rem",
                boxShadow: "0 8px 40px hsl(var(--ink) / 0.15)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
