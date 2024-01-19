import { useEffect } from 'react';

export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Done!');
    }, timerMs);
    // return expect an effectCallback which is a function like the following, to clear the timeout
    return () => {
      clearTimeout(timeout);
    };
  }, [timerMs]);
};
