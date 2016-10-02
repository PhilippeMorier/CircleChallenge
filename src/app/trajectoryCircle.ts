import { Updatable } from './updatable.ts';
import { Circle } from './circle.ts';
import { Point } from './point.ts';
import { Color } from './color.ts';
import { Random } from './random.ts';

export class TrajectoryCircle extends Circle implements Updatable {
    private gravity: number = 9.81;
    private timeInSeconds: number = 0;
    private velocityX: number;
    private velocityY: number;
    private startCentre: Point;
    private alreadyResetCentreAfterBounce: boolean = false;

    public constructor(x: number, y: number, public radius: number, public color: Color) {
        super(x, y, radius, color);

        this.startCentre = new Point(x, y);

        this.velocityX = Random.nextFloat(0, 80);
        this.velocityX *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
        this.velocityY = Random.nextFloat(0, 80);
    }

    public update(passedMillisecondsSinceLastRendering: number): void {
        this.timeInSeconds += (passedMillisecondsSinceLastRendering / 1000);

        let x: number = this.startCentre.x + this.velocityX * this.timeInSeconds;
        let y: number = this.startCentre.y + this.velocityY * this.timeInSeconds - this.gravity / 2 * Math.pow(this.timeInSeconds, 2);

        let isTouchingGround: boolean = (y <= this.radius);
        let isStill: boolean = (this.velocityY < 0);

        if (!isTouchingGround) {
            this.centre.x = x;
            this.centre.y = y;
            this.alreadyResetCentreAfterBounce = false;
        }
        else if (isTouchingGround && !isStill && !this.alreadyResetCentreAfterBounce) {
            let currentVelocityY: number = this.velocityY - this.gravity * this.timeInSeconds;

            this.velocityY = -currentVelocityY - 20;
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
