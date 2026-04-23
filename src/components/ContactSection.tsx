import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, User, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const contactItems = [
  { icon: User, label: "联系人", value: "夏小姐" },
  { icon: Phone, label: "联系电话", value: "199 7390 6319", href: "tel:19973906319" },
  { icon: Mail, label: "电子邮箱", value: "hngjsn@126.com", href: "mailto:hngjsn@126.com" },
  { icon: MapPin, label: "办公地址", value: "湖南省长沙市岳麓区学士街道云栖路 559 号艾邦科技产业园 2 栋" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-subtle relative overflow-hidden" ref={ref}>
      {/* Section header */}
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-energy-green mb-4 block">
            Contact · 联系我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4 leading-tight">
            欢迎咨询合作
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            数据中心基础设施、储能系统、模块化机房、智能监控与项目配套，期待与您建立长期合作。
          </p>
        </motion.div>
      </div>

      {/* Full-width card */}
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-3xl bg-card shadow-card overflow-hidden border border-border/60">
            <div className="grid md:grid-cols-5" style={{ minHeight: "360px" }}>
              {/* Left: contact info — full height, stacked vertically */}
              <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-7">
                  <h3 className="text-xl font-bold text-foreground mb-1">湖南硅基数能科技有限公司</h3>
                  <p className="text-sm text-muted-foreground">Hunan Silicon Energy Technology Co., Ltd.</p>
                </div>

                <div className="flex flex-col gap-5">
                  {contactItems.map((c) => {
                    const content = (
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric-blue/10 to-energy-green/10 text-electric-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <c.icon size={16} />
                        </div>
                        <div>
                          <div className="text-[11px] text-muted-foreground mb-0.5 tracking-wide">{c.label}</div>
                          <div className="text-sm font-medium text-foreground leading-snug">{c.value}</div>
                        </div>
                      </div>
                    );
                    return c.href ? (
                      <a key={c.label} href={c.href} className="flex items-start gap-3 group hover:opacity-70 transition-opacity">
                        {content}
                      </a>
                    ) : (
                      <div key={c.label} className="flex items-start gap-3">{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* Right: hero image — full height, using img tag */}
              <div className="md:col-span-3 relative overflow-hidden" style={{ minHeight: "360px" }}>
                {/* Image fills entire cell */}
                <img
                  src={heroBg}
                  alt=""
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: "cover", objectPosition: "center left", zIndex: 0 }}
                />
                {/* Overlay — only gradient, no image obscuring */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(to right, hsl(218 85% 14% / 0.82), hsl(218 85% 14% / 0.65) 50%, hsl(218 85% 14% / 0.40))",
                    zIndex: 1,
                  }}
                />
                {/* Grid texture */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage:
                      "linear-gradient(rgba(125, 211, 252, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(125, 211, 252, 0.10) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                />
                {/* Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-80px",
                    right: "0px",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, hsl(152 76% 48% / 0.30), transparent 70%)",
                    filter: "blur(50px)",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                />
                {/* Text content */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 3,
                    height: "100%",
                    padding: "2.5rem 3rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "hsl(152 76% 60%)", marginBottom: "12px" }}>
                    Get In Touch
                  </div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "hsl(210 40% 98%)", marginBottom: "16px", lineHeight: 1.2 }}>
                    获取专属方案
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "hsl(210 40% 98% / 0.65)", marginBottom: "32px", lineHeight: 1.6, maxWidth: "36ch" }}>
                    描述您的业务需求，我们将在 24 小时内与您联系，提供贴合场景的方案建议。
                  </p>
                  <a
                    href="mailto:hngjsn@126.com"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "13px 24px",
                      borderRadius: "8px",
                      background: "hsl(152 76% 48%)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      boxShadow: "0 4px 16px hsl(152 76% 48% / 0.30)",
                      width: "fit-content",
                    }}
                  >
                    发送邮件咨询
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
