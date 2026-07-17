import { useMemo } from 'react';

const SyncProcessor = ({ value }) => {
  useMemo(() => {
    if (value) {
      const start = performance.now();
      let i = 0;
      while (performance.now() - start < 1000) {
        i = (i + 1) * 31 % 100000;
      }
    }
  }, [value]);
  
  return null;
};

export default SyncProcessor;
