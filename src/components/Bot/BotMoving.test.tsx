import { botMoving, Direction } from "./BotMoving";


describe('botMoving function', () => {
    it('moves the bot to the right direction', () => {
        let position = [3, 5];

        let result = botMoving(Direction.North, position);
        expect(result.position).toEqual([3, 4]);

        result = botMoving(Direction.South, position);
        expect(result.position).toEqual([3, 6]);

        result = botMoving(Direction.East, position);
        expect(result.position).toEqual([4, 5]);

        result = botMoving(Direction.West, position);
        expect(result.position).toEqual([2, 5]);
    });

    it('changes direction when hitting a boundary', () => {
        // Starting from boundary
        [Direction.West, Direction.East, Direction.North].forEach(direction => {
            let position = [3, 0];
            let result = botMoving(direction, position);
            expect(result.direction).not.toEqual(direction);
        });

        [Direction.North, Direction.South, Direction.East].forEach(direction => {
            let position = [7, 3];

            let result = botMoving(direction, position);
            expect(result.direction).not.toEqual(direction);
        });

        // Starting from before boundary
        [Direction.West, Direction.North].forEach(direction => {
            let position = [1, 1];
            let result = botMoving(direction, position);
            expect(result.direction).not.toEqual(direction);
        });

        [Direction.East, Direction.South].forEach(direction => {
            let position = [6, 6];
            let result = botMoving(direction, position);
            expect(result.direction).not.toEqual(direction);
        });


        // Since randomness is involved, this test only checks if the new direction isn't the initial Direction.
    });

});
