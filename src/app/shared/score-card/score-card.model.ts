export interface Score {
  id: string;
  name: string;
  date: Date;
  statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS' | 'STATUS_FINAL';
  status: string;
  shortName: string;
  completed: boolean;
  winning: number;
  homeScore: ScoreItem;
  awayScore: ScoreItem;
}

export interface ScoreItem {
  homeAway: 'home' | 'away';
  score: string;
  winner: boolean;
  teamAbbreviation: string;
  team: string;
}
