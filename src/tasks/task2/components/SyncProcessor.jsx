import { useMemo } from 'react';

const SyncProcessor = ({ value }) => {
  useMemo(() => {
    if (value) {
      const start = Date.now();
      let i = 0;
      while (Date.now() - start < 1000) {
        i += Math.random();
      }
    }
  }, [value]);
  
  return null;
};

export default SyncProcessor;
