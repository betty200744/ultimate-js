export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}

export function defaultCompare<T>(a: T, b: T): number {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function equals<T>(a: T, b: T): boolean {
    return a === b;
}

export function lesserEquals<T>(a: T, b: T) {
    const comp = defaultCompare(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

export function biggerEquals<T>(a: T, b: T) {
    const comp = defaultCompare(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}