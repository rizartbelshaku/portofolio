import { useEffect, useState } from "react";

const WORDS = ["a Frontend Developer.", "a React Native Developer.", "a Problem Solver."];
const TYPE_SPEED = 65;
const DELETE_SPEED = 35;
const PAUSE = 1500;

export const useTypewriter = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = WORDS[wordIndex % WORDS.length];

    if (!deleting && text === current) {
      const id = setTimeout(() => setDeleting(true), PAUSE);
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => {
      if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % WORDS.length);
        return;
      }
      setText(current.slice(0, text.length + (deleting ? -1 : 1)));
    }, deleting ? DELETE_SPEED : TYPE_SPEED);

    return () => clearTimeout(id);
  }, [text, deleting, wordIndex]);

  return text;
};
