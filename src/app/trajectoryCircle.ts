import { Updatable } from './updatable';
import { Circle } from './circle';
import { Point } from './point';
import { Color } from './color';
import { Random } from './random';

export class TrajectoryCircle extends Circle implements Updatable {
    private gravity: number = 9.81;
    private timeInSeconds: number = 0;
    private velocity: Point;
    private startCentre: Point;
    private alreadyResetCentreAfterBounce: boolean = false;

    public constructor(x: number, y: number, public radius: number, public color: Color) {
        super(x, y, radius, color);

        this.startCentre = new Point(x, y);

        let velocityX: number = Random.nextFloat(0, 80);
        velocityX *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
        let velocityY: number = Random.nextFloat(0, 80);

        this.velocity = new Point(velocityX, velocityY);
    }

    public update(passedMillisecondsSinceLastRendering: number): void {
        this.timeInSeconds += (passedMillisecondsSinceLastRendering / 1000);

        let x: number = this.startCentre.x + this.velocity.x * this.timeInSeconds;
        let y: number = this.startCentre.y + this.velocity.y * this.timeInSeconds - this.gravity / 2 * Math.pow(this.timeInSeconds, 2);

        let isTouchingGround: boolean = (y <= this.radius);
        let isStill: boolean = (this.velocity.y < 0);

        if (!isTouchingGround) {
            this.centre.x = x;
            this.centre.y = y;
            this.alreadyResetCentreAfterBounce = false;
        }
        else if (isTouchingGround && !isStill && !this.alreadyResetCentreAfterBounce) {
            let currentVelocityY: number = this.velocity.y - this.gravity * this.timeInSeconds;

            this.velocity.y = -currentVelocityY - 20;
            this.timeInSeconds = 0;
            this.startCentre.x = this.centre.x;
            this.startCentre.y = this.centre.y;
            this.alreadyResetCentreAfterBounce = true;
        }
        else {
            this.centre.y = this.radius;
        }
    }
}
