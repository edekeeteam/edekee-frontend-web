const reducer = (state, action) => {
  if (action.type === "HANDLE_INPUT_CHANGE") {
    // console.log(action.payload, state);
    return {
      ...state,
      [action.field]: action.payload,
    };
  }

  return state;
};

export default reducer;
