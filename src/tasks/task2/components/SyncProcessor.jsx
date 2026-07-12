import React, { useMemo } from 'react';

const SyncProcessor = ({ value }) => {
  useMemo(() => {
    const start = Date.now();
    while (Date.now() - start < 20000000) {
    }
  }, [value]);
  
  return null;
};

export default SyncProcessor;
