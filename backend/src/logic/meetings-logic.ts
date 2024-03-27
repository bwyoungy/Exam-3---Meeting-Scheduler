import MeetingModel from "../models/meeting-model";
import TeamModel from "../models/team-model";
import dal from "../utils/dal";

async function getAllTeams():Promise<TeamModel[]> {
    const sqlQuery = `SELECT * FROM teams`;
    const teams = await dal.execute(sqlQuery);
    return teams;
}

async function getMeetingsByTeam(teamID:number):Promise<MeetingModel[]> {
    const sqlQuery = `
    SELECT meetings.*, teams.name AS teamName
    FROM meetings JOIN teams
    ON meetings.teamID = teams.teamID
    WHERE meetings.teamID = ${teamID};`;
    const meetings = await dal.execute(sqlQuery);
    return meetings;
}

export default {
    getAllTeams,
    getMeetingsByTeam
}