import { Link, useRouterState } from "@tanstack/react-router";
import { SpiderMark } from "./SpiderMark";
import { Menu, Home, LayoutGrid, User, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "home", to: "/" },
  { label: "work", to: "/work" },
  { label: "services", to: "/services" },
  { label: "about", to: "/about" },
  { label: "contact", to: "/contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <header className="fixed top-6 left-1/2 z-40 hidden -translate-x-1/2 lg:block">
        <nav className="flex items-center gap-8 rounded-full border border-border bg-card/95 px-8 py-4 backdrop-blur-md shadow-lg">
          <Link to="/" aria-label="lambert home" className="shrink-0">
            <SpiderMark className="h-8 w-8 object-contain opacity-90" />
          </Link>

          <div className="flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-[0.95rem] text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="p-1 text-foreground"
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-6 sm:px-8 lg:hidden">
        <Link to="/" aria-label="lambert home" className="shrink-0">
          <SpiderMark className="h-9 w-9 object-contain opacity-90" />
        </Link>

        <div className="col-start-2 flex items-center justify-center gap-2">
          <span className="text-[0.95rem] text-muted-foreground">menu</span>
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
        </div>

        <div className="col-start-3 flex items-center justify-end gap-5">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="p-1 text-foreground"
          >
            <Menu className="h-7 w-7" strokeWidth={1.75} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-sm text-muted-foreground"
          >
            close
          </button>

          <div className="flex flex-col items-center gap-10 text-3xl">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav - iOS Style with Animated Bubble */}
      <nav className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-32px)] max-w-md -translate-x-1/2 rounded-[28px] border border-white/10 bg-black/70 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden">
        <div className="relative flex items-center justify-between">
          {[
            { label: "home", icon: Home, to: "/" },
            { label: "work", icon: LayoutGrid, to: "/work" },
            { label: "about", icon: User, to: "/about" },
            { label: "contact", icon: Mail, to: "/contact" },
          ].map(({ label, icon: Icon, to }) => {
            const active = isActive(to);
            return (
              <Link
                key={label}
                to={to}
                className="relative flex flex-1 items-center justify-center"
              >
                {active && (
                  <motion.div
                    layoutId="spider-active-bubble"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      mass: 0.7,
                    }}
                    className="absolute inset-0 rounded-[18px] rounded-tl-[28px] rounded-br-[28px] bg-white shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    {/* Spider web SVG overlay */}
                    <img
                      src="/button.svg"
                      alt=""
                      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 opacity-40"
                    />
                  </motion.div>
                )}
                <motion.div
                  animate={{
                    y: active ? -1 : 0,
                    scale: active ? 1 : 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                  }}
                  className={`relative z-10 flex h-12 items-center justify-center gap-2 px-3 text-xs font-medium ${
                    active ? "text-black" : "text-white/45"
                  }`}
                >
                  <Icon size={19} strokeWidth={active ? 2.5 : 1.8} />
                  {active && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      {label}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            );
          })}
          {/* tiny spider decoration */}
          <motion.div
            animate={{
              y: [0, 3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -top-8 right-6 text-white/20"
          >
            <Sparkles size={12} />
          </motion.div>
        </div>
      </nav>
    </>
  );
}
