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
                    className="absolute inset-0 rounded-[18px] rounded-tl-[28px] rounded-br-[28px] bg-[#e50914] shadow-[0_0_30px_rgba(229,9,20,0.5)]"
                  >
                    {/* Realistic Spider-Man Web Pattern */}
                    <div className="absolute inset-0 overflow-hidden rounded-[18px] rounded-tl-[28px] rounded-br-[28px]">
                      <svg
                        viewBox="0 0 100 60"
                        className="h-full w-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Radial spokes from off-center anchor point */}
                        <g stroke="white" strokeWidth="0.4" opacity="0.25">
                          {/* Main anchor point at (35, 28) - off-center */}
                          <line x1="35" y1="28" x2="10" y2="5" />
                          <line x1="35" y1="28" x2="25" y2="8" />
                          <line x1="35" y1="28" x2="45" y2="6" />
                          <line x1="35" y1="28" x2="65" y2="10" />
                          <line x1="35" y1="28" x2="85" y2="18" />
                          <line x1="35" y1="28" x2="92" y2="32" />
                          <line x1="35" y1="28" x2="88" y2="48" />
                          <line x1="35" y1="28" x2="68" y2="55" />
                          <line x1="35" y1="28" x2="42" y2="56" />
                          <line x1="35" y1="28" x2="18" y2="52" />
                          <line x1="35" y1="28" x2="5" y2="40" />
                          <line x1="35" y1="28" x2="8" y2="22" />
                        </g>
                        
                        {/* Irregular curved connecting strands - creating organic web cells */}
                        <g stroke="white" strokeWidth="0.35" opacity="0.3" fill="none">
                          {/* Inner web layer - irregular curves */}
                          <path d="M 25 8 Q 30 12, 35 15" />
                          <path d="M 35 15 Q 40 12, 45 6" />
                          <path d="M 45 6 Q 52 8, 65 10" />
                          <path d="M 65 10 Q 72 14, 85 18" />
                          <path d="M 85 18 Q 88 24, 92 32" />
                          <path d="M 92 32 Q 90 38, 88 48" />
                          <path d="M 88 48 Q 80 50, 68 55" />
                          <path d="M 68 55 Q 58 56, 42 56" />
                          <path d="M 42 56 Q 32 54, 18 52" />
                          <path d="M 18 52 Q 12 48, 5 40" />
                          <path d="M 5 40 Q 6 32, 8 22" />
                          <path d="M 8 22 Q 12 12, 25 8" />
                          
                          {/* Middle web layer - more irregular */}
                          <path d="M 18 12 Q 22 18, 28 20" />
                          <path d="M 28 20 Q 35 20, 42 18" />
                          <path d="M 42 18 Q 50 18, 62 20" />
                          <path d="M 62 20 Q 70 24, 78 28" />
                          <path d="M 78 28 Q 80 34, 82 42" />
                          <path d="M 82 42 Q 78 46, 68 50" />
                          <path d="M 68 50 Q 58 50, 45 49" />
                          <path d="M 45 49 Q 35 48, 22 46" />
                          <path d="M 22 46 Q 15 42, 10 35" />
                          <path d="M 10 35 Q 10 26, 12 18" />
                          <path d="M 12 18 Q 14 14, 18 12" />
                          
                          {/* Outer web layer - extending beyond */}
                          <path d="M 15 6 Q 20 14, 26 18" />
                          <path d="M 26 18 Q 32 20, 40 21" />
                          <path d="M 40 21 Q 50 22, 64 24" />
                          <path d="M 64 24 Q 72 28, 84 34" />
                          <path d="M 84 34 Q 86 40, 86 50" />
                          <path d="M 86 50 Q 82 54, 72 57" />
                          <path d="M 72 57 Q 60 58, 44 58" />
                          <path d="M 44 58 Q 32 56, 16 53" />
                          <path d="M 16 53 Q 8 48, 4 38" />
                          <path d="M 4 38 Q 4 28, 6 18" />
                          <path d="M 6 18 Q 9 10, 15 6" />
                          
                          {/* Random connecting threads for organic feel */}
                          <path d="M 30 10 Q 32 16, 38 20" strokeWidth="0.3" opacity="0.2" />
                          <path d="M 55 14 Q 60 20, 68 26" strokeWidth="0.3" opacity="0.2" />
                          <path d="M 75 36 Q 70 40, 62 44" strokeWidth="0.3" opacity="0.2" />
                          <path d="M 48 52 Q 40 50, 28 48" strokeWidth="0.3" opacity="0.2" />
                          <path d="M 14 30 Q 18 28, 24 26" strokeWidth="0.3" opacity="0.2" />
                        </g>
                      </svg>
                    </div>
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
                    active ? "text-[#CFCFCF]" : "text-white/45"
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
