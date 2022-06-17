import Matches from '../database/models/matches';
import Teams from '../database/models/teams';

export const getAllMatchesService = async (filter: unknown) => {
  const allMatches = await Matches.findAll({
    include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ],
  });

  if (filter === undefined) return allMatches;

  if (filter === 'true') return allMatches.filter((match) => match.inProgress === true);

  if (filter === 'false') return allMatches.filter((match) => match.inProgress === false);
};

export const createMatchInProgressService = async (body: unknown) => {
  const matchCreate = await Matches.create(body);

  return matchCreate;
};

export const matchFinishService = async (id:string) => {
  const matchFinish = await Matches.update({ inProgress: false }, { where: { id } });

  return matchFinish;
};

export const updateMatchService = async (id:string, homeTeamGoals:string, awayTeamGoals:string) => {
  const matchUpdate = await Matches.update({
    homeTeamGoals,
    awayTeamGoals,
  }, { where: { id } });

  return matchUpdate;
};
