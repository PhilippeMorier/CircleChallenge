import { Color } from './color';

export class Engine {
    public renderLoop: Function;
    public renderingContext: CanvasRenderingContext2D;

    private interval: any;
    private lastRendering: number;

    public constructor(private renderCanvas: HTMLCanvasElement) {
        this.renderingContext = renderCanvas.getContext('2d');
    }

    public startRenderLoop(): void {
        this.resize();
        this.lastRendering = Date.now();

        this.interval = setInterval(() => {
                this.clearBackGround(Color.GhostWhite);

                let now: number = Date.now();
                let passedMillisecondsSinceLastRendering: number = now - this.lastRendering;

                this.lastRendering = now;
                this.renderLoop(passedMillisecondsSinceLastRendering * 6);
            }
            , 16
        );
    }

    public stopRenderLoop(): void {
        clearInterval(this.interval);
    }

    public resize(): void {
        this.renderCanvas.width = this.renderCanvas.clientWidth;
        this.renderCanvas.height = this.renderCanvas.clientHeight;
    }

    private clearBackGround(color: Color): void {
        this.renderingContext.clearRect(0, 0, this.renderCanvas.width, this.renderCanvas.height);
        this.renderingContext.fillStyle = Color[color];
        this.renderingContext.fillRect(0, 0, this.renderCanvas.width, this.renderCanvas.height);
    }
}
