import { useMemo } from 'react';

const SyncProcessor = ({ value }) => {
  useMemo(() => {
    if (value) {
      const start = performance.now();
      let i = 0;
      while (performance.now() - start < 2000) {
        for (let j = 0; j < 1000000; j++) {
          i = (i + j) * 31 % 100000;
        }
      }
    }
  }, [value]);
  
  return null;
};

export default SyncProcessor;
