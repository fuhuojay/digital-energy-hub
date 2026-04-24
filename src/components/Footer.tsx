import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-ink text-primary-foreground/70 pt-14 pb-8">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 gap-10 pb-10 border-b border-primary-foreground/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-foreground/[0.06] flex items-center justify-center">
              <img src={logo} alt="硅基数能" className="w-7 h-7 object-contain" />
            </div>
            <div>
              <div className="font-heading font-semibold text-primary-foreground text-sm">湖南硅基数能科技</div>
              <div className="text-[10px] tracking-widest uppercase text-primary-foreground/50">Hunan Silicon Energy</div>
            </div>
          </div>
          <p className="text-xs leading-relaxed max-w-md">
            数据中心与能源解决方案服务商，专注精密空调、UPS 配电、模块化机房、储能系统与智能监控。
          </p>
        </div>
        <div className="md:text-right">
          <div className="text-xs font-semibold text-primary-foreground/90 mb-4 tracking-wide">业务方向</div>
          <ul className="flex flex-wrap md:justify-end gap-x-5 gap-y-2 text-xs">
            <li>数据中心基础设施</li>
            <li>储能系统集成</li>
            <li>智能监控方案</li>
            <li>项目交付与运维</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-7">
        <p className="text-[11px] text-primary-foreground/45">
          © {new Date().getFullYear()} 湖南硅基数能科技有限公司 版权所有
        </p>
        <p className="text-[11px] text-primary-foreground/45">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors">
            湘ICP备2026011757号
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
