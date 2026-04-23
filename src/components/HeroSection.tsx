import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import companyImage from "@/assets/company-image.png";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero" />
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-70 mix-blend-screen" />
        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 70% 30%, hsl(var(--energy-green) / 0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, hsl(var(--electric-blue) / 0.20), transparent 60%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--electric-blue) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--electric-blue) / 0.4) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent 80%)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-primary-foreground/[0.06] text-energy-green-light border border-energy-green/30 backdrop-blur-sm mb-7">
              <Sparkles size={12} />
              数据中心与能源解决方案服务商
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.08] tracking-tight mb-7"
          >
            连接算力基础设施
            <br />
            <span className="text-gradient-energy">赋能绿色能源未来</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-primary-foreground/70 mb-9 leading-relaxed"
          >
            湖南硅基数能科技有限公司聚焦数据中心基础设施、精密制冷、供配电、模块化机房与储能系统，以方案整合、产品供应、项目交付和服务协同为核心，面向政府、企业、园区、工业与新型算力场景提供一体化解决方案。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-energy text-white font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-energy-green/30"
            >
              获取方案咨询
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#brands")}
              className="px-7 py-3.5 rounded-lg border border-primary-foreground/20 text-primary-foreground font-medium text-sm hover:bg-primary-foreground/[0.06] backdrop-blur-sm transition-colors"
            >
              查看代理品牌
            </button>
          </motion.div>

          {/* Tag chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-2"
          >
            {["数据中心基础设施", "精密空调与制冷", "UPS 与智能配电", "储能系统", "模块化机房", "智能监控"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-xs text-primary-foreground/70 bg-primary-foreground/[0.05] border border-primary-foreground/10 backdrop-blur-sm">
                {t}
              </span>
            ))}
          </motion.div>
          </div>

          {/* Right: company image blended into dark hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Glow halo behind image */}
              <div className="absolute -inset-8 bg-gradient-energy opacity-20 blur-3xl rounded-full" />
              <div className="absolute -inset-4 bg-electric-blue/20 blur-2xl rounded-full" />

              {/* Image with dark blend mask */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 95% 90% at 50% 50%, black 55%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 95% 90% at 50% 50%, black 55%, transparent 100%)",
                }}
              >
                <img
                  src={companyImage}
                  alt="湖南硅基数能科技 · 数据中心与新能源场景"
                  className="w-full h-auto object-cover"
                  style={{ filter: "saturate(0.92) contrast(1.05) brightness(0.92)" }}
                />
                {/* Dark overlay tint to harmonize with hero */}
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--ink) / 0.55) 0%, hsl(var(--navy) / 0.35) 50%, hsl(var(--ink) / 0.55) 100%)",
                  }}
                />
                {/* Top color wash */}
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-60"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--electric-blue) / 0.35), transparent 50%, hsl(var(--energy-green) / 0.3))",
                  }}
                />
              </div>

              {/* Subtle frame */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-foreground/10" />
            </div>
          </motion.div>
        </div>

        {/* Floating metric cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="hidden lg:grid grid-cols-4 gap-4 mt-16"
        >
          {[
            { k: "一站式", v: "方案 · 选型 · 交付 · 运维" },
            { k: "24h", v: "全天候技术支持响应" },
            { k: "三大", v: "核心代理品牌资源整合" },
            { k: "多场景", v: "数据中心 · 储能 · 工业" },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl p-5 bg-primary-foreground/[0.04] border border-primary-foreground/10 backdrop-blur-md">
              <div className="text-2xl font-bold text-gradient-energy mb-1.5">{m.k}</div>
              <div className="text-xs text-primary-foreground/60 leading-relaxed">{m.v}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/35 text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-primary-foreground/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 rounded-full bg-energy-green"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
