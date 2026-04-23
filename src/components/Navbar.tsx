import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "公司简介", href: "#about" },
  { label: "代理品牌", href: "#brands" },
  { label: "解决方案", href: "#solutions" },
  { label: "服务能力", href: "#capabilities" },
  { label: "应用场景", href: "#scenarios" },
  { label: "联系我们", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-3 min-w-0">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled ? "bg-secondary" : "bg-primary-foreground/10 backdrop-blur"}`}>
            <img src={logo} alt="硅基数能" className="w-7 h-7 object-contain" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className={`font-heading font-semibold text-sm md:text-base tracking-tight transition-colors truncate ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              湖南硅基数能科技
            </span>
            <span className={`hidden md:block text-[10px] tracking-widest uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-primary-foreground/55"}`}>
              Hunan Silicon Energy
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="ml-3 px-5 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-teal-light transition-colors"
          >
            获取方案
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-subtle overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-left px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#contact")}
                className="mt-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-accent text-accent-foreground"
              >
                获取方案
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
