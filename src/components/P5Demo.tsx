import * as React from 'react';
import Sketch from 'react-p5';
import p5 from 'p5';

let x = 50;
let y = 50;

export type P5DemoProps = {
  color: string;
}

export function P5Demo(props: P5DemoProps) {
	const setup = (p: p5, canvasParentRef: Element) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p.createCanvas(500, 500).parent(canvasParentRef);

    p.angleMode(p.DEGREES);

    let v1 = p.createVector(1, 0);
    console.log(v1.angleBetween(p.createVector(0, 1)));

    v1 = new p5.Vector();
    v1.set(1, 0);
    let v2 = new p5.Vector();
    v2.set(0, 1);
    console.log(v1.angleBetween(v2));
	};

	const draw = (p: p5) => {
		p.background(0);
    p.fill(props.color || 'blue');
    const pos = new p5.Vector();
    pos.set(x % p.width, y);
		p.ellipse(pos.x, pos.y, 70, 70);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		x++;
	};

	return <Sketch setup={setup} draw={draw} />;
};