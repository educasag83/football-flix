/** Colores principales de cada equipo para las tarjetas (primario, secundario). */
const TEAM_COLORS: Record<string, [string, string]> = {
  Argentina: ['#75aadb', '#ffffff'],
  Brasil: ['#f7d117', '#009c3b'],
  Uruguay: ['#5cbfeb', '#0b1f3a'],
  Chile: ['#d52b1e', '#0039a6'],
  Paraguay: ['#d52b1e', '#ffffff'],
  'Alemania Federal': ['#e8e8e8', '#1a1a1a'],
  Alemania: ['#e8e8e8', '#1a1a1a'],
  Hungría: ['#cd2a3e', '#436f4d'],
  Suecia: ['#fecc00', '#006aa7'],
  Inglaterra: ['#ffffff', '#cf081f'],
  Italia: ['#0066b3', '#ffffff'],
  'Países Bajos': ['#ff7f00', '#ffffff'],
  Francia: ['#002395', '#ed2939'],
  España: ['#c60b1e', '#ffc400'],
  Checoslovaquia: ['#d7141a', '#11457e'],
  URSS: ['#cc0000', '#ffd700'],
  Portugal: ['#c8102e', '#046a38'],
  Grecia: ['#0d5eaf', '#ffffff'],
  'Real Madrid': ['#ffffff', '#febe10'],
  Barcelona: ['#a50044', '#004d98'],
  'Atlético de Madrid': ['#cb3524', '#272e61'],
  'Eintracht Frankfurt': ['#e1000f', '#000000'],
  Sampdoria: ['#1b5faa', '#ffffff'],
  'AC Milan': ['#fb090b', '#000000'],
  'Manchester United': ['#da291c', '#fbe122'],
  'Bayern Múnich': ['#dc052d', '#0066b2'],
  'Bayer Leverkusen': ['#e32221', '#000000'],
  Liverpool: ['#c8102e', '#00b2a9'],
  'Paris Saint-Germain': ['#004170', '#da291c'],
  'Boca Juniors': ['#103f79', '#f3b229'],
  'River Plate': ['#ffffff', '#e30613'],
  Camerún: ['#007a5e', '#ce1126'],
  Rumanía: ['#fcd116', '#002b7f'],
  Bulgaria: ['#ffffff', '#00966e'],
  Croacia: ['#ffffff', '#ff0000'],
  Senegal: ['#ffffff', '#00853f'],
  'Corea del Sur': ['#c60c30', '#003478'],
  'Serbia y Montenegro': ['#0c4076', '#c6363c'],
  Ghana: ['#ffffff', '#006b3f'],
  Colombia: ['#fcd116', '#003893'],
  Japón: ['#0b2a7a', '#ffffff'],
  'Arabia Saudita': ['#ffffff', '#006c35'],
  Marruecos: ['#c1272d', '#006233'],
  Bélgica: ['#e30613', '#000000'],
}

export const teamColors = (team: string): [string, string] => TEAM_COLORS[team] ?? ['#444444', '#888888']

/** Iniciales para el escudo genérico (ej. "Real Madrid" → "RM"). */
export const teamInitials = (team: string) =>
  team
    .split(/\s+/)
    .filter((w) => !['de', 'del', 'la', 'el', 'AC'].includes(w))
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
