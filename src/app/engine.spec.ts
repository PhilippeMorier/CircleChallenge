import { Engine } from './engine';

describe('Engine', () => {
    it('should execute render loop function', () => {
        let testEngine: Engine = new Engine({
            getContext: () => {
                return {
                    clearRect: () => {/* */},
                    fillRect: () => {/* */}
                };
            }
        } as any);
        testEngine.renderLoop = () => {/* */};
        window.setInterval = (callback: () => any, interval: number) => callback();
        spyOn(testEngine, 'renderLoop');

        testEngine.startRenderLoop();

        expect(testEngine.renderLoop).toHaveBeenCalled();
    });
});
