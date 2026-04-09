import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--teal) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--teal) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-accent/20 text-energy-green border border-energy-green/20 mb-6">
              数字能源 · 智慧基础设施
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight mb-6"
          >
            构筑数字能源基座
            <br />
            <span className="text-teal-light">驱动数据中心未来</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed"
          >
            以可靠供电、精密温控、智能管理为核心，为数据中心及关键基础设施提供全生命周期的数字能源解决方案与工程交付服务。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-teal-light transition-colors shadow-lg shadow-teal/20"
            >
              联系我们 · 获取方案
            </button>
            <button
              onClick={() => scrollTo("#solutions")}
              className="px-8 py-3.5 rounded-lg border border-primary-foreground/25 text-primary-foreground font-medium text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              查看解决方案
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/40 text-xs">向下滚动</span>
          <div className="w-5 h-8 rounded-full border border-primary-foreground/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 rounded-full bg-primary-foreground/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
