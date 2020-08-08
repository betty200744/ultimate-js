import TeamUserController from './interface_function_types'

describe('Interface_Function', async () => {
    it('interface function', async () => {
        let teamUserController = new TeamUserController()
        let lineDate = teamUserController.getDevEqLineData(["2", "3"])
        let qualityDate = teamUserController.getQualityData(["2", "3"])
        console.log(lineDate)
        console.log(qualityDate)
    });
})