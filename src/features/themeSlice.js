export function setTheme(style) {
  return {
    type: "theme/setTheme",
    payload: style,
  };
}

const initialState = {
  theme: "light",
};

export default function themeSlice(state = initialState, action) {
  switch (action.type) {
    case "theme/setTheme":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
