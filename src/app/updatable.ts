export interface Updatable {
    update(passedMillisecondsSinceLastRendering: number): void;
}
