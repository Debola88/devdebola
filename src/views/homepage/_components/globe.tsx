/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'; 

import Globe from 'react-globe.gl';
import { useEffect, useState } from 'react';

const GlobeComponent = (props: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading globe...</div>;
  }

  return <Globe {...props} />;
};

export default GlobeComponent;