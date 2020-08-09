
// intersection , 并集
interface ErrorHandling {
    error?: { message: string }
}

interface DataResponse {
    code?: (number | null);
    message?: (string | null)
}

type GraphqlResponse = DataResponse & ErrorHandling

export const handleGraphqlResponse = (response: GraphqlResponse) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }

    console.log(response.message);
};