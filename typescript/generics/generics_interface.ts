export interface PaginationResponse<T> {
    total: number,
    offset: number,
    data: T[]
}

export function getProjects(): PaginationResponse<{ id, name }> {
    return {total: 1, offset: 0, data: [{id: "1", name: "1"}]}
}
export function getUsers(): PaginationResponse<{ id, username }> {
    return {total: 1, offset: 0, data: [{id: "1", username: "1"}]}
}