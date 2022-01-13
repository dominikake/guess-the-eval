export interface Question {
  fen: string,
  players: { white: string, black: string },
  url: string,
  bestMoves: BestMoves,
}

export interface Variation {
  move: string;
  evaluation: number;
}

// BestMoves has 1 to 3 items. The first variation gives the current evaluation.
export type BestMoves = Variation[];

export const questions: Question[] = [
  {
    fen: '3rb1k1/1Bp2pp1/4p3/2P1P2p/r5nP/1N4P1/P4P2/R3R1K1 b - - 0 27',
    players: {
      white: 'Ian Nepomniachtchi',
      black: 'Magnus Carlsen',
    },
    url: 'https://lichess.org/study/RoBvWqfx/qq4glFqA#53',
    bestMoves: [
      {
        move: 'c6',
        evaluation: -2.77,
      },
      {
        move: 'Ra7',
        evaluation: -0.07,
      },
      {
        move: 'Rd3',
        evaluation: 0,
      },
    ],
  },
  {
    fen: 'r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1 b - - 0 19',
    players: {
      white: 'Deep Blue',
      black: 'Garry Kasparov',
    },
    url: 'https://lichess.org/study/PSiqUImS/H0yrYCp7#37',
    bestMoves: [
      {
        move: 'bxc4',
        evaluation: 5.35,
      },
      {
        move: 'N5b6',
        evaluation: 6.3,
      },
      {
        move: 'N5f6',
        evaluation: 6.92,
      },
    ],
  },
  {
    fen: '5q1k/ppp2Nbp/2np2p1/3B1b2/2PP4/4r1P1/PP1Q3P/R5K1 b - - 3 18',
    players: {
      white: 'Roman Toran Albero',
      black: 'Mikhail Tal',
    },
    url: 'https://www.chessgames.com/perl/chessgame?gid=1139541',
    bestMoves: [
      {
        move: 'Qxf7',
        evaluation: 0,
      },
      {
        move: 'Kg8',
        evaluation: 0,
      },
    ],
  },
  {
    fen: 'r3r1k1/pp3pbp/1qp1b1p1/2B5/2BP4/Q1n2N2/P4PPP/3R1K1R w - - 4 18',
    players: {
      white: 'Donald Byrne',
      black: 'Robert Bobby James Fischer',
    },
    url: 'https://www.chessgames.com/perl/chessgame?gid=1008361',
    bestMoves: [
      {
        move: 'Qxc3',
        evaluation: -2.16,
      },
      {
        move: 'Bd3',
        evaluation: -3.33,
      },
      {
        move: 'Be2',
        evaluation: -3.27,
      },
    ],
  },
  {
    fen: 'rnbq1bnr/ppppkppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR w - - 2 3',
    players: {
      white: 'Magnus Carlsen',
      black: 'Hikaru Nakamura',
    },
    url: 'https://www.chessgames.com/perl/chessgame?gid=2029671',
    bestMoves: [
      {
        move: 'd4',
        evaluation: 0.29,
      },
      {
        move: 'Ke1',
        evaluation: 0.25,
      },
      {
        move: 'Nc3',
        evaluation: 0.23,
      },
    ],
  },
];
