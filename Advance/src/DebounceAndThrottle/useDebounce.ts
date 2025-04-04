import { useCallback } from 'react'

const debounce = (callback: any, delay: any) => {
  let timeoutId: any;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};


export default function useDebounce(callback: any, delay: any) {
  const debounceCallback = useCallback(debounce(callback, delay), [delay]);

  return debounceCallback;
}
