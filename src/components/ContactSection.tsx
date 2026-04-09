import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

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
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            联系我们
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            如您有数据中心基础设施相关需求，欢迎随时与我们取得联系
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl bg-card shadow-card overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Info */}
              <div className="p-8 md:p-10 flex flex-col gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">硅基数能</h3>
                  <p className="text-sm text-muted-foreground">数字能源与数据中心基础设施服务商</p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">电话</div>
                      <div className="text-sm font-medium text-foreground">400-XXX-XXXX</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">邮箱</div>
                      <div className="text-sm font-medium text-foreground">contact@guijishuneng.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <Globe size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">网站</div>
                      <div className="text-sm font-medium text-foreground">www.guijishuneng.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">地址</div>
                      <div className="text-sm font-medium text-foreground">中国 · 具体地址待填写</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA side */}
              <div className="bg-gradient-dark p-8 md:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: `radial-gradient(circle, hsl(var(--teal)) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mx-auto mb-6">
                    <Mail size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-3">获取专属方案</h3>
                  <p className="text-sm text-primary-foreground/60 mb-6 max-w-xs">
                    描述您的业务需求，我们的解决方案专家将在 24 小时内与您联系
                  </p>
                  <a
                    href="mailto:contact@guijishuneng.com"
                    className="inline-block px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-teal-light transition-colors"
                  >
                    发送邮件咨询
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
