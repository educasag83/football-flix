/** Gráfico de radar sencillo (valores de 1 a 20). */
export function Radar({ values, labels, color }: { values: number[]; labels: string[]; color: string }) {
  const size = 240
  const c = size / 2
  const r = 82
  const n = values.length
  const pt = (i: number, v: number) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2
    return [c + Math.cos(a) * r * v, c + Math.sin(a) * r * v]
  }
  const poly = (scale: (i: number) => number) =>
    values.map((_, i) => pt(i, scale(i)).map((x) => x.toFixed(1)).join(',')).join(' ')
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="radar" role="img" aria-label={labels.map((l, i) => `${l} ${values[i]}`).join(', ')}>
      {[0.25, 0.5, 0.75, 1].map((s) => (
        <polygon key={s} points={poly(() => s)} fill="none" stroke="rgba(255,255,255,.14)" />
      ))}
      {values.map((_, i) => {
        const [x, y] = pt(i, 1)
        return <line key={i} x1={c} y1={c} x2={x} y2={y} stroke="rgba(255,255,255,.12)" />
      })}
      <polygon points={poly((i) => values[i] / 20)} fill={`${color}55`} stroke={color} strokeWidth="2" />
      {values.map((v, i) => {
        const [x, y] = pt(i, 1.22)
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#ddd">
            <tspan fontWeight="700">{labels[i]}</tspan>
            <tspan x={x} dy="13" fill="#fff" fontWeight="800">{v}</tspan>
          </text>
        )
      })}
    </svg>
  )
}
