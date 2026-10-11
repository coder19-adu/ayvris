// Temporary product illustrations. Swap for real <img> tags when photos are ready.
const COLORWAYS = {
  blue: { fill: "#0047AB", stroke: "#003A8F", line: "#F3E8BF" },
  cream: { fill: "#F3E8BF", stroke: "#D4C382", line: "#0047AB" },
};

const BODIES = {
  tee: "M32 14 L48 8 Q60 20 72 8 L88 14 L112 38 L98 52 L88 44 L88 104 L32 104 L32 44 L22 52 L8 38 Z",
  longsleeve: "M32 14 L48 8 Q60 20 72 8 L88 14 L114 84 L100 90 L88 52 L88 104 L32 104 L32 52 L20 90 L6 84 Z",
  hoodie: "M30 26 L46 18 Q60 30 74 18 L90 26 L114 88 L100 94 L90 68 L90 108 L30 108 L30 68 L20 94 L6 88 Z",
  trousers: "M36 8 H84 L92 112 H66 L60 46 L54 112 H28 Z",
  wide: "M34 8 H86 L102 112 H64 L60 42 L56 112 H18 Z",
  tote: "M28 44 H92 L98 110 H22 Z",
};
BODIES.jacket = BODIES.hoodie;

const VIEWBOX = {
  cap: "0 0 130 90",
  tote: "0 0 120 120",
  trousers: "0 0 120 120",
  wide: "0 0 120 120",
};

export default function ProductImage({ type, color = "blue", label, image }) {
  // Real photo: the white studio background blends into the #FAF7F0 card.
  if (image) {
    return <img src={image} alt={label} loading="lazy" className="h-full w-full object-contain mix-blend-multiply" />;
  }
  const c = COLORWAYS[color];
  const shared = { fill: c.fill, stroke: c.stroke, strokeWidth: 1.5, strokeLinejoin: "round" };
  const detail = { fill: "none", stroke: c.line, strokeWidth: 1.2, strokeOpacity: 0.7, strokeLinecap: "round" };
  const mark = (x, y) => (
    <text x={x} y={y} textAnchor="middle" fontSize="6" fontWeight="800" letterSpacing="1.2" fill={c.line} fontFamily="Bricolage Grotesque, sans-serif">
      AYVRIS
    </text>
  );

  let shapes;
  switch (type) {
    case "cap":
      shapes = (
        <>
          <path d="M26 64 Q26 18 64 18 Q102 18 102 64 Z" {...shared} />
          <path d="M98 60 Q124 60 122 72 Q110 74 92 70 Z" {...shared} />
          <path d="M64 18 V64" {...detail} />
          {mark(64, 50)}
        </>
      );
      break;
    case "tote":
      shapes = (
        <>
          <path d="M46 44 V32 a14 14 0 0 1 28 0 V44" fill="none" stroke={c.stroke} strokeWidth="3" strokeLinecap="round" />
          <path d={BODIES.tote} {...shared} />
          {mark(60, 80)}
        </>
      );
      break;
    case "trousers":
    case "wide":
      shapes = (
        <>
          <path d={BODIES[type]} {...shared} />
          <path d="M36 20 H84" {...detail} />
        </>
      );
      break;
    case "hoodie":
      shapes = (
        <>
          <path d="M44 18 Q46 -2 60 -2 Q74 -2 76 18 Q60 34 44 18 Z" {...shared} />
          <path d={BODIES.hoodie} {...shared} />
          <path d="M44 22 Q60 38 76 22" {...detail} />
          <path d="M46 86 H74 L78 100 H42 Z" {...detail} />
          {mark(60, 58)}
        </>
      );
      break;
    case "jacket":
      shapes = (
        <>
          <path d={BODIES.jacket} {...shared} />
          <path d="M46 18 L60 36 L74 18" {...detail} />
          <path d="M60 36 V108" {...detail} />
          {mark(76, 52)}
        </>
      );
      break;
    default:
      shapes = (
        <>
          <path d={BODIES[type]} {...shared} />
          {mark(60, 48)}
        </>
      );
  }

  return (
    <svg viewBox={VIEWBOX[type] ?? "0 0 120 116"} role="img" aria-label={label} className="h-full w-full">
      {shapes}
    </svg>
  );
}
