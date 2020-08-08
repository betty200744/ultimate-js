export interface ReportDate {
    name: string;
    email: string;
    data: Date;
}

export interface ReportEmailDate extends ReportDate {
    siteUrl: string;
}

export function SendEmailReport(data: ReportEmailDate): ReportDate {
    console.log(data)
    return data
}