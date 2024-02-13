import * as PIXI from 'pixi.js';

class CircleGenerator {
  constructor({ el = null, quantity = 6 }) {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x000000,
      resizeTo: window,
      antialias: true,
    });

    this.el = el;
    this.quantity = quantity;
    this.circles = [];

    window.addEventListener('resize', () => this.onResize());
  }

  generateCircles() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      const circle = new PIXI.Graphics();
      circle.beginFill(Math.random() * 0xFFFFFF);
      const radius = Math.random() * (window.innerWidth / 10) + (window.innerWidth / 10);
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      circle.drawCircle(0, 0, radius);
      circle.endFill();
      circle.x = x;
      circle.y = y;
      this.app.stage.addChild(circle);
      this.circles.push(circle);
    }
  }

  onResize() {
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
  }

  init() {
    if (!this.el) return;

    this.el.appendChild(this.app.view);

    this.generateCircles();
  }
}

export default CircleGenerator;
