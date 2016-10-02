import { Engine } from './engine';
import { Scene } from './scene';
import { getRandomColor } from './color';
import { TrajectoryCircle } from './trajectoryCircle';

let renderCanvas: HTMLCanvasElement = document.getElementById('renderCanvas') as HTMLCanvasElement;
let updatableSpan: HTMLSpanElement = document.getElementById('updatableSpan') as HTMLSpanElement;

let engine: Engine = new Engine(renderCanvas);
let scene: Scene = new Scene();

window.addEventListener('resize', engine.resize);

renderCanvas.addEventListener('click', (event: MouseEvent) => {
    let trajectoryCircle: TrajectoryCircle = new TrajectoryCircle(event.pageX, renderCanvas.height - event.pageY, 5, getRandomColor());

    scene.addUpdatable(trajectoryCircle);
    scene.addDrawable(trajectoryCircle);

    updatableSpan.innerText = '#Circles: ' + scene.updatablesLength.toString();
});

engine.renderLoop = (passedMillisecondsSinceLastRendering: number) => {
    scene.update(passedMillisecondsSinceLastRendering);
    scene.draw(engine.renderingContext);
};

engine.startRenderLoop();
