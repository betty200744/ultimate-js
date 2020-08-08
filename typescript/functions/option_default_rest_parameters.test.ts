import {add3} from './option_default_rest_parameters'

describe('function', async () => {
    it('option default rest', async () => {
        let res = add3(1, null, 3, 4)
        expect(res).toEqual(8)
    });
})