import { memo } from 'react';

const Bootstrap = () => {
  const start = Date.now();
  let i = 0;
  while (Date.now() - start < 5000) {
    i += Math.random();
  }
  
  return null;
};

export default memo(Bootstrap);
