import {ReportEmailDate, SendEmailReport} from "./interface_extends_interface";

describe('Interface_extends_Interface', async () => {
    it('SendEmailReport', async () => {
        let data: ReportEmailDate = {
            name: "week",
            email: "",
            data: new Date(Date.now()),
            siteUrl: ""
        }
        let report = SendEmailReport(data)
        expect(report.name).toEqual("week")
    });

})