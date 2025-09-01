import "./classes/Component.js"
import "./classes/GameObject.js"
import "./classes/Scene.js"

import "./geometry/Vector.js"
import "./geometry/Line.js"
import "./geometry/Rectangle.js"
import "./geometry/Circle.js"

import "./components/Circle.js"
import "./components/Point.js"
import "./components/Rectangle.js"
import "./components/Text.js"
import "./components/Transform.js"

import "./static/Collisions.js"
import "./static/CollisionGeometric.js"
import "./static/Input.js"
import "./static/Globals.js"
import "./static/Time.js"
import "./static/EventSystem.js"

import "./prefabs/Camera.js"


class Engine {
  isSystemPaused = false;
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

    //System-level pause
    if (Input.keysUpThisFrame.includes("Escape")) {
      if (Engine.isSystemPaused) {
        Engine.isSystemPaused = false;
      }
      else {
        Engine.isSystemPaused = true;
      }
    }
    //Draw in world space
    Engine.currentScene.draw(ctx)
    if(!Engine.isSystemPaused){

      
      Engine.currentScene._start(ctx);
      
      // Initialize new spawned game objects
      Engine.currentScene.onSpawn(ctx)
      // Update the current scene
      Engine.currentScene.update(ctx)
      
      
      // Remove amything marked for deletion
      Engine.currentScene.gameObjects = Engine.currentScene.gameObjects.filter(o => o.markForDestroy === false)
    }

    //Update the input 
    Input.update()

    //Update the time
    Time.update()
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
  static changeScene(scene){
    EventSystem.listeners = []
    Engine.currentScene = scene;
  }
}

window.Engine = Engine
export default Engine;