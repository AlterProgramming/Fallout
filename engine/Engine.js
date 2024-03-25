import "/engine/classes/Component.js"
import "/engine/classes/GameObject.js"
import "/engine/classes/Scene.js"

import "/engine/components/Circle.js"
import "/engine/components/Point.js"
import "/engine/components/Rectangle.js"
import "/engine/components/Text.js"
import "/engine/components/Transform.js"

import "/engine/static/Collisions.js"
import "/engine/static/Input.js"
import "/engine/static/Globals.js"
import "/engine/static/Time.js"


class Engine {
  /**
         * The game loop.
         * The game loop calls update and draw using a timer
         */
  static gameLoop() {
    let canvas = document.querySelector("#canv")
    let ctx = canvas.getContext("2d")

    //Make the canvas the same size as our window
    //so it is "full screen"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    Engine.currentScene.start(ctx);

    // Update the current scene
    Engine.currentScene.update(ctx)

    //Draw in world space
    Engine.currentScene.draw(ctx)

    //Draw in Screen/UI space
    //currentScene.drawUI(ctx)
  }

  /** Setup the game **/
  static setup() {
    document.addEventListener("keydown", Input.keydown)
    document.addEventListener("keyup", Input.keyup)

    document.addEventListener("mousemove", Input.mousemove)


    //In the background, create a thread and call
    //gameLoop every 100ms.

    setInterval(Engine.gameLoop, Time.ms)
  }
}

window.Engine = Engine
export default Engine;