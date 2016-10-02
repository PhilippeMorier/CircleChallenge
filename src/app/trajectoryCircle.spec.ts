import {TrajectoryCircle} from './trajectoryCircle';
import {Color} from './color';

describe('TrajectoryCircle', () => {
    it('should position the circle correctly', () => {
        Math.random = () => Math.PI / 4;
        let testCircle: TrajectoryCircle = new TrajectoryCircle(0, 1, 5, Color.Green);

        testCircle.update(1000);

        expect(testCircle.centre.x).toBe(62.83185307179586);
        expect(testCircle.centre.y).toBe(58.92685307179586);
    });

    it('should position the circle so that it is touching the ground', () => {
        Math.random = () => 1;
        let testCircle: TrajectoryCircle = new TrajectoryCircle(0, 1, 5, Color.Green);

        testCircle.update(1);

        expect(testCircle.centre.x).toBe(0);
        expect(testCircle.centre.y).toBe(1);
    });
});
