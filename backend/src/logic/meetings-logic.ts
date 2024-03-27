import { OkPacket } from "mysql";
import MeetingModel from "../models/meeting-model";
import TeamModel from "../models/team-model";
import dal from "../utils/dal";
import { ValidationErrorModel } from "../models/error-model";

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

async function addMeeting(meeting:MeetingModel):Promise<MeetingModel> {
    const error = meeting.validate();
    if (error) throw new ValidationErrorModel(error);

    const sqlQuery = `
    INSERT INTO meetings(teamID, startTime, endTime, description, room)
    VALUES(${meeting.teamID}, "${meeting.startTime}", "${meeting.endTime}", "${meeting.description}", "${meeting.room}");`;

    const info:OkPacket = await dal.execute(sqlQuery);

    meeting.meetingID = info.insertId;

    return meeting;
}

export default {
    getAllTeams,
    getMeetingsByTeam,
    addMeeting
}