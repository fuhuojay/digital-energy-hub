const Footer = () => (
  <footer className="py-10 border-t border-subtle bg-card">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-xs">硅</span>
          </div>
          <span className="font-heading font-semibold text-sm text-foreground">硅基数能</span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} 硅基数能 版权所有 · 数字能源与数据中心基础设施服务商
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">隐私政策</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">法律声明</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
