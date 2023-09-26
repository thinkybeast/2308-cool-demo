import * as React from "react";

/*
    1. A context object that will allow us to reference the context in child components

    2. A context provider that will wrap the child components that want to consume the contexrt

*/

export const ThemeContext = React.createContext();

const initialState = {
  theme: "default",
  ghostVotes: 0,
  clownVotes: 0,
};

const appReducer = (prevState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_THEME":
      return { ...prevState, theme: payload };
    case "VOTE_GHOST":
      return { ...prevState, ghostVotes: prevState.ghostVotes + 1 };
    case "VOTE_CLOWN":
      return { ...prevState, clownVotes: prevState.clownVotes + 1 };
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  const handleThemeChange = (e) =>
    dispatch({ type: "CHANGE_THEME", payload: e.target.value });
  const voteGhost = () => dispatch({ type: "VOTE_GHOST" });
  const voteClown = () => dispatch({ type: "VOTE_CLOWN" });

  return (
    <ThemeContext.Provider
      value={{ ...state, handleThemeChange, voteClown, voteGhost }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
