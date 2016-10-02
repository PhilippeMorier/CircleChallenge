import { Drawable } from './drawable';
import { Point } from './point';
import { Color } from './color';

export class Circle implements Drawable {
    public centre: Point;

    public constructor(x: number, y: number, public radius: number, public color: Color) {
        this.centre = new Point(x, y);
    }

    public draw(renderingContext: CanvasRenderingContext2D): void {
        renderingContext.beginPath();
        renderingContext.arc(this.centre.x, renderingContext.canvas.height - this.centre.y, this.radius, 0, 2 * Math.PI, false);
        renderingContext.fillStyle = this.color;
        renderingContext.fill();
        renderingContext.lineWidth = 0.5;
        renderingContext.strokeStyle = Color[Color.Gray];
        renderingContext.stroke();
    }
}
