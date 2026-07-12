import React, { useMemo } from 'react';

const Bootstrap = () => {
  useMemo(() => {
    const start = Date.now();
    while (Date.now() - start < 5000) {}
  }, []);
  
  return null;
};

export default Bootstrap;
