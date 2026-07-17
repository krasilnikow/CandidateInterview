import { memo } from 'react';

const Bootstrap = () => {
  const start = performance.now();
  let i = 0;
  while (performance.now() - start < 5000) {
    for (let j = 0; j < 1000000; j++) {
      i = (i + j) * 31 % 100000;
    }
  }
  
  return null;
};

export default memo(Bootstrap);
