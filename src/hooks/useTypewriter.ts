import { useEffect, useReducer } from "react";

type State = {
  displayedText: string;
  index: number;
};

type Action = {
  type: string;
  payload: string;
};

const initialState = {
  displayedText: "",
  index: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "text/write":
      return {
        displayedText: state.displayedText + action.payload,
        index: state.index + 1,
      };
    default:
      throw new Error("Unknown action type!");
  }
};

export default function useTypewriter(text: string, speed: number) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.index >= text.length) {
        clearInterval(interval);
      }
      if (state.displayedText !== text && state.index < text.length) {
        dispatch({ type: "text/write", payload: text[state.index] });
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, state.index, state.displayedText]);

  return { displayedText: state.displayedText };
}
