export const getForecast = () => {
  const items = ["Overcast", "Clear", "Sunny"];

  return items[Math.floor(Math.random() * items.length)];
};
