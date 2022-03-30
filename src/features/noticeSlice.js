export function clear() {
  return {
    type: "notice/clear",
  };
}

export function setData(data) {
  return {
    type: "notice/setData",
    payload: data,
  };
}

const initialState = {
  display: false,
  data: null,
};

export default function noticeReducer(state = initialState, action) {
  switch (action.type) {
    case "notice/setData":
      return {
        ...state,
        display: true,
        data: action.payload,
      };
    case "notice/clear":
      return {
        display: false,
        data: null,
      };
    default:
      return state;
  }
}
