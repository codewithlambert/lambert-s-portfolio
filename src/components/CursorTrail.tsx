import { useEffect, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let rafId: number;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      // Throttle to ~60fps
      if (now - lastTime < 16) return;
      lastTime = now;

      setTrail((prev) => {
        const newTrail = [
          { x: e.clientX, y: e.clientY, id: Date.now() },
          ...prev.slice(0, 19), // Keep last 20 points
        ];
        return newTrail;
      });
    };

    const fadeTrail = () => {
      setTrail((prev) => prev.slice(0, -1));
      rafId = requestAnimationFrame(fadeTrail);
    };

    document.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(fadeTrail);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail-point"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: 1 - index / trail.length,
          }}
        />
      ))}
    </>
  );
}
