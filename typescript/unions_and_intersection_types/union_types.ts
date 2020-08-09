// union_types， 或者
function getReviewById(id: string | number): {} {
    if (typeof id === "string") {
        id = parseInt(id)
    }
    return {id}
}