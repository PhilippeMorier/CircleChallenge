import { Engine } from './engine.ts';
import { Scene } from './scene.ts';
import { Color } from './color.ts';
import { TrajectoryCircle } from './trajectoryCircle.ts';

let renderCanvas: HTMLCanvasElement = document.getElementById('renderCanvas') as HTMLCanvasElement;
let engine: Engine = new Engine(renderCanvas);
let scene: Scene = new Scene();

window.addEventListener('resize', engine.resize);

renderCanvas.addEventListener('click', (event: MouseEvent) => {
    let colorCount: number = Object.keys(Color).length;
    let randomIndex: number = Math.floor((Math.random() * colorCount - 1));
    let randomColor: Color = Color[Object.keys(Color)[randomIndex]];
    let trajectoryCircle: TrajectoryCircle = new TrajectoryCircle(event.pageX, renderCanvas.height - event.pageY, 5, randomColor);

    scene.addUpdatable(trajectoryCircle);
    scene.addDrawable(trajectoryCircle);
});

engine.renderLoop = (passedMillisecondsSinceLastRendering: number) => {
    scene.update(passedMillisecondsSinceLastRendering);
    scene.draw(engine.renderingContext);
};
engine.startRenderLoop();
