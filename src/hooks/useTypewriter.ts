import { useEffect, useState } from "react";

export default function useTypewriter(text: string, speed: number) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= text.length) {
        clearInterval(interval);
      }
      setDisplayedText((currentText) => {
        return currentText === text ? text : currentText + text[index];
      });
      setIndex((index) => index + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, index]);

  return { displayedText };
}
