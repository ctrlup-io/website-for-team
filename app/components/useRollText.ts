import { useEffect, useState } from "react";

export default function useRollText({
  delay = 1e3,
  options = [],
}: {
  delay?: number;
  options?: string[];
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((index + 1) % options.length);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  });
  const text = options[index];
  return text;
}
