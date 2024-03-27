import Joi from "joi";

class MeetingModel {
    public meetingID:number;
    public teamID:number;
    public startTime:Date;
    public endTime:Date;
    public description:string;
    public room:string;
    public teamName:string;

    public constructor(meeting:MeetingModel) {
        this.meetingID = meeting.meetingID;
        this.teamID = meeting.teamID;
        this.startTime = meeting.startTime;
        this.endTime = meeting.endTime;
        this.description = meeting.description;
        this.room = meeting.room;
        this.teamName = meeting.teamName;
    }

    private static validationScheme = Joi.object({
        meetingID: Joi.number().optional().positive().integer(),
        teamID: Joi.number().required().positive().integer(),
        startTime: Joi.date().required(),
        endTime: Joi.date().required().greater(Joi.ref('startTime')),
        description: Joi.string().optional().min(1).max(300),
        room: Joi.string().optional().min(1).max(30),
        teamName: Joi.string().optional().min(1).max(30)
    });

    public validate():string {
        const result = MeetingModel.validationScheme.validate(this);
        
        return result.error?.message;
    }
}

export default MeetingModel;