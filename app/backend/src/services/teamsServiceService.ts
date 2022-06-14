import Teams from '../database/models/teams';

export const getAllTeamsService = async () => {
  const allTeams = await Teams.findAll();
  return allTeams;
};

export const getByIdTeamService = async (id: string) => {
  const team = await Teams.findOne({ where: { id }, raw: true });

  if (!team) return undefined;

  return team;
};
