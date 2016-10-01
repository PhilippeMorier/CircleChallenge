export class Random {
    public static nextInteger(min: number, max: number): number {
        return Math.floor(this.nextFloat(min, max));
    }

    public static nextFloat(min: number, max: number): number {
        return (Math.random() * max) + min;
    }
}
