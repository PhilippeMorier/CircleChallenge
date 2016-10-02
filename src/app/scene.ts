import { Updatable } from './updatable';
import { Drawable } from './drawable';

export class Scene {
    private updatables: Updatable[] = [];
    private drawables: Drawable[] = [];

    public update(passedMillisecondsSinceLastRendering: number): void {
        for (let updatable of this.updatables) {
            updatable.update(passedMillisecondsSinceLastRendering);
        }
    }

    public draw(renderingContext: CanvasRenderingContext2D): void {
        for (let drawable of this.drawables) {
            drawable.draw(renderingContext);
        }
    }

    public addUpdatable(updatable: Updatable): void {
        this.updatables.push(updatable);
    }

    public addDrawable(drawable: Drawable): void {
        this.drawables.push(drawable);
    }

    public get updatablesLength(): number {
        return this.updatables.length;
    }
}
