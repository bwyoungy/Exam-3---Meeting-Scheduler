import TeamModel from "../models/team-model";
import dal from "../utils/dal";

async function getAllTeams():Promise<TeamModel[]> {
    const sqlQuery = `SELECT * FROM teams`;
    const teams = await dal.execute(sqlQuery);
    return teams;
}

export default {
    getAllTeams
}