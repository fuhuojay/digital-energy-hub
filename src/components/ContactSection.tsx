import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, User, ArrowRight } from "lucide-react";

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
    <section id="contact" className="py-20 md:py-28 bg-surface-subtle" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-3xl bg-card shadow-card overflow-hidden border border-border/60">
            <div className="grid md:grid-cols-5">
              {/* Info */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col gap-7">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">湖南硅基数能科技有限公司</h3>
                  <p className="text-sm text-muted-foreground">Hunan Silicon Energy Technology Co., Ltd.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                  {contactItems.map((c) => {
                    const content = (
                      <>
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric-blue/10 to-energy-green/10 text-electric-blue flex items-center justify-center flex-shrink-0">
                          <c.icon size={16} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] text-muted-foreground mb-1 tracking-wide">{c.label}</div>
                          <div className="text-sm font-medium text-foreground leading-snug break-words">{c.value}</div>
                        </div>
                      </>
                    );
                    return c.href ? (
                      <a key={c.label} href={c.href} className="flex items-start gap-3 group hover:opacity-80 transition-opacity">
                        {content}
                      </a>
                    ) : (
                      <div key={c.label} className="flex items-start gap-3">{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* CTA side */}
              <div className="md:col-span-2 bg-gradient-dark p-8 md:p-10 flex flex-col justify-center text-left relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-energy opacity-25 blur-3xl" />
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: `radial-gradient(circle, hsl(var(--electric-blue-light)) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-energy-green mb-3">Get In Touch</div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4 leading-tight">获取专属方案</h3>
                  <p className="text-sm text-primary-foreground/65 mb-7 leading-relaxed">
                    描述您的业务需求，我们将在 24 小时内与您联系，提供贴合场景的方案建议。
                  </p>
                  <a
                    href="mailto:hngjsn@126.com"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-energy text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-energy-green/30"
                  >
                    发送邮件咨询
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
