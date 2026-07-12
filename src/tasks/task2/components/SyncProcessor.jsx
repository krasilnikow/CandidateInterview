import React, { useMemo } from 'react';

const SyncProcessor = ({ value }) => {
  useMemo(() => {
    const start = Date.now();
    while (Date.now() - start < 2000) {
    }
  }, [value]);
  
  return null;
};

export default SyncProcessor;
