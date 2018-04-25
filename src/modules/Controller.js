import view from './View.js';
import model from './Model.js';

let controller = {
    init: function () {
        view.init();
    },

    createArea: function () {
        return model.app;
    },

    getRandomNumber: function getRandomNumber(start, end) {
        var range = end - start;
        var random = Math.random() * range;
        return start + random;
    },
   
    getRandomColor: function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "0x";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
    
    numberOfShapes: function() {
        model.counter = model.shapes().length;
        return model.counter;
    },

    getTotalSquare: function() {
        model.square = 0;
        model.shapes().forEach(function(shape) {
            model.square += shape.getSq();
        });
        view.showSquare.textContent = model.square;
        return model.square;
    },

    addShape: function (x, y) {
        var number = Math.floor(this.getRandomNumber(1, 5));
    
        if (number == 1) {
            view.app.stage.addChild( model.getCircle(x, y) );
        } else if (number == 2) {
            view.app.stage.addChild( model.getRectangle(x, y) );
        } else if (number == 3) {
            view.app.stage.addChild( model.getEllipse(x, y) );
        } else {
            view.app.stage.addChild( model.getTriangle(x, y) );
        }
    },

    inter: null,
    interval: function() {
        var self = this;
        clearInterval(this.inter);
        this.inter = setInterval(function() {
            self.addShape();
        },this.getShapesPerSecond());
    },

    getShapes: function() {
        return model.shapes();
    },

    getShapesPerSecond() {
        return Math.floor(1000/model.shapesPerSecond);
    },

    incCounter: function() {
        model.shapesPerSecond +=1;
        view.showShapesPerSecond.textContent = model.shapesPerSecond;
        this.interval();
    },

    decCounter: function() {
        if(model.shapesPerSecond > 1) {
            model.shapesPerSecond -=1;
        }
        view.showShapesPerSecond.textContent = model.shapesPerSecond;
        this.interval();
    },

    incGravity: function() {
        model.gravity +=1;
        view.gravityValue.textContent = model.gravity;
    },
    decGravity: function() {
        if(model.gravity > 1) {
            model.gravity -=1;
        }
        view.gravityValue.textContent = model.gravity;
    },

    getGravity: function() {
        return model.gravity;
    },

    mousePosition: function() {
        return model.app.renderer.plugins.interaction.mouse.global;
    },
}

export default controller;