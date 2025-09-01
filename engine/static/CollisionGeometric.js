class CollisionGeometric {
    static isRectangleRectangleCollision(rectangle1, rectangle2) {
        if (
            rectangle1.centerX - rectangle1.width/ 2 >   rectangle2.centerX + rectangle2.width / 2 ||
            rectangle1.centerX + rectangle1.width/ 2 <   rectangle2.centerX - rectangle2.width / 2 ||
            rectangle1.centerY - rectangle1.height / 2 > rectangle2.centerY + rectangle2.height / 2 ||
            rectangle1.centerY + rectangle1.height / 2 < rectangle2.centerY - rectangle2.height / 2
        )
            return false;
        return true;
    }
    static isVectorCircleCollision(circle, vector) {
        /** A vector and a circle collide if the distance between the center of the circle and the vector is smaller or equal
         * to the radius
         */
        let distance = Math.sqrt((circle.x - vector.x) ** 2 + (circle.y - vector.y) ** 2)
        if (distance > circle.radius) {
            return false
        }
        else return true
    }
    static isVectorRectangleCollision(vector, rectangle) {
        if (
            vector.x > rectangle.centerX - rectangle.width / 2 &&
            vector.x < rectangle.centerX + rectangle.width / 2 &&
            vector.y > rectangle.centerY - rectangle.height / 2 &&
            vector.y < rectangle.centerY + rectangle.height / 2
        )
            return true;
        return false;
    }

    static isCircleLineCollision(circle, line) {
        /** We define a line by its two points A and B. */
        /**Check if both points of line is in collision */
        const isPointAColliding = this.isVectorCircleCollision(circle, line.pointA)
        if (isPointAColliding) {
            return true
        }
        const isPointBColliding = this.isVectorCircleCollision(circle, line.pointB)
        if (isPointBColliding) {
            return true
        }
        /** Check if points in between collide */
        /* Projection of the center of the circle over line AB gives point C. 
        If the scalar product of newly obtained vectors is >0 then we consider vector AC, else BC 
        , and check if the vector collide with the circle */

        let baUnnormalized = line.pointB.getSubtract(line.pointA);
        let ba = line.pointB.getSubtract(line.pointA).getNormalized();
        let ca = new Vector(circle.x, circle.y).getSubtract(line.pointA);
        let dotProduct = ba.getDot(ca);
        let scaledBA = ba.getScaled(dotProduct);
        let infiniteLinePoint = line.pointA.getAdd(scaledBA);
        if (dotProduct < 0)
            infiniteLinePoint = line.pointA
        if (dotProduct > baUnnormalized.getLength())
            infiniteLinePoint = line.pointB
        const isCenterOnLineVector = CollisionGeometric.isVectorCircleCollision(circle, infiniteLinePoint)
        if (isCenterOnLineVector) {
            return true
        }
        return false
    }
    static isCircleRectangleCollision(circle, rectangle) {
        //First check if we totally surround or are totally surrounding
        let center = new Vector(circle.x, circle.y)
        let total = CollisionGeometric.isVectorRectangleCollision(center, rectangle)
        if (total == true) {
            return true;
        }
        //Check a more detailed case
        let upperLeft = new Vector(rectangle.centerX - rectangle.width / 2, rectangle.centerY - rectangle.height / 2)
        let lowerLeft = new Vector(rectangle.centerX - rectangle.width / 2, rectangle.centerY + rectangle.height / 2)
        let lowerRight = new Vector(rectangle.centerX + rectangle.width / 2, rectangle.centerY + rectangle.height / 2)
        let upperRight = new Vector(rectangle.centerX + rectangle.width / 2, rectangle.centerY - rectangle.height / 2)

        let line1 = new Line(upperLeft, lowerLeft)
        let line2 = new Line(lowerLeft, lowerRight)
        let line3 = new Line(lowerRight, upperRight)
        let line4 = new Line(upperRight, upperLeft)

        let lines = [line1, line2, line3, line4]
        for (let line of lines) {
            if (CollisionGeometric.isCircleLineCollision(circle, line))
                return true;
        }   
        return false;
    }
}


console.assert(CollisionGeometric.isRectangleRectangleCollision(new Rectangle2(0, 0, 10, 10), new Rectangle2(5,0,10,10)))
console.assert(!CollisionGeometric.isRectangleRectangleCollision(new Rectangle2(0, 0, 10, 10), new Rectangle2(25,0,10,10)))

console.assert(CollisionGeometric.isVectorRectangleCollision(new Vector(0,0), new Rectangle2(0, 0, 10, 10)))
console.assert(!CollisionGeometric.isVectorRectangleCollision(new Vector(20,0), new Rectangle2(0, 0, 10, 10)))

console.assert(CollisionGeometric.isVectorCircleCollision(new Circle2(0, 0, 10), new Vector(0,0)))
console.assert(!CollisionGeometric.isVectorCircleCollision( new Circle2(0, 0, 10), new Vector(20,0)))

// console.assert(CollisionGeometric.isCircleCircleCollision(new Circle2(0,0,10), new Circle2(4,0,10)))
// console.assert(!CollisionGeometric.isCircleCircleCollision(new Circle2(0,0,10), new Circle2(25,0,10)))

// Advanced collision detection

//Circles and Lines
// console.assert(CollisionGeometric.isCircleLineCollision(new Circle2(0,0,1), new Line(new Vector(0,0), new Vector(10,10))))
// console.assert(CollisionGeometric.isCircleLineCollision(new Circle2(1,1,1), new Line(new Vector(0,0), new Vector(10,10))))
// console.assert(CollisionGeometric.isCircleLineCollision(new Circle2(2,2,1), new Line(new Vector(0,0), new Vector(10,10))))
// console.assert(CollisionGeometric.isCircleLineCollision(new Circle2(5,5,1), new Line(new Vector(0,0), new Vector(10,10))))
// console.assert(CollisionGeometric.isCircleLineCollision(new Circle2(8,8,1), new Line(new Vector(0,0), new Vector(10,10))))
// console.assert(CollisionGeometric.isCircleLineCollision(new Circle2(9,9,1), new Line(new Vector(0,0), new Vector(10,10))))
// console.assert(CollisionGeometric.isCircleLineCollision(new Circle2(10,10,1), new Line(new Vector(0,0), new Vector(10,10))))

// console.assert(!CollisionGeometric.isCircleLineCollision(new Circle2(12,12,1), new Line(new Vector(0,0), new Vector(10,10))))

// console.assert(!CollisionGeometric.isCircleLineCollision(new Circle2(6,3,1), new Line(new Vector(0,0), new Vector(10,10))))
// console.assert(CollisionGeometric.isCircleLineCollision(new Circle2(5,4,1), new Line(new Vector(0,0), new Vector(10,10))))
window.CollisionGeometric = CollisionGeometric