import Matches from '../database/models/matches';
import Teams from '../database/models/teams';

const getAllMatchesService = async (filter: unknown) => {
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

export default getAllMatchesService;
