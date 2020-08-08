export interface IUserController {
    getQualityData(userIds: string[]): { [teamUserId: string]: { line: number, trendDeltaPercent: number } }

    getDevEqLineData(userIds: string[]): { [teamUserId: string]: { data: string, value: number } }
}

export default class TeamUserController implements IUserController {
    getQualityData(userIds: string[]): { [teamUserId: string]: { line: number, trendDeltaPercent: number } } {
        let result = {} as {
            [teamUserId: string]: {
                line: number,
                trendDeltaPercent: number
            }
        }
        for (let userId of userIds) {
            result[userId] = {
                line: 1,
                trendDeltaPercent: 1
            }
        }
        return result
    }


    getDevEqLineData(userIds: string[]): { [teamUserId: string]: { data: string, value: number } } {
        let result = {} as {
            [teamUserId: string]: {
                data: string,
                value: number
            }
        }
        for (let userId of userIds) {
            result[userId] = {
                data: "d",
                value: 21
            }
        }
        return result
    }

}