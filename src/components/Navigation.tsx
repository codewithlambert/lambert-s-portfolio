import { Link } from "@tanstack/react-router";
import { SpiderMark } from "./SpiderMark";
import { Menu, Home, LayoutGrid, User, Mail } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "home", to: "/" },
  { label: "work", to: "/work" },
  { label: "services", to: "/services" },
  { label: "about", to: "/about" },
  { label: "contact", to: "/contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Mobile Bottom Nav */}
      <nav className="fixed inset-x-4 bottom-4 z-50 rounded-full border border-border bg-card/95 px-4 py-3 backdrop-blur lg:hidden">
        <ul className="grid grid-cols-5">
          {[
            { label: "home", icon: Home, to: "/" },
            { label: "work", icon: LayoutGrid, to: "/work" },
            { label: "services", icon: LayoutGrid, to: "/services" },
            { label: "about", icon: User, to: "/about" },
            { label: "contact", icon: Mail, to: "/contact" },
          ].map(({ label, icon: Icon, to }) => (
            <li key={label}>
              <Link
                to={to}
                className="flex flex-col items-center gap-1.5 text-xs text-muted-foreground [&.active]:text-foreground"
              >
                <Icon className="h-5 w-5" strokeWidth={1.6} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
