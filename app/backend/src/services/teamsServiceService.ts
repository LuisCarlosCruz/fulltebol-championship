import Teams from '../database/models/teams';

const getAllTeams = async () => {
  const allTeams = await Teams.findAll();
  return allTeams;
};

export default getAllTeams;
