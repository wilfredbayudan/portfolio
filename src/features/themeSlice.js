export function setTheme(style) {
  return {
    type: "theme/setTheme",
    payload: style,
  };
}

const initialState = {
  style: "light",
};

export default function themeSlice(state = initialState, action) {
  switch (action.type) {
    case "theme/setTheme":
      return {
        ...state,
        style: action.payload,
      };
    default:
      return state;
  }
}
