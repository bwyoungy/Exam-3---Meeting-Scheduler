import express, { NextFunction, Request, Response } from "express";
import meetingsLogic from "../logic/meetings-logic";
import MeetingModel from "../models/meeting-model";

const router = express.Router();

router.get("/teams", async(request:Request, response:Response, next:NextFunction)=>{
    try {
        const teams = await meetingsLogic.getAllTeams();
        response.json(teams);
    } catch (error:any) {
        next(error);
    }
});

router.get("/meetings-by-team/:teamID", async(request:Request, response:Response, next:NextFunction)=>{
    try {
        const meetings = await meetingsLogic.getMeetingsByTeam(+request.params.teamID);
        response.json(meetings);
    } catch (error:any) {
        next(error);
    }
});

router.post("/meetings", async(request:Request, response:Response, next:NextFunction)=>{
    try {
        const meeting = new MeetingModel(request.body);
        const addedMeeting = await meetingsLogic.addMeeting(meeting);
        response.status(201).json(addedMeeting);
    } catch (error:any) {
        next(error);
    }
});

export default router;