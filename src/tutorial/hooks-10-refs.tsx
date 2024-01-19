/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from 'react';

export const Component = () => {
  const firstOverload = useRef<string>('123');
  firstOverload.current = 'Hello';

  // this overload return a readonly ref and not a mutable ref
  const secondOverload = useRef<string>(null);
  // @ts-expect-error readonly ref
  secondOverload.current = 'Hello';

  const thirdOverload = useRef<string>();

  // Why is this not allowed?

  return null;
};
