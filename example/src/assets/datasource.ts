const sizes = [
  [100, 150],
  [300, 200],
  [400, 300],
  [200, 200],
  [450, 300],
  [300, 400]
];

function getRandom(len: number) {
  return Math.floor(Math.random() * len);
}

export const datasource = Array.from(new Array(100), () => {
  const [width, height] = sizes[getRandom(sizes.length)];
  const baseUrl = `https://picsum.photos/id/${getRandom(
    400
  )}/${width}/${height}`;

  return baseUrl;
});
