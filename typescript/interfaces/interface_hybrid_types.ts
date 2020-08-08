interface IReview {
    title: string

    publish(): void
}

export class Review implements IReview {
    title: string;

    publish(): void {
        return
    }
}