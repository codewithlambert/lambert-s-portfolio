import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function StatCounter({ end, suffix = "", label, delay = 0 }: StatCounterProps) {
  const { count, ref } = useCounterAnimation(end, 2000);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group text-center scroll-fade-in" 
      style={{ transitionDelay: `${delay}s` }}
    >
      <p className="counter text-3xl font-bold transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
        {count}{suffix}
      </p>
      <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}
