import { teamColors, teamInitials } from '../lib/teams'

export function Crest({ team, size = 44 }: { team: string; size?: number }) {
  const [a, b] = teamColors(team)
  return (
    <div
      className="crest"
      title={team}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.32,
        background: `linear-gradient(135deg, ${a} 0 50%, ${b} 50% 100%)`,
      }}
    >
      <span>{teamInitials(team)}</span>
    </div>
  )
}
