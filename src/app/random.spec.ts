import { Random } from './random';

describe('Random', () => {
    it('should generate a float between a given min and max', () => {
        Math.random = () => 0.4242;
        let float: number = Random.nextInteger(0, 10);

        expect(float).toBe(4);
    });

    it('should generate a integer between a given min and max', () => {
        Math.random = () => 0.4242;
        let integer: number = Random.nextFloat(0, 10);

        expect(integer).toBe(4.242);
    });
});
