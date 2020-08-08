export function create<T>(c: { new(): T }): T {
    return new c();
}

export class BeeKeeper {
    hasMask: boolean;
}