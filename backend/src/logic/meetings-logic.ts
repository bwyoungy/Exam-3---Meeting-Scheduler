import { OkPacket } from "mysql";
import MeetingModel from "../models/meeting-model";
import TeamModel from "../models/team-model";
import dal from "../utils/dal";
import { ValidationErrorModel } from "../models/error-model";

// Function to get all teams
async function getAllTeams():Promise<TeamModel[]> {
    // Create SQL query - selects all columns from teams table
    const sqlQuery = `SELECT * FROM teams`;

    // Execute SQL query and save in variable to be returned
    const teams = await dal.execute(sqlQuery);
    return teams;
}

// Function to get meetings per team ID
async function getMeetingsByTeam(teamID:number):Promise<MeetingModel[]> {
    // Create SQL query - selects all columns in meetings table and the name column in teams table,
    // selecting rows where the teamID is equal to the paramater passed to function
    const sqlQuery = `
    SELECT meetings.*, teams.name AS teamName
    FROM meetings JOIN teams
    ON meetings.teamID = teams.teamID
    WHERE meetings.teamID = ${teamID};`;

    // Execute SQL query and save in variable to be returned
    const meetings = await dal.execute(sqlQuery);
    return meetings;
}

// Function to add a new meeting
async function addMeeting(meeting:MeetingModel):Promise<MeetingModel> {
    // Run validation on meeting passed to function
    const error = meeting.validate();

    // If there were errors in validation, throw an error (and quit function)
    if (error) throw new ValidationErrorModel(error);

    // Create SQL query - add the information from the meeting passed to the function into the meetings table
    const sqlQuery = `
    INSERT INTO meetings(teamID, startTime, endTime, description, room)
    VALUES(${meeting.teamID}, "${meeting.startTime}", "${meeting.endTime}", "${meeting.description}", "${meeting.room}");`;

    // Execute SQL query and save the info recieved from it
    const info:OkPacket = await dal.execute(sqlQuery);

    // Update the param meeting ID with the ID recieved from the info (which is based on auto incremental primary key)
    meeting.meetingID = info.insertId;

    // Return updated param meeting
    return meeting;
}

export default {
    getAllTeams,
    getMeetingsByTeam,
    addMeeting
}