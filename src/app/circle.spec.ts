import { Circle } from './circle';
import { Color } from './color';

describe('Circle', () => {
    it('should create a new instance with all properties set', () => {
        let testCircle: Circle = new Circle(0, 1, 5, Color.Red);

        expect(testCircle.centre.x).toBe(0);
        expect(testCircle.centre.y).toBe(1);
        expect(testCircle.radius).toBe(5);
        expect(testCircle.color).toBe(Color.Red);
    });

    it('should use the arc() for drawing a circle', () => {
        let testCircle: Circle = new Circle(0, 0, 5, Color.Red);
        let renderingContext: any = {
            arc: () => {/* */},
            beginPath: () => {/* */},
            canvas: {height: 100},
            fill: () => {/* */},
            stroke: () => {/* */}
        };
        spyOn(renderingContext, 'arc');

        testCircle.draw(renderingContext);

        expect(renderingContext.arc).toHaveBeenCalledWith(0, 100, 5, 0, 2 * Math.PI, false);
    });
});
