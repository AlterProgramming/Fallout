import "./engine/Engine.js";
import "./games/scenes/GameScene.js";
import "./games/scenes/DeathScene.js";

Engine.currentScene = new GameScene();
await Engine.setup();
