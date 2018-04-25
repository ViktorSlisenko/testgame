
import controller from './Controller.js';

let view = {
    init: function () {
        this.main_area = document.querySelector(".main");
        this.showSquare = document.querySelector(".square");
        this.numberOfShapes = document.querySelector(".count");
        this.gravityValue = document.querySelector(".gravity_value");
        this.showShapesPerSecond = document.querySelector(".shapes_per_sec");
        this.gravityMinus = document.querySelector("#gravityMinus");
        this.gravityPlus = document.querySelector("#gravityPlus");
        this.countMinus = document.querySelector("#countMinus");
        this.countPlus = document.querySelector("#countPlus");

        this.countPlus.addEventListener("click", function () {
            controller.incCounter();
        });
        this.countMinus.addEventListener("click", function () {
            controller.decCounter();
        });
        this.gravityMinus.addEventListener("click", function () {
            controller.decGravity();
        });
        this.gravityPlus.addEventListener("click", function () {
            controller.incGravity();
        });
        this.main_area.addEventListener("mousedown", function (e) {
            if (e.target.style.cursor != "pointer") {
                controller.addShape(controller.mousePosition().x, controller.mousePosition().y);
            }
        });

        this.app = controller.createArea();
        this.main_area.appendChild(this.app.view);

        this.render();
    },

    render: function () {
        var self = this;
        this.app.ticker.add(function () {
            controller.getShapes().forEach(function (el, i) {
                if (el.y <= 750) {
                    el.y += controller.getGravity();
                } else if (el.y > 750) {
                    self.app.stage.removeChild(view.app.stage.children[i]);
                }
            });
            self.showSquare.textContent = controller.getTotalSquare();
            self.numberOfShapes.textContent = controller.numberOfShapes();
        });
        controller.interval();
    }
}


export default view;