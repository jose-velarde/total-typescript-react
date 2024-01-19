import { useRef } from 'react';

export const Component = () => {
  // ref={ref} cannot be undefined so we have to initialize to null
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref} />;
};
