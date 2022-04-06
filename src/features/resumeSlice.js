export function setDisplay(boolean) {
  return {
    type: "resume/setDisplay",
    payload: boolean,
  };
}

const initialState = {
  display: false,
};

export default function resumeReducer(state = initialState, action) {
  switch (action.type) {
    case "resume/setDisplay":
      return {
        ...state,
        display: action.payload,
      };
    default:
      return state;
  }
}
