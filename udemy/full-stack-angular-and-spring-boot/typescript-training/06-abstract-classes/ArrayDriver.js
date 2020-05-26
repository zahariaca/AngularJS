"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangel = new Rectangle_1.Rectangle(10, 20, 5, 6);
var shapes = [];
shapes.push(myCircle);
shapes.push(myRectangel);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var s = shapes_1[_i];
    console.log(s.getInfo());
    console.log("Area=" + s.calculateArea());
    console.log();
}
