import { useState } from "react";

const useCount = (): [number, () => void] => {
  const [count, setCount] = useState<number>(0);
  const addOne = () => setCount(count + 1);
  return [count, addOne];
};
export default useCount;
