const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUIZ_ARRAY":
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };

    default:
      return false;
  }
};
export default AppReducer;
