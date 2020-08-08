import {StatusCode} from "./enums";

describe('enum', async () => {
    it('enum iterator key', async () => {
        // iterator
        for (let item in StatusCode) {
            if (Number(item)) {
                console.log(item);
            }
        }
    });
    it('enum iterator value', async () => {
        // iterator
        for (let item in StatusCode) {
            if (isNaN(Number(item))) {
                console.log(item);
            }
        }
    });

})