import Joi from "joi";

class TeamModel {
    public teamID:number;
    public name:string;

    public constructor(team:TeamModel) {
        this.teamID = team.teamID;
        this.name = team.name;
    }

    private static validationScheme = Joi.object({
        teamID: Joi.number().optional().positive().integer(),
        name: Joi.string().required().min(1).max(30)
    });

    public validate():string {
        const result = TeamModel.validationScheme.validate(this);
        return result.error?.message;
    }
}

export default TeamModel;