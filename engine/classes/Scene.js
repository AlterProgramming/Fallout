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
    _start(ctx) {
        if (!this.hasStarted) {
            this.hasStarted = true;
            if(this.start)
            this.start(ctx)
            for (const gameObject of this.gameObjects) {
                if (gameObject.start) {
                    gameObject.start(ctx);
                }
            }
        }
    }
    onSpawn(ctx) {
        for (const gameObject of this.gameObjects) {
            if (gameObject.onSpawn && !gameObject.hasStarted) {
                gameObject.onSpawn(ctx);
                gameObject.hasStarted = true;
            }
        }

    }
    update(ctx) {
        for (const gameObject of this.gameObjects) {
            if (gameObject.update) {
                gameObject.update(ctx);
            }
        }
    }
    draw(ctx) {
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        ctx.save()
        let windowAspectRatio = ctx.canvas.height / ctx.canvas.width;

        let isLogicalCoordinates = this.logicalWidth >0 && this.aspectRatio > 0

        if(isLogicalCoordinates) {
            if(this.aspectRatio> windowAspectRatio){
                this.letterBox1End = (ctx.canvas.width) / 2 - (ctx.canvas.height / this.aspectRatio) / 2;
                this.letterBox2Start = (ctx.canvas.width) / 2 + (ctx.canvas.height / this.aspectRatio) / 2;
                ctx.translate(this.letterBox1End, 0)
                let scaleFactor = ctx.canvas.height / this.logicalWidth;
                ctx.scale(scaleFactor, scaleFactor)

                this.logicalWidthViewWidthInPixels = this.letterBox2Start - this.letterBox1End;
                this.logicalWidthViewHeightInPixels = ctx.canvas.height;
            } else {
                this.letterBox1End = (ctx.canvas.height) / 2 - (ctx.canvas.width * this.aspectRatio) / 2;
                this.letterBox2Start = (ctx.canvas.width * this.aspectRatio) / 2 + (ctx.canvas.height) / 2;
                ctx.translate(0, this.letterBox1End)
                let scaleFactor = ctx.canvas.width / (this.logicalWidth / this.aspectRatio);
                ctx.scale(scaleFactor, scaleFactor)

                this.logicalWidthViewWidthInPixels = ctx.canvas.width;
                this.logicalWidthViewHeightInPixels = this.letterBox2Start - this.letterBox1End;
            }
        }
        ctx.scale(Camera.main.transform.scaleX, Camera.main.transform.scaleY)
        ctx.translate(-Camera.main.transform.x, -Camera.main.transform.y)
                // ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2)

        this.gameObjects.sort((a, b)=> a.layer - b.layer)

        /** To do, add blur to gameobject of different layers */
        for (const gameObject of this.gameObjects) {
            if (gameObject.layer == -1) {
                //Glow
                ctx.filter = "blur(2px)"
            }
            else {
                //Don't glow
                ctx.filter = "none"
            }
            if (gameObject.draw) {
                gameObject.draw(ctx)
            }
        }
        ctx.restore()

        ctx.fillStyle = "black"

        //Actually draw the letterboxes
        if (isLogicalCoordinates) {
            if (this.aspectRatio > windowAspectRatio) {

                ctx.fillRect(0, 0, this.letterBox1End, ctx.canvas.height);
                ctx.fillRect(this.letterBox2Start, 0, ctx.canvas.width, ctx.canvas.height);
            }
            else {
                ctx.fillRect(0, 0, ctx.canvas.width, this.letterBox1End);
                ctx.fillRect(0, this.letterBox2Start, ctx.canvas.width, ctx.canvas.height);
            }
        }
        this.logicalStartX = this.letterBox1End
        this.logicalEndX= this.letterBox2Start
        
    }
}

window.Scene = Scene
export default Scene