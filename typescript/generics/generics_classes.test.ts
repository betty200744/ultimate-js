import {GenericNumbers} from "./generics_classes";

describe('Generics', async () => {
    it('class', async () => {
        let myGenericNumber = new GenericNumbers<number>();
        myGenericNumber.zeroValue = 0;
        myGenericNumber.add = function (x, y) {
            return x + y;
        };
        console.log(myGenericNumber)
    });
});