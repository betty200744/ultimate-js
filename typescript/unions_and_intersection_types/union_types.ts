// union_types
function getReviewById(id: string | number): {} {
    if (typeof id === "string") {
        id = parseInt(id)
    }
    return {id}
}