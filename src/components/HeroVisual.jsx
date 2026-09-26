import { useMemo } from 'react'

// An abstract "research instrument": an image read as a grid of patches, a small
// feature hierarchy, and an attribution map that highlights the patches a prediction
// depends on. It is an illustration, not model output.

const N = 16 // patches per side
const STEP = 19
const CELL = 17
const GX = 20 // grid origin
const GY = 44
const SIZE = N * STEP - (STEP - CELL)

function intensity(u, v) {
  const body = (u / 0.9) ** 2 + (v / 0.95) ** 2
  if (body > 1) return 0.05
  let I = 0.52 - 0.14 * body
  for (const cx of [-0.4, 0.4]) {
    const l = ((u - cx) / 0.3) ** 2 + ((v + 0.02) / 0.56) ** 2
    if (l < 1) I = 0.13 + 0.12 * l
  }
  if (Math.abs(u) < 0.09 && v > -0.85) I = 0.72
  const d2 = (u - 0.36) ** 2 + (v - 0.22) ** 2
  I += 0.42 * Math.exp(-d2 / 0.014)
  return Math.min(I, 0.9)
}

function attribution(u, v) {
  const a = Math.exp(-((u - 0.36) ** 2 + (v - 0.22) ** 2) / 0.05)
  return a > 0.12 ? a : 0
}

const LAYERS = [
  { x: 380, count: 5 },
  { x: 440, count: 4 },
  { x: 500, count: 3 },
]

export default function HeroVisual() {
  const { cells, attr, nodes, edges, hot } = useMemo(() => {
    const cells = []
    const attr = []
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const u = ((c + 0.5) / N) * 2 - 1
        const v = ((r + 0.5) / N) * 2 - 1
        const x = GX + c * STEP
        const y = GY + r * STEP
        cells.push({ x, y, o: intensity(u, v) })
        const a = attribution(u, v)
        if (a) attr.push({ x, y, a, r })
      }
    }
    const top = GY + 36
    const bottom = GY + SIZE - 36
    const nodes = LAYERS.map((layer) =>
      Array.from({ length: layer.count }, (_, i) => ({
        x: layer.x,
        y: layer.count === 1 ? (top + bottom) / 2 : top + (i * (bottom - top)) / (layer.count - 1),
      }))
    )
    const edges = []
    for (let l = 0; l < nodes.length - 1; l++) {
      nodes[l].forEach((a, i) => nodes[l + 1].forEach((b, j) => edges.push({ a, b, key: `${l}-${i}-${j}` })))
    }
    // One path through the network drawn in the accent colour: the route the
    // attributed region takes to the output.
    const hot = [nodes[0][3], nodes[1][2], nodes[2][1]]
    return { cells, attr, nodes, edges, hot }
  }, [])

  const gridRight = GX + SIZE
  const srcY = GY + 10 * STEP

  return (
    <figure className="instrument">
      <svg viewBox="0 0 540 400" role="presentation" aria-hidden="true" focusable="false">
        <text x={GX} y={GY - 16} className="inst-label">Input, read as patches</text>
        <text x={LAYERS[0].x - 6} y={GY - 16} className="inst-label">Features</text>

        <rect x={GX - 6} y={GY - 6} width={SIZE + 12} height={SIZE + 12} className="inst-frame" />
        {[
          [GX - 6, GY - 6, 1, 1],
          [gridRight + 6, GY - 6, -1, 1],
          [GX - 6, GY + SIZE + 6, 1, -1],
          [gridRight + 6, GY + SIZE + 6, -1, -1],
        ].map(([x, y, sx, sy], i) => (
          <path key={i} d={`M${x} ${y + 10 * sy}V${y}H${x + 10 * sx}`} className="inst-tick" />
        ))}

        <g className="inst-cells">
          {cells.map((c, i) => (
            <rect key={i} x={c.x} y={c.y} width={CELL} height={CELL} fillOpacity={c.o} />
          ))}
        </g>

        <g className="inst-attr">
          {attr.map((c, i) => (
            <rect
              key={i}
              x={c.x}
              y={c.y}
              width={CELL}
              height={CELL}
              fillOpacity={0.35 + c.a * 0.6}
              style={{ animationDelay: `${(c.r / N) * 9 - 9}s` }}
            />
          ))}
        </g>

        <line x1={GX - 6} x2={gridRight + 6} y1={GY} y2={GY} className="inst-scan" />

        <g className="inst-edges">
          {edges.map((e) => (
            <line key={e.key} x1={e.a.x} y1={e.a.y} x2={e.b.x} y2={e.b.y} />
          ))}
          {nodes[0].map((n, i) => (
            <line key={`in-${i}`} x1={gridRight + 6} y1={GY + (SIZE * (i + 0.5)) / 5} x2={n.x} y2={n.y} className="inst-feed" />
          ))}
        </g>

        <path
          d={`M${gridRight + 6} ${srcY} L${hot[0].x} ${hot[0].y} L${hot[1].x} ${hot[1].y} L${hot[2].x} ${hot[2].y}`}
          className="inst-path"
        />

        {nodes.flat().map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="4.5" className="inst-node" />
        ))}
        {hot.map((n, i) => (
          <circle key={`h-${i}`} cx={n.x} cy={n.y} r="4.5" className="inst-node is-hot" />
        ))}

        <g transform={`translate(${GX}, ${GY + SIZE + 34})`}>
          <rect width="12" height="12" className="inst-key-attr" />
          <text x="20" y="10" className="inst-label">Attribution: patches the output depends on</text>
        </g>
      </svg>
      <figcaption className="sr-only">
        Decorative illustration of an image divided into patches, a small network of layers, and an attribution map.
      </figcaption>
    </figure>
  )
}
