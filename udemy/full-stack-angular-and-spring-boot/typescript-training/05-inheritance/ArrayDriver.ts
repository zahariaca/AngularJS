import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangel = new Rectangle(10, 20, 5, 6);

let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangel);

for (let s of shapes) {
  console.log(s.getInfo());
}
