// eslint-disable-next-line max-classes-per-file
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function textStagGsap(
    selector,
    options = {
        delay: 0.2,
        duration: 0.3,
        stagger: 0.05,
    },
) {
    gsap.to(`${selector} .char`, {
        y: 0,
        ...options,
    });
}

export function cliPathGsap(
    selector,
    options = {
        duration: 2,
    },
) {
    gsap.to(selector, {
        clipPath: 'polygon(0 0, 125% 0%, 100% 100%, 0% 100%)',
        ...options,
    });
}

export class TextStagGsapTL {
    constructor(
        selector,
        options = {
            stagger: 0.05,
        },
        scrollTriggerOptions = {
            start: '70% bottom',
            end: '70% 40%',
        },
    ) {
        this.selector = selector;
        this.options = options;
        this.scrollTriggerOptions = scrollTriggerOptions;

        this.tl = gsap.timeline();
    }

    init() {
        setTimeout(() => {
            this.tl.to(`${this.selector} .char`, {
                y: 0,
                duration: 2,
                ...this.options,
            });

            ScrollTrigger.create({
                animation: this.tl,
                trigger: this.selector,
                id: this.selector,
                scrub: true,
                ...this.scrollTriggerOptions,
            });
        });
    }

    kill() {
        this.tl.kill();
        this.tl = null;
    }
}

export class CliPathGsapTL {
    constructor(
        selector,
        options = {
            duration: 2,
        },
        scrollTriggerOptions = {
            start: '70% bottom',
            end: '70% 50%',
        },
    ) {
        this.selector = selector;
        this.options = options;
        this.scrollTriggerOptions = scrollTriggerOptions;

        this.tl = gsap.timeline();
    }

    init() {
        setTimeout(() => {
            this.tl.to(
                this.selector,
                {
                    clipPath: 'polygon(0 0, 125% 0%, 100% 100%, 0% 100%)',
                    ...this.options,
                },
            );

            ScrollTrigger.create({
                animation: this.tl,
                trigger: this.selector,
                id: this.selector,
                scrub: true,
                ...this.scrollTriggerOptions,
            });
        });
    }

    kill() {
        this.tl.kill();
        this.tl = null;
    }
}
