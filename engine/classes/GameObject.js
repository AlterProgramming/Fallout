/**
 * A game object class.
 * Everything in each scene needs to be contained inside a game object.
 * At a high level a game object usually represents a "thing" in the game, e.g.
 * a score display, an enemy, a health bar, etc.
 */

class GameObject {

    components = []
    layer = 0

    constructor(name) {
        this.name = name
        this.addComponent(new Transform())
        this.markForDestroy = false;
        this.hasSpawned = false;
    }

    get transform() {
        return this.components[0]
    }

    addComponent(component) {
        this.components.push(component);
        component.parent = this;
    }
    getComponent(name){
        return this.components.find(c=>c.constructor.name == name);
    }

    start() {
        for (let component of this.components) {
            if (component.start) {
                component.start()
            }
        }
    }

    update() {
        for (let component of this.components) {
            if (component.update) {
                component.update()
            }
        }
    }

    draw() {
        for (let component of this.components) {
            if (component.draw) {
                component.draw()
            }
        }
    }

    onDestroy() {
        for (let component of this.components) {
            if (component.onDestroy) {
                component.onDestroy();
            }
        }
    }

    static find(gameObjectName) {
        return Engine.currentScene.gameObjects.find(go => go.name == gameObjectName)
    }

    static filter(gameObjectName) {
        return Engine.currentScene.gameObjects.filter(go => go.name == gameObjectName)
    }

    static instantiate(gameObject, x=0, y=0, scaleX = 1, scaleY = 1) {
        Engine.currentScene.gameObjects.push(gameObject);
        gameObject.transform.x =x;
        gameObject.transform.y =y;
        gameObject.transform.scaleX =scaleX;
        gameObject.transform.scaleY =scaleY;

    }

    static destroy(gameObject) {
        gameObject.markForDestroy = true;
    }
}

window.GameObject = GameObject
export default GameObject
