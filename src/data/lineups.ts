/**
 * Alineaciones titulares.
 *
 * Cada equipo tiene `lines`: la primera línea es el portero y después cada
 * línea va de defensa a ataque. Dentro de cada línea los jugadores van de
 * izquierda a derecha según hacia dónde ataca el equipo (lateral izquierdo
 * primero, lateral derecho al final). Cada jugador es [dorsal, nombre].
 *
 * Para añadir una alineación, usa el id del partido de src/data/matches.ts.
 */
export type Player = [number, string]

export interface TeamLineup {
  coach: string
  formation: string
  lines: Player[][]
}

export interface Lineup {
  home: TeamLineup
  away: TeamLineup
}

export const lineups: Record<string, Lineup> = {
  'francia-brasil-1998': {
    home: {
      coach: 'Aimé Jacquet',
      formation: '4-3-2-1',
      lines: [
        [[16, 'Barthez']],
        [[3, 'Lizarazu'], [8, 'Desailly'], [18, 'Leboeuf'], [15, 'Thuram']],
        [[17, 'Petit'], [7, 'Deschamps'], [19, 'Karembeu']],
        [[10, 'Zidane'], [6, 'Djorkaeff']],
        [[9, "Guivarc'h"]],
      ],
    },
    away: {
      coach: 'Mário Zagallo',
      formation: '4-4-2',
      lines: [
        [[1, 'Taffarel']],
        [[6, 'Roberto Carlos'], [3, 'Júnior Baiano'], [4, 'Aldair'], [2, 'Cafu']],
        [[18, 'Leonardo'], [8, 'Dunga'], [5, 'César Sampaio'], [10, 'Rivaldo']],
        [[20, 'Bebeto'], [9, 'Ronaldo']],
      ],
    },
  },
  'italia-francia-2006': {
    home: {
      coach: 'Marcello Lippi',
      formation: '4-4-1-1',
      lines: [
        [[1, 'Buffon']],
        [[3, 'Grosso'], [23, 'Materazzi'], [5, 'Cannavaro'], [19, 'Zambrotta']],
        [[20, 'Perrotta'], [21, 'Pirlo'], [8, 'Gattuso'], [16, 'Camoranesi']],
        [[10, 'Totti']],
        [[9, 'Toni']],
      ],
    },
    away: {
      coach: 'Raymond Domenech',
      formation: '4-2-3-1',
      lines: [
        [[16, 'Barthez']],
        [[3, 'Abidal'], [5, 'Gallas'], [15, 'Thuram'], [19, 'Sagnol']],
        [[4, 'Vieira'], [6, 'Makélélé']],
        [[7, 'Malouda'], [10, 'Zidane'], [22, 'Ribéry']],
        [[12, 'Henry']],
      ],
    },
  },
  'espana-holanda-2010': {
    home: {
      coach: 'Vicente del Bosque',
      formation: '4-2-3-1',
      lines: [
        [[1, 'Casillas']],
        [[11, 'Capdevila'], [5, 'Puyol'], [3, 'Piqué'], [15, 'Sergio Ramos']],
        [[16, 'Busquets'], [14, 'Xabi Alonso']],
        [[6, 'Iniesta'], [8, 'Xavi'], [18, 'Pedro']],
        [[7, 'Villa']],
      ],
    },
    away: {
      coach: 'Bert van Marwijk',
      formation: '4-2-3-1',
      lines: [
        [[1, 'Stekelenburg']],
        [[5, 'Van Bronckhorst'], [3, 'Mathijsen'], [4, 'Heitinga'], [2, 'Van der Wiel']],
        [[8, 'De Jong'], [6, 'Van Bommel']],
        [[7, 'Kuyt'], [10, 'Sneijder'], [11, 'Robben']],
        [[9, 'Van Persie']],
      ],
    },
  },
  'brasil-alemania-2014': {
    home: {
      coach: 'Luiz Felipe Scolari',
      formation: '4-2-3-1',
      lines: [
        [[12, 'Júlio César']],
        [[6, 'Marcelo'], [13, 'Dante'], [4, 'David Luiz'], [23, 'Maicon']],
        [[17, 'Luiz Gustavo'], [5, 'Fernandinho']],
        [[20, 'Bernard'], [11, 'Oscar'], [7, 'Hulk']],
        [[9, 'Fred']],
      ],
    },
    away: {
      coach: 'Joachim Löw',
      formation: '4-3-3',
      lines: [
        [[1, 'Neuer']],
        [[4, 'Höwedes'], [5, 'Hummels'], [20, 'Boateng'], [16, 'Lahm']],
        [[18, 'Kroos'], [7, 'Schweinsteiger'], [6, 'Khedira']],
        [[8, 'Özil'], [11, 'Klose'], [13, 'Müller']],
      ],
    },
  },
  'argentina-francia-2022': {
    home: {
      coach: 'Lionel Scaloni',
      formation: '4-3-3',
      lines: [
        [[23, 'E. Martínez']],
        [[3, 'Tagliafico'], [19, 'Otamendi'], [13, 'Romero'], [26, 'Molina']],
        [[20, 'Mac Allister'], [24, 'Enzo Fernández'], [7, 'De Paul']],
        [[11, 'Di María'], [9, 'J. Álvarez'], [10, 'Messi']],
      ],
    },
    away: {
      coach: 'Didier Deschamps',
      formation: '4-2-3-1',
      lines: [
        [[1, 'Lloris']],
        [[22, 'T. Hernández'], [18, 'Upamecano'], [4, 'Varane'], [5, 'Koundé']],
        [[14, 'Rabiot'], [8, 'Tchouaméni']],
        [[10, 'Mbappé'], [7, 'Griezmann'], [11, 'Dembélé']],
        [[9, 'Giroud']],
      ],
    },
  },
  'manchester-united-bayern-1999': {
    home: {
      coach: 'Alex Ferguson',
      formation: '4-4-2',
      lines: [
        [[1, 'Schmeichel']],
        [[3, 'Irwin'], [6, 'Stam'], [5, 'Johnsen'], [2, 'G. Neville']],
        [[15, 'Blomqvist'], [8, 'Butt'], [7, 'Beckham'], [11, 'Giggs']],
        [[9, 'Cole'], [19, 'Yorke']],
      ],
    },
    away: {
      coach: 'Ottmar Hitzfeld',
      formation: '5-3-2',
      lines: [
        [[1, 'Kahn']],
        [[18, 'Tarnat'], [4, 'Kuffour'], [10, 'Matthäus'], [25, 'Linke'], [2, 'Babbel']],
        [[11, 'Effenberg'], [16, 'Jeremies'], [14, 'Basler']],
        [[21, 'Zickler'], [19, 'Jancker']],
      ],
    },
  },
  'liverpool-milan-2005': {
    home: {
      coach: 'Carlo Ancelotti',
      formation: '4-3-1-2',
      lines: [
        [[1, 'Dida']],
        [[3, 'Maldini'], [13, 'Nesta'], [31, 'Stam'], [2, 'Cafu']],
        [[20, 'Seedorf'], [21, 'Pirlo'], [8, 'Gattuso']],
        [[22, 'Kaká']],
        [[7, 'Shevchenko'], [11, 'Crespo']],
      ],
    },
    away: {
      coach: 'Rafa Benítez',
      formation: '4-4-1-1',
      lines: [
        [[1, 'Dudek']],
        [[21, 'Traoré'], [4, 'Hyypiä'], [23, 'Carragher'], [3, 'Finnan']],
        [[6, 'Riise'], [14, 'Xabi Alonso'], [8, 'Gerrard'], [10, 'Luis García']],
        [[7, 'Kewell']],
        [[5, 'Baroš']],
      ],
    },
  },
  'barcelona-manchester-united-2009': {
    home: {
      coach: 'Pep Guardiola',
      formation: '4-3-3',
      lines: [
        [[1, 'Valdés']],
        [[16, 'Sylvinho'], [3, 'Piqué'], [24, 'Touré'], [5, 'Puyol']],
        [[8, 'Iniesta'], [28, 'Busquets'], [6, 'Xavi']],
        [[14, 'Henry'], [10, 'Messi'], [9, "Eto'o"]],
      ],
    },
    away: {
      coach: 'Alex Ferguson',
      formation: '4-3-3',
      lines: [
        [[1, 'Van der Sar']],
        [[3, 'Evra'], [15, 'Vidić'], [5, 'Ferdinand'], [22, "O'Shea"]],
        [[8, 'Anderson'], [16, 'Carrick'], [11, 'Giggs']],
        [[10, 'Rooney'], [7, 'Cristiano Ronaldo'], [13, 'Park']],
      ],
    },
  },
  'real-madrid-atletico-2014': {
    home: {
      coach: 'Carlo Ancelotti',
      formation: '4-3-3',
      lines: [
        [[1, 'Casillas']],
        [[5, 'Coentrão'], [4, 'Sergio Ramos'], [2, 'Varane'], [15, 'Carvajal']],
        [[22, 'Di María'], [6, 'Khedira'], [19, 'Modrić']],
        [[7, 'Cristiano Ronaldo'], [9, 'Benzema'], [11, 'Bale']],
      ],
    },
    away: {
      coach: 'Diego Simeone',
      formation: '4-4-2',
      lines: [
        [[13, 'Courtois']],
        [[3, 'Filipe Luís'], [2, 'Godín'], [23, 'Miranda'], [20, 'Juanfran']],
        [[6, 'Koke'], [14, 'Gabi'], [5, 'Tiago'], [8, 'Raúl García']],
        [[7, 'Villa'], [19, 'Diego Costa']],
      ],
    },
  },
  'barcelona-psg-2017': {
    home: {
      coach: 'Luis Enrique',
      formation: '3-4-3',
      lines: [
        [[1, 'Ter Stegen']],
        [[23, 'Umtiti'], [14, 'Mascherano'], [3, 'Piqué']],
        [[8, 'Iniesta'], [5, 'Busquets'], [4, 'Rakitić'], [12, 'Rafinha']],
        [[11, 'Neymar'], [9, 'Suárez'], [10, 'Messi']],
      ],
    },
    away: {
      coach: 'Unai Emery',
      formation: '4-3-3',
      lines: [
        [[16, 'Trapp']],
        [[20, 'Kurzawa'], [2, 'Thiago Silva'], [5, 'Marquinhos'], [12, 'Meunier']],
        [[25, 'Rabiot'], [8, 'Thiago Motta'], [6, 'Verratti']],
        [[23, 'Draxler'], [9, 'Cavani'], [7, 'Lucas Moura']],
      ],
    },
  },
  'liverpool-barcelona-2019': {
    home: {
      coach: 'Jürgen Klopp',
      formation: '4-3-3',
      lines: [
        [[13, 'Alisson']],
        [[26, 'Robertson'], [4, 'Van Dijk'], [32, 'Matip'], [66, 'Alexander-Arnold']],
        [[7, 'Milner'], [3, 'Fabinho'], [14, 'Henderson']],
        [[10, 'Mané'], [27, 'Origi'], [23, 'Shaqiri']],
      ],
    },
    away: {
      coach: 'Ernesto Valverde',
      formation: '4-3-3',
      lines: [
        [[1, 'Ter Stegen']],
        [[18, 'Jordi Alba'], [15, 'Lenglet'], [3, 'Piqué'], [20, 'Sergi Roberto']],
        [[22, 'Vidal'], [5, 'Busquets'], [4, 'Rakitić']],
        [[7, 'Coutinho'], [9, 'Suárez'], [10, 'Messi']],
      ],
    },
  },
}
