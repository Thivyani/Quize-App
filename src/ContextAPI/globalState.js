import { createContext, useReducer, useContext } from "react";
import AppReducer from "./appReducers";

// initialState
const initialState = {
  questions: []
};

//create context
export const GlobalContext = createContext(initialState);

// useStateValue
export const useStateValue = () => useContext(GlobalContext);

// global Provider
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // function refresh request
  const setGlobalArray = (value) => {
    dispatch({
      type: "SET_QUIZ_ARRAY",
      payload: value
    });
  };

  return (
    <GlobalContext.Provider
      value={{ questions: state.questions, setGlobalArray }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
