import * as PIXI from 'pixi.js';
import * as Matter from 'matter-js';

// import debounce from 'lodash.debounce';

class CircleGenerator {
    constructor({
                    el = null, isMobile = false, quantity = 12, images = [],
                }) {
        this.isMobile = isMobile;
        this.el = el;

        this.app = new PIXI.Application({
            width: this.el.offsetWidth,
            height: this.el.offsetHeight,
            backgroundColor: 0x000000,
            resizeTo: window,
            antialias: true,
        });

        this.quantity = quantity;
        this.withImages = false;
        this.circles = [];
        this.bounds = [];

        this.images = images;
        this.textures = [];

        this.engine = Matter.Engine.create();
        this.runner = Matter.Runner.create();
        this.render = Matter.Render.create({
            engine: this.engine,
            options: {
                width: this.el.offsetWidth,
                height: this.el.offsetHeight,
            },
        });

        this.mouseConstraint = null;

        this.engine.world.gravity.y = 0.25;
        this.engine.world.gravity.scale = 0.0005;
    }

    loadImages(callback = () => {
    }) {
        PIXI.Assets.loader.load(this.images).then((res) => {
            this.textures = this.images.map((path) => res[path]);
            callback();
        });
    }

    createCircleGraphicsTexture(diameter) {
        const circleGraphics = new PIXI.Graphics();
        const randomFillColor = Math.random() * 0xFFFFFF;
        circleGraphics.beginFill(randomFillColor);
        circleGraphics.drawCircle(0, 0, diameter);
        circleGraphics.endFill();

        return this.app.renderer.generateTexture(circleGraphics);
    }

    generateCircles(textures = []) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < this.quantity; i++) {
            // matter
            const diameter = (window.innerWidth / (this.isMobile ? 7 : 15))
                + Math.random()
                * (window.innerWidth / (this.isMobile ? 14 : 30));

            const circle = Matter.Bodies.circle(
                Math.random() * window.innerWidth,
                Math.random() * 100,
                diameter,
                { restitution: 0.6, slop: 0 },
            );
            Matter.Composite.add(this.engine.world, circle);

            // pixi
            const texture = (textures[i] !== undefined
                ? textures[i]
                : this.createCircleGraphicsTexture(circle.circleRadius));

            const circleSprite = new PIXI.Sprite(texture);

            circleSprite.x = circle.position.x;
            circleSprite.y = circle.position.y;
            circleSprite.width = diameter * 2;
            circleSprite.height = diameter * 2;
            circleSprite.anchor.set(0.5);

            this.app.stage.addChild(circleSprite);

            this.circles.push({ graphics: circleSprite, body: circle });
        }
    }

    addMouse() {
        if (this.isMobile) return;

        const mouse = Matter.Mouse.create(document.body);
        this.mouseConstraint = Matter.MouseConstraint.create(this.engine, {
            mouse,
            constraint: {
                stiffness: 0.0002,
                render: {
                    visible: false,
                },
            },
        });

        Matter.World.add(this.engine.world, this.mouseConstraint);

        this.render.mouse = mouse;
    }

    onResize() {
        this.render.bounds.max.x = window.clientWidth;
        this.render.bounds.max.y = window.clientHeight;
        this.render.options.width = window.clientWidth;
        this.render.options.height = window.clientHeight;
        this.render.canvas.width = window.clientWidth;
        this.render.canvas.height = window.clientHeight;
        Matter.Render.setPixelRatio(this.render, window.devicePixelRatio);

        this.bounds.forEach((object) => {
            Matter.Composite.remove(this.engine.world, this.getCompositeObjectByName(object.label));
        });

        this.bounds = [];

        this.createBoundaries();

        Matter.Composite.add(
            this.engine.world,
            this.bounds,
        );
    }

    getCompositeObjectByName(name) {
        return Matter.Composite.allBodies(this.engine.world).filter((body) => body.label === name);
    }

    createBoundaries() {
        // Scene walls
        const ceiling = Matter.Bodies.rectangle(
            this.app.renderer.width / 2,
            -this.app.renderer.height + 1,
            this.app.renderer.width,
            1,
            { isStatic: true, label: 'ceiling' },
        );

        const floor = Matter.Bodies.rectangle(
            this.app.renderer.width / 2,
            this.app.renderer.height,
            this.app.renderer.width,
            1,
            { isStatic: true, label: 'floor' },
        );

        const leftWall = Matter.Bodies.rectangle(
            -1,
            0,
            1,
            this.app.renderer.height * 2,
            { isStatic: true, label: 'leftWall' },
        );

        const rightWall = Matter.Bodies.rectangle(
            this.app.renderer.width - 1,
            0,
            1,
            this.app.renderer.height * 2,
            { isStatic: true, label: 'rightWall' },
        );

        this.bounds = [floor, ceiling, leftWall, rightWall];
    }

    updateCirclesPosition() {
        this.circles.forEach((circle) => {
            circle.graphics.x = circle.body.position.x;
            circle.graphics.y = circle.body.position.y;
            circle.graphics.rotation = circle.body.angle;
        });
    }

    animate() {
        this.app.ticker.add((delta) => {
            Matter.Engine.update(this.engine, delta);

            this.updateCirclesPosition();
        });
    }

    circlesRefresh(withImages = false) {
        this.withImages = withImages;

        this.circles.forEach((circle) => {
            this.app.stage.removeChild(circle.graphics);
        });
        Matter.Composite.clear(this.engine.world);
        this.circles = [];

        this.generateCircles(withImages ? this.textures : []);
        // this.createBoundaries();

        Matter.Composite.add(
            this.engine.world,
            [...this.circles.map((circle) => circle.body), ...this.bounds],
        );

        this.addMouse();
    }

    init() {
        if (!this.el) return;

        this.el.appendChild(this.app.view);

        window.addEventListener('resize', this.onResize.bind(this));

        // this.generateCircles();
        this.createBoundaries();

        Matter.Composite.add(
            this.engine.world,
            [...this.circles.map((circle) => circle.body), ...this.bounds],
        );

        Matter.Runner.run(this.runner, this.engine, this.render);

        this.addMouse();

        this.animate();
    }

    destroy() {
        window.removeEventListener('resize', this.onResize.bind(this));

        this.circles.forEach((circle) => {
            this.app.stage.removeChild(circle.graphics);
        });

        this.app.destroy();

        Matter.Composite.clear(this.engine.world);

        this.circles = [];
    }
}

export default CircleGenerator;
