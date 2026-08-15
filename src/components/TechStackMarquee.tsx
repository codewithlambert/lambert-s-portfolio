export function TechStackMarquee() {
  const stacks = [
    "React",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Prisma",
    "TanStack Router",
    "Framer Motion",
    "Vite",
    "Supabase",
  ];

  return (
    <div className="relative overflow-hidden border-y border-border bg-card/50 py-4">
      <div className="flex animate-marquee-rtl gap-8 whitespace-nowrap will-change-transform">
        {/* First set */}
        {stacks.map((stack, i) => (
          <span
            key={`first-${i}`}
            className="inline-block text-sm font-medium text-muted-foreground"
          >
            {stack}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {stacks.map((stack, i) => (
          <span
            key={`second-${i}`}
            className="inline-block text-sm font-medium text-muted-foreground"
          >
            {stack}
          </span>
        ))}
        {/* Triple for extra smoothness */}
        {stacks.map((stack, i) => (
          <span
            key={`third-${i}`}
            className="inline-block text-sm font-medium text-muted-foreground"
          >
            {stack}
          </span>
        ))}
      </div>
    </div>
  );
}
