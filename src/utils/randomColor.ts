const randomColor = () => {
  const randomBetween = (min: number, max: number) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const cardBg = `rgb(${r},${g},${b}, 0.1)`;
  const categoryBg = `rgb(${r},${g},${b}, 0.1)`;
  const textColor = `rgb(${r},${g},${b})`;
  return { cardBg, categoryBg, textColor };
}

export default randomColor;