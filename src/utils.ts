function randomItem<T>(items: T[]) {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

export const randomHash = () =>
  Math.floor(Math.random() * 0xffffff).toString(16);