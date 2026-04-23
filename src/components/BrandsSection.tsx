import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, BatteryCharging, Activity } from "lucide-react";

const brands = [
  {
    icon: Cpu,
    name: "艾特网能",
    enName: "iTEAQ",
    desc: "聚焦热能管理、电能管理与模块化数据中心解决方案，适用于企业机房、园区算力节点与各类关键业务场景。",
    items: [
      { b: "热能管理", s: "精密空调 · 行级制冷 · 节能冷却" },
      { b: "电能管理", s: "UPS · 配电 · 列头柜与 PDU" },
      { b: "数据中心", s: "模块化机房与一体化交付" },
      { b: "运维配套", s: "节能优化与服务支持" },
    ],
  },
  {
    icon: BatteryCharging,
    name: "合肥铂兰特",
    enName: "PLENTY",
    desc: "围绕工商业储能、PACK 配套和工程机械电动化产品，服务于储能项目、设备配套与新能源应用场景。",
    items: [
      { b: "储能系统", s: "工商业储能柜与系统集成" },
      { b: "PACK 系列", s: "电池系统与配套方案" },
      { b: "移动储能", s: "特种应用与灵活部署" },
      { b: "电动化配套", s: "工程机械与设备升级" },
    ],
  },
  {
    icon: Activity,
    name: "智能监控类产品",
    enName: "Smart Monitoring",
    desc: "面向机房环境、动环监测、能源可视化与远程管理等场景，提升设备监控与告警联动效率。",
    items: [
      { b: "动环监控", s: "环境量 · 开关量 · 告警联动" },
      { b: "边缘接入", s: "网关 · 传感器与采集单元" },
      { b: "远程可视化", s: "平台化监测与状态展示" },
      { b: "能耗管理", s: "设备状态与能耗数据分析" },
    ],
  },
];

const BrandsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="brands" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-energy-green mb-4 block">
            Brands · 代理品牌
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4 leading-tight">
            整合行业领先品牌资源
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            围绕三大产品线进行跨系统整合与项目配套，提升整体解决方案完整度与交付确定性。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all border border-border/60 overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-energy" />
              <div className="p-7 pb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/15 to-energy-green/15 text-electric-blue flex items-center justify-center mb-5">
                  <b.icon size={22} />
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="text-lg font-bold text-foreground">{b.name}</h3>
                  <span className="text-xs font-semibold tracking-wider text-energy-green">{b.enName}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{b.desc}</p>
              </div>
              <div className="px-7 pb-7 mt-auto">
                <div className="grid grid-cols-2 gap-2">
                  {b.items.map((it) => (
                    <div key={it.b} className="p-3 rounded-lg bg-secondary/60 border border-border/50">
                      <div className="text-xs font-semibold text-foreground mb-1">{it.b}</div>
                      <div className="text-[11px] text-muted-foreground leading-snug">{it.s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
