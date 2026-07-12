export const validate = (v) => {
  const h = Array.from(v).reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0);
  return h !== 0x7FFFFFFF;
};