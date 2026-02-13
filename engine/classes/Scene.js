class Scene {
    gameObjects = []
    hasStarted = false;
    logicalWidth = -1;

    aspectRatio = -1;

    logicalWidthViewWidthInPixels = -1
    logicalWidthViewHeightInPixels = -1

    logicalStartX = 0
    logicalEndX =0
    logicalStartY = 0
    logicalEndY=0

    letterBox1End = 0;
    letterBox2Start = 0;

    constructor(backgroundColor) {
        this.backgroundColor = backgroundColor
        this.hasStarted = false;
    }

    setupContainers() {
        if (this.stageContainer) return;

        const { Container } = window.PIXI;
        this.stageContainer = new Container();
        this.stageContainer.sortableChildren = true;
        this.worldContainer = new Container();
        this.worldContainer.sortableChildren = true;
        this.stageContainer.addChild(this.worldContainer);
        Engine.app.stage.addChild(this.stageContainer);
    }

    _start() {
        this.setupContainers();
        this.applyViewport();

        if (!this.hasStarted) {
            this.hasStarted = true;
            const color = typeof this.backgroundColor === "number"
                ? this.backgroundColor
                : window.PIXI.utils.string2hex(this.backgroundColor);
            Engine.app.renderer.background.color = color;
            if(this.start)
            this.start()
            for (const gameObject of this.gameObjects) {
                if (gameObject.start) {
                    gameObject.start();
                }
            }
        }
    }
    onSpawn() {
        for (const gameObject of this.gameObjects) {
            if (gameObject.onSpawn && !gameObject.hasStarted) {
                gameObject.onSpawn();
                gameObject.hasStarted = true;
            }
        }

    }
    update() {
        if (Engine.currentScene !== this) return;

        this.applyViewport();

        this.gameObjects.sort((a, b)=> a.layer - b.layer)

        for (const gameObject of this.gameObjects) {
            if (Engine.currentScene !== this) return;

            if (gameObject.update) {
                gameObject.update();
            }
            if (gameObject.displayObject) {
                gameObject.displayObject.zIndex = gameObject.layer;
            }
        }
    }

    applyViewport() {
        const w = Engine.app.renderer.width;
        const h = Engine.app.renderer.height;
        let baseX = 0;
        let baseY = 0;
        let scaleX = 1;
        let scaleY = 1;

        const windowAspectRatio = h / w;
        const isLogicalCoordinates = this.logicalWidth > 0 && this.aspectRatio > 0;

        if (isLogicalCoordinates) {
            if (this.aspectRatio > windowAspectRatio) {
                this.letterBox1End = (w) / 2 - (h / this.aspectRatio) / 2;
                this.letterBox2Start = (w) / 2 + (h / this.aspectRatio) / 2;
                scaleX = h / this.logicalWidth;
                scaleY = scaleX;
                baseX = this.letterBox1End;
                this.logicalWidthViewWidthInPixels = this.letterBox2Start - this.letterBox1End;
                this.logicalWidthViewHeightInPixels = h;
            } else {
                this.letterBox1End = (h) / 2 - (w * this.aspectRatio) / 2;
                this.letterBox2Start = (w * this.aspectRatio) / 2 + (h) / 2;
                scaleX = w / (this.logicalWidth / this.aspectRatio);
                scaleY = scaleX;
                baseY = this.letterBox1End;
                this.logicalWidthViewWidthInPixels = w;
                this.logicalWidthViewHeightInPixels = this.letterBox2Start - this.letterBox1End;
            }
        }

        scaleX *= Camera.main.transform.scaleX;
        scaleY *= Camera.main.transform.scaleY;

        this.worldContainer.scale.set(scaleX, scaleY);
        this.worldContainer.position.set(
            baseX - Camera.main.transform.x * scaleX,
            baseY - Camera.main.transform.y * scaleY
        );

        this.logicalStartX = this.letterBox1End;
        this.logicalEndX= this.letterBox2Start;
    }

    destroy() {
        for (const gameObject of this.gameObjects) {
            if (gameObject.onDestroy) {
                gameObject.onDestroy();
            }
        }
        if (this.stageContainer) {
            Engine.app.stage.removeChild(this.stageContainer);
            this.stageContainer.destroy({ children: true });
        }
    }
}

window.Scene = Scene
export default Scene
