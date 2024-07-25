import { useEffect, useMemo, useState } from "react";

export default function useTypewriter(text: string, speed: number): string {
  const [index, setIndex] = useState<number>(0);
  const displayText = useMemo(() => text.slice(0, index), [index, text]);

  useEffect(() => {
    if (index >= text.length) 
      return;

    const timeoutId: number = window.setTimeout(() => {
      setIndex((i: number) => i + 1);
    }, speed);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [index, text, speed]);

  return displayText;
}