const RAYS = 22;
const CX = 500;
const CY = 500;
const R = 620;

function pt(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return [CX + Math.cos(a) * r, CY + Math.sin(a) * r] as const;
}

/** Decorative radial spider web anchored at its center point. */
export function SpiderWeb({ className }: { className?: string }) {
  const angles = Array.from({ length: RAYS }, (_, i) => 180 + (i * 180) / (RAYS - 1));
  const rings = [0.16, 0.28, 0.4, 0.52, 0.64, 0.78, 0.92];

  return (
    <svg
      viewBox="0 0 1000 1000"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        {angles.map((a, i) => {
          const [x, y] = pt(a, R);
          return <line key={i} x1={CX} y1={CY} x2={x} y2={y} />;
        })}
        {rings.map((f, ri) =>
          angles.slice(0, -1).map((a, i) => {
            const next = angles[i + 1] as number;
            const [x1, y1] = pt(a, R * f);
            const [x2, y2] = pt(next, R * f);
            const [mx, my] = pt((a + next) / 2, R * f * 0.94);
            return (
              <path key={`${ri}-${i}`} d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`} />
            );
          }),
        )}
      </g>
    </svg>
  );
}
