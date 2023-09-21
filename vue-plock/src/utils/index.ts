export function createSafeArray(data: number | number[]) {
  return Array.isArray(data) ? data : [data];
}

export function createChunks<T>(data: T[] = [], columns = 3) {
  const res = [];

  for (let index = 0; index < data.length; index += columns) {
    const slice = data.slice(index, index + columns);
    res.push(slice);
  }

  return res;
}

export function createDataColumns<T>(data: T[][] = [], columns = 3) {
  console.log('🚀 ~ data:', data);
  const result = Array.from<T[], T[]>({ length: columns }, () => []);

  for (let idx = 0; idx < columns; idx++) {
    for (let jdx = 0; jdx < data.length; jdx += 1) {
      if (data[jdx][idx]) {
        result[idx].push(data[jdx][idx]);
      }
    }
  }

  console.log('🚀 ~ result:', result);
  return result;
}
