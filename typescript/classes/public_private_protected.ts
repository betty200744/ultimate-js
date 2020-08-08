// private: not accessible outside class 'Animal', include instance
// protected: can accessible in class 'Animal' and subClass, not accessible by instance
// readonly: only read outside class 'Animal'
// static: only can accessible by Class.xx

export class DailyReporter {
    static fakeLike = 100
    private realLike: number
    protected fork: number
    #realHeart: number
    like: number
    readonly userId: number

    getLike(): number {
        return this.like + DailyReporter.fakeLike
    }
}

export class DeveloperDailyReporter extends DailyReporter {
    constructor() {
        super();
    }

    getFork(): number {
        return this.fork
    }
}
