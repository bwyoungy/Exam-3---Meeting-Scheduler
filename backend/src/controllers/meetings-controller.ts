import express, { NextFunction, Request, Response } from "express";
import meetingsLogic from "../logic/meetings-logic";

const router = express.Router();

router.get("/teams", async(request:Request, response:Response, next:NextFunction)=>{
    try {
        const teams = await meetingsLogic.getAllTeams();
        response.json(teams);
    } catch (error:any) {
        next(error);
    }
});

export default router;