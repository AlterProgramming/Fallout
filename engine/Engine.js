import "./classes/Component.js";
import "./classes/GameObject.js";
import "./classes/Scene.js";

import "./geometry/Vector.js";
import "./geometry/Line.js";
import "./geometry/Rectangle.js";
import "./geometry/Circle.js";

import "./components/Circle.js";
import "./components/Point.js";
import "./components/Rectangle.js";
import "./components/Sprite.js";
import "./components/Text.js";
import "./components/Transform.js";

import "./static/Collisions.js";
import "./static/CollisionGeometric.js";
import "./static/Input.js";
import "./static/Globals.js";
import "./static/Time.js";
import "./static/EventSystem.js";
import PixiAssets from "./static/PixiAssets.js";

import "./prefabs/Camera.js";

class Engine {
  isSystemPaused = false;

  static async setup() {
    document.addEventListener("keydown", Input.keydown);
    document.addEventListener("keyup", Input.keyup);
    document.addEventListener("mousemove", Input.mousemove);

    await PixiAssets.load();

    Engine.app = new window.PIXI.Application({
      resizeTo: window,
      backgroundColor: 0x000000,
      antialias: false,
    });

    document.body.appendChild(Engine.app.view);

    Engine.app.ticker.add((delta) => {
      Time.update(delta);
      Engine.gameLoop();
    });
  }

  static gameLoop() {
    if (!Engine.currentScene) return;

    if (Input.keysUpThisFrame.includes("Escape")) {
      Engine.isSystemPaused = !Engine.isSystemPaused;
    }

    Engine.currentScene._start();

    if (!Engine.isSystemPaused) {
      Engine.currentScene.onSpawn();
      Engine.currentScene.update();

      for (const gameObject of Engine.currentScene.gameObjects) {
        if (gameObject.markForDestroy && gameObject.onDestroy) {
          gameObject.onDestroy();
        }
      }
      Engine.currentScene.gameObjects = Engine.currentScene.gameObjects.filter(
        (o) => o.markForDestroy === false
      );
    }

    Input.update();
  }

  static changeScene(scene) {
    if (Engine.currentScene && Engine.currentScene.destroy) {
      Engine.currentScene.destroy();
    }

    EventSystem.listeners = [];
    Engine.currentScene = scene;
  }
}

window.Engine = Engine;
export default Engine;
