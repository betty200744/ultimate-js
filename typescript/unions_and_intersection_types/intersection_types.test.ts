import {handleGraphqlResponse} from "./intersection_types";

describe('Intersection Types', async () => {
    it('intersection types', async () => {
        handleGraphqlResponse({error: new Error("aaa")})
    });

})