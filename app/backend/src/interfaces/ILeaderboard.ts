export default interface ILeaderboard {
  name: string;
  totalPoints: number,
  totalGames: number | undefined,
  totalVictories: number | undefined,
  totalDraws: number | undefined,
  totalLosses: number | undefined,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string | null;
}
