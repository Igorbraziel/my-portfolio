import { useEffect, useState } from "react";
import { type Dispatch } from "react";

export default function useLocalStorageState(initialState: unknown, key: string): [unknown, Dispatch<unknown>] {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}