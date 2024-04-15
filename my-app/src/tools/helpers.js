export function generateRandomGradient() {
    const hueStart = Math.floor(Math.random() * 360);
    // eslint-disable-next-line max-len
    const hueEnd = (hueStart + Math.floor(Math.random() * 100)) % 360;

    const saturation = '60%';
    const lightness = '70%';

    const gradient = `linear-gradient(to right, hsl(${hueStart}, ${saturation}, ${lightness}), hsl(${hueEnd}, ${saturation}, ${lightness}))`;

    return gradient;
}

export function getRandomInt(min, max) {
    const minVal = Math.ceil(min);
    const maxVal = Math.floor(max);
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
