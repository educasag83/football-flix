/**
 * Wonderkids: jóvenes promesas para seguir.
 *
 * - `club` refleja la situación a mediados de 2026: actualízalo cuando haya fichajes.
 * - `profile` es una valoración estilo Football Manager (1 a 20) hecha por
 *   Football Flix a partir de su juego. NO son los atributos oficiales del juego.
 * - `stats` es opcional: rellénalo con los números de la temporada que quieras
 *   seguir (de SofaScore, FBref o Transfermarkt) y se mostrarán en la ficha.
 */
export type Position = 'Portero' | 'Defensa' | 'Centrocampista' | 'Extremo' | 'Mediapunta' | 'Delantero'

export interface WonderkidStats {
  season: string
  matches: number
  goals: number
  assists: number
  minutes?: number
}

export interface Wonderkid {
  id: string
  name: string
  born: number
  nationality: string
  flag: string
  position: Position
  role: string
  foot: 'Zurdo' | 'Diestro' | 'Ambidiestro'
  club: string
  formedAt: string
  /** Colores para la ficha */
  colors: [string, string]
  review: string
  strengths: string[]
  toImprove: string[]
  /** Proyección: a qué puede llegar */
  projection: string
  /** Potencial de 1 a 5 estrellas */
  potential: 1 | 2 | 3 | 4 | 5
  profile: {
    tecnica: number
    ritmo: number
    regate: number
    creacion: number
    gol: number
    defensa: number
  }
  stats?: WonderkidStats[]
}

