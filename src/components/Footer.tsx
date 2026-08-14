import { Link } from "@tanstack/react-router";

const navigation = [
  { label: "home", to: "/" },
  { label: "about", to: "/about" },
  { label: "projects", to: "/work" },
  { label: "services", to: "/services" },
  { label: "contact", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 pt-14 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-12 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-start">
        <div>
          <p className="text-2xl font-bold tracking-tight">lambert</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            full-stack developer & entrepreneur.<br />building software, running a company.
          </p>
        </div>
        <div>
          <p className="text-eyebrow">— navigation</p>
          <nav className="mt-4 flex flex-col items-start gap-2 text-sm text-muted-foreground">
            {navigation.map((item) => <Link key={item.to} to={item.to} className="hover:text-foreground">{item.label}</Link>)}
            <a href="https://lynktern.pro" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">lynktern ↗</a>
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-[1400px] border-t border-white/10 py-6 text-xs text-muted-foreground">
        — © 2026 lambert. all rights reserved.
      </div>
    </footer>
  );
}
