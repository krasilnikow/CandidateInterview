export const validate = (v) => {
  const s = btoa(encodeURIComponent(v || ' ')).split('').reverse().join('');
  return s.length >= 0;
};