export const wonderkids: Wonderkid[] = [
  {
    id: 'lamine-yamal',
    name: 'Lamine Yamal',
    born: 2007,
    nationality: 'España',
    flag: '🇪🇸',
    position: 'Extremo',
    role: 'Extremo derecho a pierna cambiada',
    foot: 'Zurdo',
    club: 'FC Barcelona',
    formedAt: 'La Masia (FC Barcelona)',
    colors: ['#a50044', '#004d98'],
    review:
      'El caso más precoz de su generación: titular en el Barça y campeón de Europa con España en 2024 siendo menor de edad. Desequilibra en el uno contra uno, filtra pases que pocos ven y ya decide partidos grandes.',
    strengths: ['Regate en espacios mínimos', 'Pase exterior y centro con rosca', 'Personalidad en partidos grandes'],
    toImprove: ['Gestión del físico y las cargas', 'Juego sin balón en defensa'],
    projection: 'Candidato a dominar el fútbol mundial durante una década. Techo de Balón de Oro.',
    potential: 5,
    profile: { tecnica: 19, ritmo: 16, regate: 19, creacion: 18, gol: 15, defensa: 6 },
  },
  {
    id: 'desire-doue',
    name: 'Désiré Doué',
    born: 2005,
    nationality: 'Francia',
    flag: '🇫🇷',
    position: 'Extremo',
    role: 'Extremo / mediapunta polivalente',
    foot: 'Diestro',
    club: 'Paris Saint-Germain',
    formedAt: 'Stade Rennais',
    colors: ['#004170', '#da291c'],
    review:
      'Llegó del Rennes en 2024 y en un año pasó de suplente a figura: dos goles y una asistencia en la final de la Champions 2025 ante el Inter. Juega por dentro o por fuera y nunca se esconde.',
    strengths: ['Conducción y cambio de ritmo', 'Polivalencia en toda la línea de ataque', 'Trabajo en la presión'],
    toImprove: ['Regularidad de cara a gol', 'Toma de decisiones en el último pase'],
    projection: 'Fijo en un candidato a la Champions y en la selección francesa. Puede ser top 10 del mundo en su puesto.',
    potential: 5,
    profile: { tecnica: 17, ritmo: 16, regate: 17, creacion: 15, gol: 14, defensa: 10 },
  },
  {
    id: 'estevao',
    name: 'Estêvão',
    born: 2007,
    nationality: 'Brasil',
    flag: '🇧🇷',
    position: 'Extremo',
    role: 'Extremo derecho a pierna cambiada',
    foot: 'Zurdo',
    club: 'Chelsea',
    formedAt: 'Palmeiras',
    colors: ['#034694', '#ffffff'],
    review:
      'Apodado “Messinho” en Brasil. Explotó en el Palmeiras y el Chelsea cerró su fichaje en 2024 para que llegara en 2025. Zurdo eléctrico que parte desde la derecha y busca el arco.',
    strengths: ['Regate en velocidad', 'Disparo con la zurda', 'Creatividad en el uno contra uno'],
    toImprove: ['Adaptación física a la Premier', 'Contribución defensiva'],
    projection: 'Destinado a ser el extremo titular de Brasil. Techo de estrella mundial si se adapta a Europa.',
    potential: 5,
    profile: { tecnica: 18, ritmo: 16, regate: 18, creacion: 15, gol: 15, defensa: 5 },
  },
  {
    id: 'gianluca-prestianni',
    name: 'Gianluca Prestianni',
    born: 2006,
    nationality: 'Argentina',
    flag: '🇦🇷',
    position: 'Extremo',
    role: 'Extremo derecho',
    foot: 'Zurdo',
    club: 'SL Benfica',
    formedAt: 'Vélez Sarsfield',
    colors: ['#e41b17', '#ffffff'],
    review:
      'Debutó muy joven en Vélez y el Benfica lo fichó en 2024. Bajo y explosivo, vive del cambio de dirección. Ha ido sumando minutos en el primer equipo y con las selecciones juveniles de Argentina.',
    strengths: ['Aceleración en corto', 'Regate y centro de gravedad bajo', 'Valentía para encarar'],
    toImprove: ['Físico en el choque', 'Gol y última decisión'],
    projection: 'Puede ser titular en el Benfica y dar el salto a una gran liga en un par de temporadas.',
    potential: 4,
    profile: { tecnica: 16, ritmo: 16, regate: 17, creacion: 13, gol: 11, defensa: 6 },
  },
  {
    id: 'mika-godts',
    name: 'Mika Godts',
    born: 2005,
    nationality: 'Bélgica',
    flag: '🇧🇪',
    position: 'Extremo',
    role: 'Extremo izquierdo',
    foot: 'Diestro',
    club: 'Ajax',
    formedAt: 'KRC Genk',
    colors: ['#d2122e', '#ffffff'],
    review:
      'Llegó al Ajax desde la cantera del Genk y se ganó el puesto en el primer equipo. Extremo de regate puro que encara una y otra vez por la izquierda y cada vez aporta más goles y asistencias.',
    strengths: ['Uno contra uno', 'Conducción en carrera', 'Llegada desde la banda'],
    toImprove: ['Eficacia en el remate', 'Constancia durante los 90 minutos'],
    projection: 'Perfil clásico de venta del Ajax a la Premier o a la Bundesliga. Candidato a la selección belga.',
    potential: 4,
    profile: { tecnica: 15, ritmo: 16, regate: 17, creacion: 13, gol: 12, defensa: 6 },
  },
  {
    id: 'franco-mastantuono',
    name: 'Franco Mastantuono',
    born: 2007,
    nationality: 'Argentina',
    flag: '🇦🇷',
    position: 'Mediapunta',
    role: 'Enganche / extremo derecho',
    foot: 'Zurdo',
    club: 'Real Madrid',
    formedAt: 'River Plate',
    colors: ['#ffffff', '#febe10'],
    review:
      'Debutó en River con 16 años, marcó de tiro libre en un Superclásico con 17 y el Real Madrid lo fichó en 2025. Zurdo con pegada a balón parado y mucho carácter.',
    strengths: ['Golpeo de balón parado', 'Visión entre líneas', 'Mentalidad competitiva'],
    toImprove: ['Velocidad punta', 'Encontrar su posición ideal en un equipo grande'],
    projection: 'Llamado a ser el creativo de Argentina tras la era Messi.',
    potential: 5,
    profile: { tecnica: 17, ritmo: 13, regate: 15, creacion: 17, gol: 14, defensa: 8 },
  },
  {
    id: 'pau-cubarsi',
    name: 'Pau Cubarsí',
    born: 2007,
    nationality: 'España',
    flag: '🇪🇸',
    position: 'Defensa',
    role: 'Defensa central',
    foot: 'Diestro',
    club: 'FC Barcelona',
    formedAt: 'La Masia (FC Barcelona)',
    colors: ['#a50044', '#004d98'],
    review:
      'Titular en el Barça con 17 años. Lo que lo hace especial es la salida de balón: rompe líneas con pases que normalmente dan los centrocampistas. Lee el juego como un veterano.',
    strengths: ['Pase entre líneas desde atrás', 'Anticipación', 'Calma bajo presión'],
    toImprove: ['Duelos aéreos y físicos', 'Velocidad en carreras largas'],
    projection: 'Central titular de España durante muchos años, al estilo de Piqué.',
    potential: 5,
    profile: { tecnica: 15, ritmo: 12, regate: 10, creacion: 15, gol: 5, defensa: 17 },
  },
  {
    id: 'kenan-yildiz',
    name: 'Kenan Yıldız',
    born: 2005,
    nationality: 'Turquía',
    flag: '🇹🇷',
    position: 'Mediapunta',
    role: 'Segundo delantero / extremo izquierdo',
    foot: 'Diestro',
    club: 'Juventus',
    formedAt: 'Bayern Múnich',
    colors: ['#000000', '#ffffff'],
    review:
      'Salió de la cantera del Bayern hacia la Juventus, donde heredó el 10. Elegante, con regate en carrera y disparo desde fuera del área. Es la gran figura de la nueva Turquía.',
    strengths: ['Disparo con rosca desde la izquierda', 'Conducción', 'Personalidad'],
    toImprove: ['Regularidad', 'Juego de espaldas'],
    projection: 'Puede ser el líder de la Juve y de Turquía durante una década.',
    potential: 4,
    profile: { tecnica: 17, ritmo: 15, regate: 16, creacion: 14, gol: 15, defensa: 7 },
  },
  {
    id: 'warren-zaire-emery',
    name: 'Warren Zaïre-Emery',
    born: 2006,
    nationality: 'Francia',
    flag: '🇫🇷',
    position: 'Centrocampista',
    role: 'Interior box-to-box',
    foot: 'Diestro',
    club: 'Paris Saint-Germain',
    formedAt: 'Paris Saint-Germain',
    colors: ['#004170', '#da291c'],
    review:
      'Debutó en el PSG con 16 años y en la selección francesa con 17. Centrocampista completo: recupera, conduce y llega al área. Puede jugar también de lateral derecho.',
    strengths: ['Despliegue físico', 'Conducción para salir de la presión', 'Madurez táctica'],
    toImprove: ['Último pase', 'Gol desde segunda línea'],
    projection: 'Mediocentro titular de Francia en los próximos Mundiales.',
    potential: 4,
    profile: { tecnica: 15, ritmo: 14, regate: 13, creacion: 14, gol: 10, defensa: 14 },
  },
  {
    id: 'arda-guler',
    name: 'Arda Güler',
    born: 2005,
    nationality: 'Turquía',
    flag: '🇹🇷',
    position: 'Mediapunta',
    role: 'Mediapunta / interior zurdo',
    foot: 'Zurdo',
    club: 'Real Madrid',
    formedAt: 'Fenerbahçe',
    colors: ['#ffffff', '#febe10'],
    review:
      'El zurdo turco que el Madrid se llevó del Fenerbahçe en 2023. Pierna izquierda privilegiada, visión de juego y golazos con la selección. Cada vez juega más retrasado, como organizador.',
    strengths: ['Golpeo con la zurda', 'Visión y pase', 'Faltas directas'],
    toImprove: ['Intensidad sin balón', 'Duelos físicos'],
    projection: 'Organizador de élite; el creativo de referencia de Turquía.',
    potential: 4,
    profile: { tecnica: 18, ritmo: 12, regate: 15, creacion: 18, gol: 13, defensa: 8 },
  },
  {
    id: 'kobbie-mainoo',
    name: 'Kobbie Mainoo',
    born: 2005,
    nationality: 'Inglaterra',
    flag: '🏴',
    position: 'Centrocampista',
    role: 'Mediocentro',
    foot: 'Diestro',
    club: 'Manchester United',
    formedAt: 'Manchester United',
    colors: ['#da291c', '#000000'],
    review:
      'Canterano del United, marcó en la final de la FA Cup 2024 ante el City y jugó la final de la Euro 2024 con Inglaterra. Destaca por la calma con la que sale de la presión.',
    strengths: ['Giros para eludir la presión', 'Calma con balón', 'Protección del balón'],
    toImprove: ['Continuidad física', 'Llegada al área'],
    projection: 'Mediocentro de selección si encuentra continuidad.',
    potential: 4,
    profile: { tecnica: 15, ritmo: 12, regate: 14, creacion: 13, gol: 9, defensa: 13 },
  },
  {
    id: 'claudio-echeverri',
    name: 'Claudio Echeverri',
    born: 2006,
    nationality: 'Argentina',
    flag: '🇦🇷',
    position: 'Mediapunta',
    role: 'Enganche',
    foot: 'Diestro',
    club: 'Manchester City',
    formedAt: 'River Plate',
    colors: ['#6cabdd', '#1c2c5b'],
    review:
      '“El Diablito”. Brilló con Argentina en el Mundial Sub-17 de 2023 con un hat-trick ante Brasil. El City lo fichó de River; enganche puro, de regate corto y pase final.',
    strengths: ['Regate corto', 'Pase final', 'Desequilibrio por dentro'],
    toImprove: ['Físico', 'Encontrar minutos en la élite'],
    projection: 'Talento de primer nivel si encuentra un contexto con minutos.',
    potential: 4,
    profile: { tecnica: 17, ritmo: 14, regate: 17, creacion: 16, gol: 12, defensa: 5 },
  },
  {
    id: 'endrick',
    name: 'Endrick',
    born: 2006,
    nationality: 'Brasil',
    flag: '🇧🇷',
    position: 'Delantero',
    role: 'Delantero centro',
    foot: 'Zurdo',
    club: 'Real Madrid',
    formedAt: 'Palmeiras',
    colors: ['#ffffff', '#febe10'],
    review:
      'Goleador precoz del Palmeiras y fichaje del Real Madrid. Potente, con un disparo de zurda fortísimo y muy buena colocación en el área. Ya marcó con Brasil en Wembley.',
    strengths: ['Potencia de disparo', 'Fuerza en el cuerpo a cuerpo', 'Instinto goleador'],
    toImprove: ['Juego asociativo', 'Minutos de calidad en Europa'],
    projection: 'Delantero de Brasil para los próximos Mundiales.',
    potential: 4,
    profile: { tecnica: 15, ritmo: 16, regate: 14, creacion: 10, gol: 17, defensa: 5 },
  },
  {
    id: 'rodrigo-mora',
    name: 'Rodrigo Mora',
    born: 2007,
    nationality: 'Portugal',
    flag: '🇵🇹',
    position: 'Mediapunta',
    role: 'Mediapunta / extremo',
    foot: 'Diestro',
    club: 'FC Porto',
    formedAt: 'FC Porto',
    colors: ['#003e7e', '#ffffff'],
    review:
      'Joya de la cantera del Porto: pequeño, técnico y con mucho gol para su edad. Se hizo titular en la temporada 2024-25 y el club lo blindó con una cláusula enorme.',
    strengths: ['Conducción y regate', 'Llegada y gol', 'Inteligencia entre líneas'],
    toImprove: ['Físico', 'Defensa sin balón'],
    projection: 'Próxima gran venta del fútbol portugués y futuro internacional.',
    potential: 4,
    profile: { tecnica: 17, ritmo: 14, regate: 16, creacion: 15, gol: 14, defensa: 6 },
  },
  {
    id: 'geovany-quenda',
    name: 'Geovany Quenda',
    born: 2007,
    nationality: 'Portugal',
    flag: '🇵🇹',
    position: 'Extremo',
    role: 'Carrilero / extremo derecho',
    foot: 'Zurdo',
    club: 'Sporting CP / Chelsea',
    formedAt: 'Sporting CP',
    colors: ['#008057', '#ffffff'],
    review:
      'Debutó en el Sporting de Amorim con 17 años como carrilero y luego se adelantó a extremo. El Chelsea acordó su fichaje en 2025. Muy rápido y con una zurda explosiva.',
    strengths: ['Velocidad', 'Recorrido por la banda', 'Disparo con la zurda'],
    toImprove: ['Precisión en el centro', 'Toma de decisiones'],
    projection: 'Extremo de Premier y de la selección portuguesa.',
    potential: 4,
    profile: { tecnica: 15, ritmo: 17, regate: 15, creacion: 12, gol: 12, defensa: 10 },
  },
  {
    id: 'ethan-nwaneri',
    name: 'Ethan Nwaneri',
    born: 2007,
    nationality: 'Inglaterra',
    flag: '🏴',
    position: 'Mediapunta',
    role: 'Mediapunta / extremo derecho',
    foot: 'Zurdo',
    club: 'Arsenal',
    formedAt: 'Arsenal',
    colors: ['#ef0107', '#ffffff'],
    review:
      'El jugador más joven de la historia de la Premier League (debutó con 15 años). Zurdo creativo que ya marca goles con el primer equipo del Arsenal.',
    strengths: ['Golpeo desde fuera del área', 'Recepción entre líneas', 'Calidad técnica'],
    toImprove: ['Velocidad', 'Continuidad'],
    projection: 'Sucesor natural de Ødegaard o Saka en el Arsenal.',
    potential: 4,
    profile: { tecnica: 16, ritmo: 13, regate: 15, creacion: 15, gol: 14, defensa: 7 },
  },
]

export const PROFILE_LABELS: Record<keyof Wonderkid['profile'], string> = {
  tecnica: 'Técnica',
  ritmo: 'Ritmo',
  regate: 'Regate',
  creacion: 'Creación',
  gol: 'Gol',
  defensa: 'Defensa',
}
