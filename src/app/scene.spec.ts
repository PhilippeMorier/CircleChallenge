import { Color } from './color';
import { Scene } from './scene';
import { TrajectoryCircle } from './trajectoryCircle';

describe('Scene', () => {
    it('should update all updatables', () => {
        let testCircle: TrajectoryCircle = new TrajectoryCircle(0, 1, 5, Color.Green);
        spyOn(testCircle, 'update');
        let testScene: Scene = new Scene();

        testScene.addUpdatable(testCircle);
        testScene.update(16);

        expect(testCircle.update).toHaveBeenCalled();
    });

    it('should draw all drawables', () => {
        let testCircle: TrajectoryCircle = new TrajectoryCircle(0, 1, 5, Color.Green);
        spyOn(testCircle, 'draw');
        let testScene: Scene = new Scene();

        testScene.addDrawable(testCircle);
        testScene.draw({} as CanvasRenderingContext2D);

        expect(testCircle.draw).toHaveBeenCalled();
    });
});
