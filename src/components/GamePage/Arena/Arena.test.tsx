import { genNArray } from "./utils";


describe('utils', () => {
    test('genNArray', () => {
        const array_of_6_items = genNArray(6);

        expect(array_of_6_items).toEqual([{}, {}, {}, {}, {}, {}]);
    });
});