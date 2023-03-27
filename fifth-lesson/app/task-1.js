class Circle {
    constructor(centerX, centerY, radius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    static getCircumferenceByRadius(radius) {
        return 2 * Math.PI * radius;
    }

    getCircle() {
        return new Circle(this.centerX, this.centerY, this.radius);
    }

    static createCircle(centerX, centerY, radius) {
        return new Circle(centerX, centerY, radius);
    }

    isPointInside(x, y) {
        return (x - this.centerX) ** 2 + (y - this.centerY) ** 2 <= this.radius ** 2;
    }

    toString() {
        return `Circle with center (${this.centerX}, ${this.centerY}) and radius ${this.radius}`;
    }
}

const circle = new Circle(0, 0, 5);
console.log(circle.getCircumference()); // 31.41592653589793

const circumference = Circle.getCircumferenceByRadius(5);
console.log(circumference); // 31.41592653589793

const circleCopy = circle.getCircle();
console.log(circleCopy); // Circle { centerX: 0, centerY: 0, radius: 5 }

const circle2 = Circle.createCircle(10, 10, 2);
console.log(circle2); // Circle { centerX: 10, centerY: 10, radius: 2 }

console.log(circle.isPointInside(1, 1)); // true
console.log(circle.isPointInside(10, 10)); // false

console.log(circle.toString()); // Circle with center (0, 0) and radius 5