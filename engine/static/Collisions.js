class Collisions {
    static isPointRectangleCollision(point, rectangleCenter, width, height) {
        if (
            point.x > rectangleCenter.x - width / 2 &&
            point.x < rectangleCenter.x + width / 2 &&
            point.y > rectangleCenter.y - height / 2 &&
            point.y < rectangleCenter.y + height / 2
        )
            return true;
        return false;
    }
    static isPointCircleCollision(point, circleCenter, circleRadius) {
        let distance = Math.sqrt((point.x - circleCenter.x) ** 2 + (point.y - circleCenter.y) ** 2);
        return distance < circleRadius
    }
    static isCircleCircleCollision(centerOne, centerTwo, radiusOne, radiusTwo) {
        let distance = Math.sqrt((centerOne.x - centerTwo.x) ** 2 + (centerOne.y - centerTwo.y) ** 2)
        if (radiusOne + radiusTwo > distance)
            return true;
        return false;
    }
    static isRectangleRectangleCollision(rect1, rect2) {
        if (
            rect1.x - rect1.width / 2 > rect2.x + rect2.width / 2 ||
            rect1.x + rect1.width / 2 < rect2.x - rect2.width / 2 ||
            rect1.y - rect1.height / 2 > rect2.y + rect2.height / 2 ||
            rect1.y + rect1.height / 2 < rect2.y - rect2.height / 2
        )
            return false;
        return true;
    }

}

window.Collisions = Collisions
export default Collisions;