import { Engine } from './engine.ts';
import { Scene } from './scene.ts';
import { getRandomColor } from './color.ts';
import { TrajectoryCircle } from './trajectoryCircle.ts';

let renderCanvas: HTMLCanvasElement = document.getElementById('renderCanvas') as HTMLCanvasElement;
let updatableSpan: HTMLSpanElement = document.getElementById('updatableSpan') as HTMLSpanElement;

let engine: Engine = new Engine(renderCanvas);
let scene: Scene = new Scene();

window.addEventListener('resize', engine.resize);

renderCanvas.addEventListener('click', (event: MouseEvent) => {
    let trajectoryCircle: TrajectoryCircle = new TrajectoryCircle(event.pageX, renderCanvas.height - event.pageY, 5, getRandomColor());

    scene.addUpdatable(trajectoryCircle);
    scene.addDrawable(trajectoryCircle);

    updatableSpan.innerText = scene.updatablesLength.toString();
});

engine.renderLoop = (passedMillisecondsSinceLastRendering: number) => {
    scene.update(passedMillisecondsSinceLastRendering);
    scene.draw(engine.renderingContext);
};

engine.startRenderLoop();
