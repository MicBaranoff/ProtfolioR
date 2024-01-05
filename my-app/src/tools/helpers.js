export default function generateRandomGradient() {
  const hueStart = Math.floor(Math.random() * 360);
  // eslint-disable-next-line max-len
  const hueEnd = (hueStart + Math.floor(Math.random() * 100)) % 360;

  const saturation = '60%';
  const lightness = '70%';

  const gradient = `linear-gradient(to right, hsl(${hueStart}, ${saturation}, ${lightness}), hsl(${hueEnd}, ${saturation}, ${lightness}))`;

  return gradient;
}
