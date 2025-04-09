import { useEffect } from "react";

export function useDebounceCallback<T>(
  value: T,
  delay: number = 300,
  onChange: (value: T) => void
): void {
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, onChange]);
}
