import Matches from '../database/models/matches';
import Teams from '../database/models/teams';

const getAllMatchesService = async () => {
  const allMatches = await Matches.findAll({
    include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ],
  });

  if (!allMatches) return null;

  return allMatches;
};

export default getAllMatchesService;
