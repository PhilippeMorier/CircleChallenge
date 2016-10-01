import {TrajectoryCircle} from './trajectoryCircle.ts';
import {Color} from './color.ts';

describe('TrajectoryCircle', () => {
    it('should position the circle correctly', () => {
        Math.random = () => Math.PI / 4;
        let testCircle: TrajectoryCircle = new TrajectoryCircle(0, 1, 5, Color.Green);

        testCircle.update(1000);

        expect(testCircle.centre.x).toBe(-84.79259529209693);
        expect(testCircle.centre.y).toBe( 63.8527118466688);
    });

    it('should position the circle so that it is touching the ground', () => {
        Math.random = () => 1;
        let testCircle: TrajectoryCircle = new TrajectoryCircle(0, 1, 5, Color.Green);

        testCircle.update(1);

        expect(testCircle.centre.x).toBe(0);
        expect(testCircle.centre.y).toBe(1);
    });
});
