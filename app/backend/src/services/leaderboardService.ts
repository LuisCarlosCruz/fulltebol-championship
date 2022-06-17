import { getAllTeamsService } from './teamsServiceService';
import { getAllMatchesService } from './matchesService';
import Matches from '../database/models/matches';
import ILeaderboard from '../interfaces/ILeaderboard';

const totalPoints = (matches: Matches[] | undefined) => {
  let value = 0;
  matches?.forEach((match: Matches) => {
    if (match.homeTeamGoals > match.awayTeamGoals) value += 3;
    if (match.homeTeamGoals === match.awayTeamGoals) value += 1;
    if (match.homeTeamGoals < match.awayTeamGoals) value += 0;
  });

  return value;
};

const totalVictories = (matches: Matches[] | undefined) => {
  const victories = matches?.filter((match) => match.homeTeamGoals > match.awayTeamGoals);

  return victories?.length;
};

const totalDraws = (matches: Matches[] | undefined) => {
  const draws = matches?.filter((match) => match.homeTeamGoals === match.awayTeamGoals);

  return draws?.length;
};

const totalLosses = (matches: Matches[] | undefined) => {
  const lose = matches?.filter((match) => match.homeTeamGoals < match.awayTeamGoals);

  return lose?.length;
};

const goalsFavor = (matches: Matches[] | undefined) => {
  const value: number[] = [];

  matches?.forEach((match) => value.push(match.homeTeamGoals));

  const gols = value?.reduce((acc, curr) => acc + curr);

  return gols;
};

const goalsOwn = (matches: Matches[] | undefined) => {
  const value: number[] = [];

  matches?.forEach((match) => value.push(match.awayTeamGoals));

  const gols = value?.reduce((acc, curr) => acc + curr);

  return gols;
};

const efficiency = (matches: Matches[] | undefined) => {
  if (!matches) return null;

  const baseEffic = ((totalPoints(matches) / (matches.length * 3)) * 100);

  const total = Math.round(baseEffic * 100) / 100;

  return String(total);
};

const sortLeaderboard = (filterHome: ILeaderboard[] | undefined) => filterHome
  ?.sort((a, b) => (b.totalPoints - a.totalPoints)
      || (b.goalsBalance - a.goalsBalance)
      || (b.goalsFavor - a.goalsFavor)
      || (b.goalsOwn - a.goalsOwn));

const getLeaderboardService = async () => {
  const finalizedMatches = await getAllMatchesService('false');

  const allTeams = await getAllTeamsService();

  const filterHome = allTeams.map((team) => {
    const matches = finalizedMatches?.filter((match) => match.homeTeam === team.id);

    return {
      name: team.teamName,
      totalPoints: totalPoints(matches),
      totalGames: matches?.length,
      totalVictories: totalVictories(matches),
      totalDraws: totalDraws(matches),
      totalLosses: totalLosses(matches),
      goalsFavor: goalsFavor(matches),
      goalsOwn: goalsOwn(matches),
      goalsBalance: goalsFavor(matches) - goalsOwn(matches),
      efficiency: efficiency(matches),
    };
  });

  return sortLeaderboard(filterHome);
};

export default getLeaderboardService;
