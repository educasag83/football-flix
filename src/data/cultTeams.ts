/**
 * Equipos revelación y de culto.
 * Para añadir uno, copia un objeto y cambia los datos.
 */
export interface CultTeam {
  id: string
  /** Nombre corto del equipo */
  team: string
  /** Cómo se le recuerda: "El Mallorca de Cúper" */
  title: string
  coach: string
  era: string
  country: string
  colors: [string, string]
  /** Una o dos frases sobre por qué es de culto */
  story: string
  /** Logros e hitos */
  highlights: string[]
  /** Figuras del equipo */
  players: string[]
}

export const cultTeams: CultTeam[] = [
  {
    id: 'mallorca-cuper',
    team: 'RCD Mallorca',
    title: 'El Mallorca de Cúper',
    coach: 'Héctor Cúper',
    era: '1997–1999',
    country: 'España',
    colors: ['#c8102e', '#111111'],
    story:
      'Un equipo recién ascendido que, con orden, presión y contragolpe, se plantó en dos finales y terminó tercero en LaLiga. El trampolín de Cúper hacia el Valencia.',
    highlights: [
      'Final de la Copa del Rey 1998 (perdida en los penaltis ante el Barcelona)',
      'Supercopa de España 1998 ante el Barcelona',
      'Final de la Recopa de Europa 1999 ante la Lazio en Villa Park',
      'Tercero en LaLiga 1998-99',
    ],
    players: ['Carlos Roa', 'Marcelino', 'Vicente Engonga', 'Juan Carlos Valerón', 'Ariel Ibagaza', 'Jovan Stanković', 'Dani García'],
  },
  {
    id: 'villarreal-pellegrini',
    team: 'Villarreal CF',
    title: 'El Submarino de Pellegrini',
    coach: 'Manuel Pellegrini',
    era: '2004–2009',
    country: 'España',
    colors: ['#ffe667', '#005187'],
    story:
      'Riquelme dirigiendo, Forlán rematando y Senna sosteniendo. Un pueblo de 50.000 habitantes a un penalti de la final de la Champions.',
    highlights: [
      'Tercero en LaLiga 2004-05; Forlán, Pichichi y Bota de Oro',
      'Semifinal de la Champions 2006: el penalti de Riquelme que paró Lehmann',
      'Subcampeón de LaLiga 2007-08',
    ],
    players: ['Juan Román Riquelme', 'Diego Forlán', 'Marcos Senna', 'Juan Pablo Sorín', 'Gonzalo Rodríguez', 'José Mari', 'Santi Cazorla'],
  },
  {
    id: 'como-fabregas',
    team: 'Como 1907',
    title: 'El Como de Cesc Fàbregas',
    coach: 'Cesc Fàbregas',
    era: '2024–hoy',
    country: 'Italia',
    colors: ['#1d4f91', '#ffffff'],
    story:
      'Del lago de Como a la Serie A después de más de veinte años. Fàbregas apuesta por la posesión y el talento joven en un club que se ha puesto de moda.',
    highlights: [
      'Ascenso a la Serie A en 2024',
      'Fútbol de toque y juego de posición en una liga táctica',
      'Escaparate de jóvenes como Nico Paz',
    ],
    players: ['Nico Paz', 'Patrick Cutrone', 'Assane Diao', 'Máximo Perrone', 'Lucas Da Cunha', 'Sergi Roberto'],
  },
  {
    id: 'atalanta-gasperini',
    team: 'Atalanta',
    title: 'La Atalanta de Gasperini',
    coach: 'Gian Piero Gasperini',
    era: '2016–2025',
    country: 'Italia',
    colors: ['#1e71b8', '#111111'],
    story:
      'Marcaje hombre a hombre en todo el campo y carrileros que llegaban como delanteros. Pasó de pelear por no descender a ganar en Europa.',
    highlights: [
      'Campeona de la Europa League 2024 (3-0 al Leverkusen, triplete de Lookman)',
      'Cuartos de final de la Champions 2020',
      'Varias veces tercera en la Serie A',
    ],
    players: ['Papu Gómez', 'Josip Iličić', 'Duván Zapata', 'Ademola Lookman', 'Teun Koopmeiners', 'Marten de Roon', 'Robin Gosens'],
  },
  {
    id: 'valencia-benitez',
    team: 'Valencia CF',
    title: 'El Valencia de Benítez',
    coach: 'Rafa Benítez',
    era: '2001–2004',
    country: 'España',
    colors: ['#ffffff', '#f18e00'],
    story:
      'Presión, orden y el doble pivote Albelda-Baraja. Rompió el dominio de Madrid y Barça con dos Ligas en tres años.',
    highlights: ['Campeón de LaLiga 2001-02', 'Campeón de LaLiga 2003-04', 'Copa de la UEFA 2004 (2-0 al Olympique de Marsella)'],
    players: ['Santiago Cañizares', 'Roberto Ayala', 'Carlos Marchena', 'David Albelda', 'Rubén Baraja', 'Pablo Aimar', 'Vicente', 'Mista'],
  },
  {
    id: 'leeds-oleary',
    team: 'Leeds United',
    title: 'El Leeds de O’Leary',
    coach: "David O'Leary",
    era: '1999–2001',
    country: 'Inglaterra',
    colors: ['#ffffff', '#1d428a'],
    story:
      'Una generación joven y descarada que llegó a semifinales de la Champions. Luego llegaron las deudas y el famoso “living the dream”.',
    highlights: ['Semifinal de la Copa de la UEFA 2000', 'Semifinal de la Champions League 2001', 'Tercero en la Premier League 1999-2000'],
    players: ['Nigel Martyn', 'Rio Ferdinand', 'Jonathan Woodgate', 'Lucas Radebe', 'Ian Harte', 'Lee Bowyer', 'Harry Kewell', 'Alan Smith', 'Mark Viduka'],
  },
  {
    id: 'depor-irureta',
    team: 'Deportivo de La Coruña',
    title: 'El Súper Depor',
    coach: 'Javier Irureta',
    era: '1998–2005',
    country: 'España',
    colors: ['#0055a4', '#ffffff'],
    story:
      'Valerón, Djalminha, Makaay y Mauro Silva. El Depor ganó la Liga y le hizo cuatro goles al Milan campeón de Europa en Riazor.',
    highlights: [
      'Campeón de LaLiga 1999-2000',
      'Copa del Rey 2002: el Centenariazo en el Bernabéu',
      'Semifinal de la Champions 2004 tras remontar al Milan (4-0)',
    ],
    players: ['Juan Carlos Valerón', 'Djalminha', 'Roy Makaay', 'Mauro Silva', 'Fran', 'Diego Tristán', 'Noureddine Naybet'],
  },
  {
    id: 'porto-mourinho',
    team: 'FC Porto',
    title: 'El Porto de Mourinho',
    coach: 'José Mourinho',
    era: '2002–2004',
    country: 'Portugal',
    colors: ['#003e7e', '#ffffff'],
    story: 'El equipo que presentó a Mourinho al mundo: una Copa de la UEFA y, al año siguiente, la Champions League.',
    highlights: ['Copa de la UEFA 2003 ante el Celtic', 'Champions League 2004 (3-0 al Mónaco)', 'Dos Ligas portuguesas seguidas'],
    players: ['Vítor Baía', 'Ricardo Carvalho', 'Paulo Ferreira', 'Costinha', 'Maniche', 'Deco', 'Derlei'],
  },
  {
    id: 'leicester-ranieri',
    team: 'Leicester City',
    title: 'El Leicester de Ranieri',
    coach: 'Claudio Ranieri',
    era: '2015–2016',
    country: 'Inglaterra',
    colors: ['#003090', '#fdbe11'],
    story: 'Las casas de apuestas lo pagaban 5000 a 1. Ganó la Premier League con contragolpes, Vardy, Mahrez y los kilómetros de Kanté.',
    highlights: ['Campeón de la Premier League 2015-16', 'Vardy marcó en once partidos de Liga seguidos'],
    players: ['Jamie Vardy', 'Riyad Mahrez', "N'Golo Kanté", 'Kasper Schmeichel', 'Wes Morgan', 'Danny Drinkwater', 'Shinji Okazaki'],
  },
  {
    id: 'ajax-ten-hag',
    team: 'Ajax',
    title: 'El Ajax de los jóvenes',
    coach: 'Erik ten Hag',
    era: '2018–2019',
    country: 'Países Bajos',
    colors: ['#d2122e', '#ffffff'],
    story: 'Eliminó al Real Madrid (1-4 en el Bernabéu) y a la Juventus, y se quedó a segundos de la final de la Champions.',
    highlights: ['Semifinal de la Champions League 2019', 'Doblete de Liga y Copa en Países Bajos'],
    players: ['Frenkie de Jong', 'Matthijs de Ligt', 'Dušan Tadić', 'Hakim Ziyech', 'Donny van de Beek', 'David Neres', 'André Onana'],
  },
]
