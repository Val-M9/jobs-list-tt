const { floor, min, max } = Math;
const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (_, i) => i + start);

const pagination = (count: number) => (page: string, total: string) => {
  const start = max(1, min(+page - floor((count - 3) / 2), +total - count + 2));
  const end = min(+total, max(+page + floor((count - 2) / 2), count - 1));
  const mixedArray = [
    ...(start > 2 ? [1, '...'] : start > 1 ? [1] : []),
    ...range(start, end + 1),
    ...(end < +total - 1 ? ['...', total] : end < +total ? [total] : []),
  ];
  return Array.from(mixedArray, String);
};

export { pagination };
