import { Updatable } from './updatable.ts';
import { Circle } from './circle.ts';
import { Point } from './point.ts';
import { Color } from './color.ts';
import { Random } from './random.ts';

export class TrajectoryCircle extends Circle implements Updatable {
    private gravity: number = 9.81;
    private timeInSeconds: number = 0;
    private velocity: number = Random.nextFloat(30, 100);
    private angle: number = Random.nextFloat(0, Math.PI);
    private startCentre: Point;
    private alreadyResetCentreAfterBounce: boolean = false;

    public constructor(x: number, y: number, public radius: number, public color: Color) {
        super(x, y, radius, color);

        this.startCentre = new Point(x, y);
    }

    public update(passedMillisecondsSinceLastRendering: number): void {
        this.timeInSeconds += (passedMillisecondsSinceLastRendering / 1000);

        let x: number = this.startCentre.x + this.velocity * this.timeInSeconds * Math.cos(this.angle);
        let y: number = this.startCentre.y + this.velocity * this.timeInSeconds * Math.sin(this.angle) - this.gravity / 2 * Math.pow(this.timeInSeconds, 2);

        let isTouchingGround: boolean = (y <= this.radius);
        let isStill: boolean = (this.velocity < 0);

        if (!isTouchingGround) {
            this.centre.x = x;
            this.centre.y = y;
            this.alreadyResetCentreAfterBounce = false;
        }
        else if (isTouchingGround && !isStill && !this.alreadyResetCentreAfterBounce) {
            this.velocity -= 10;
            this.timeInSeconds = 0;
            this.startCentre.x = this.centre.x;
            this.startCentre.y = this.radius;
            this.alreadyResetCentreAfterBounce = true;
        }
        else {
            this.centre.y = this.radius;
        }
    }
}
