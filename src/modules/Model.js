import controller from './Controller.js';

let model = {

    app: new PIXI.Application(800, 600),
    shapes: function () {
        return this.app.stage.children;
    },

    counter: 0,
    gravity: 1,
    shapesPerSecond: 1,
    square: 0,

    getRectangle: function(x, y) {
        var randomX = controller.getRandomNumber(0, 700);
        var randomY = -100;
        var x = x || randomX;
        var y = y || randomY;
        var randomSize = controller.getRandomNumber(50, 100);
    
        var rectangle = new PIXI.Graphics();
        rectangle.beginFill(controller.getRandomColor());
        rectangle.drawRect(x, y, randomSize, randomSize);
        rectangle.endFill();
        rectangle.interactive = true;
        rectangle.buttonMode = true;
        rectangle.getSq = function () {
            return Math.floor(randomSize * randomSize);
        };

        rectangle.on("pointerdown", function () {
            rectangle.parent.removeChild(rectangle);
            controller.getTotalSquare();
        });
        return rectangle;
    },

    getTriangle: function (x, y) {
        var randomX = controller.getRandomNumber(50, 750);
        var randomY = -100;
        var x = x || randomX;
        var y = y || randomY;
    
        let triangle = new PIXI.Graphics();
        triangle.beginFill(controller.getRandomColor());
        triangle.drawPolygon([
            -32,
            64, //First point
            32,
            64, //Second point
            32,
            0 //Third point
        ]);
        triangle.endFill();
        triangle.x = x;
        triangle.y = y;
        triangle.interactive = true;
        triangle.buttonMode = true;
        triangle.getSq = function () {
            return 0.5 * (32 * 32);
        };
        triangle.on("pointerdown", function () {
            triangle.parent.removeChild(triangle);
            controller.getTotalSquare();
        });
        return triangle;
    },

    getCircle: function getCircle(x, y) {
        var randomX =	controller.getRandomNumber(50, 750);
        var randomY = -100;
        var x = x || randomX;
        var y = y || randomY;
        var radius = controller.getRandomNumber(20, 50);
    
        var circle = new PIXI.Graphics();
        circle.beginFill(controller.getRandomColor());
        circle.drawCircle(x, y, radius);
        circle.endFill();
        circle.interactive = true;
        circle.buttonMode = true;
        circle.getSq = function () {
            return Math.floor(3.1415 * (radius * radius));
        };

        circle.on("pointerdown", function () {
            circle.parent.removeChild(circle);
            controller.getTotalSquare();
        });
        return circle;
    },

    getEllipse: function(x, y) {
        var randomX = controller.getRandomNumber(50, 750);
        var randomY = -100;
        var x = x || randomX;
        var y = y || randomY;
        var a = controller.getRandomNumber(20, 50);
        var b = controller.getRandomNumber(20, 50);
    
        var ellipse = new PIXI.Graphics();
        ellipse.beginFill(controller.getRandomColor());
        ellipse.drawEllipse(x, y, a, b);
        ellipse.endFill();
        ellipse.interactive = true;
        ellipse.buttonMode = true;
        ellipse.getSq = function () {
            return Math.floor(3.1415 * a * b);
        };

        ellipse.on("pointerdown", function () {
            ellipse.parent.removeChild(ellipse);
            controller.getTotalSquare();
        });
        return ellipse;
    }
}


export default model;