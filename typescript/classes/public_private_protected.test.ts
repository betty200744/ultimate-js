import {DailyReporter, DeveloperDailyReporter} from "./public_private_protected";

describe('Class', async () => {
    it('public_private_protected', async () => {
        let dailyReporter = new DailyReporter()
        let developerDailyReporter  = new DeveloperDailyReporter()
        developerDailyReporter.getFork()
    });

})