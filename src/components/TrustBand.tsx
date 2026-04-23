import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Zap, Leaf } from "lucide-react";
import companyImage from "@/assets/company-image.png";

const values = [
  { icon: Target, title: "专业", desc: "围绕机房与能源系统，提供更贴合项目场景的方案配置。" },
  { icon: Shield, title: "可靠", desc: "联合成熟品牌与产品体系，提升系统稳定性与交付确定性。" },
  { icon: Zap, title: "高效", desc: "快速响应，缩短沟通链路，提高项目推进效率。" },
  { icon: Leaf, title: "节能", desc: "关注制冷、供配电与储能利用效率，帮助客户优化能耗。" },
];

const TrustBand = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-surface-subtle relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden mb-16 shadow-card-hover"
        >
          <img
            src={companyImage}
            alt="湖南硅基数能科技有限公司 · 数据中心与新能源场景"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-border/40 rounded-3xl" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-energy-green mb-4 block">
              About · 公司简介
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              以可靠产品为基础<br />以系统方案为核心
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              湖南硅基数能科技有限公司是数据中心基础设施与能源解决方案服务商，围绕艾特网能的数据中心基础设施产品线、合肥铂兰特的储能与新能源产品线以及智能监控类产品开展市场服务与项目落地。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              业务覆盖方案咨询、设备选型、产品供应、系统集成、项目实施与售后支持，致力于为客户构建安全、稳定、节能、可扩展的基础设施底座。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="group relative p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all border border-border/60 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-energy opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-electric-blue/10 to-energy-green/10 text-electric-blue flex items-center justify-center mb-4">
                  <v.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBand;
