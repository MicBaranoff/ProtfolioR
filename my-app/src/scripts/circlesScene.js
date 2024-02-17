import * as PIXI from 'pixi.js';
import * as Matter from 'matter-js';

class CircleGenerator {
  constructor({ el = null, isMobile = false, quantity = 10 }) {
    this.isMobile = isMobile;

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
    this.bounds = [];

    this.engine = Matter.Engine.create();
    this.runner = Matter.Runner.create();
    this.render = Matter.Render.create({
      engine: this.engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        showVelocity: true,
        showAngleIndicator: true,
      },
    });
  }

  generateCircles() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.quantity; i++) {
      // matter
      const circle = Matter.Bodies.circle(
        Math.random() * window.innerWidth,
        Math.random() * 100,
        (window.innerWidth / (this.isMobile ? 7 : 15))
          + Math.random()
          * (window.innerWidth / (this.isMobile ? 14 : 30)),
      );
      Matter.Composite.add(this.engine.world, circle);

      // pixi
      const circleGraphics = new PIXI.Graphics();
      circleGraphics.beginFill(Math.random() * 0xFFFFFF);
      circleGraphics.drawCircle(0, 0, circle.circleRadius);
      circleGraphics.endFill();
      circleGraphics.x = circle.position.x;
      circleGraphics.y = circle.position.y;
      this.app.stage.addChild(circleGraphics);

      this.circles.push({ graphics: circleGraphics, body: circle });
    }
  }

  onResize() {
    // get the current window size
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.app.renderer.resize(width, height);
  }

  createBoundaries() {
    // Scene walls
    const floor = Matter.Bodies.rectangle(
      this.app.renderer.width / 2,
      this.app.renderer.height,
      this.app.renderer.width,
      1,
      { isStatic: true },
    );

    const leftWall = Matter.Bodies.rectangle(
      -1,
      this.app.renderer.height / 2,
      1,
      this.app.renderer.height,
      { isStatic: true },
    );

    const rightWall = Matter.Bodies.rectangle(
      this.app.renderer.width - 1,
      this.app.renderer.height / 2,
      1,
      this.app.renderer.height,
      { isStatic: true },
    );

    this.bounds = [floor, leftWall, rightWall];
    Matter.Composite.add(this.engine.world, this.bounds);
  }

  animate() {
    // eslint-disable-next-line no-restricted-syntax
    for (const circle of this.circles) {
      circle.graphics.x = circle.body.position.x;
      circle.graphics.y = circle.body.position.y;
    }

    requestAnimationFrame(() => this.animate());
  }

  init() {
    if (!this.el) return;

    this.el.appendChild(this.app.view);

    window.addEventListener('resize', this.onResize.bind(this));

    this.generateCircles();
    this.createBoundaries();

    Matter.Composite.add(
      this.engine.world,
      [...this.circles.map((circle) => circle.body), ...this.bounds],
    );
    Matter.Render.run(this.render);
    Matter.Runner.run(this.runner, this.engine);

    this.animate();
  }

  destroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }
}

export default CircleGenerator;
