export function setStatus(boolean) {
  return {
    type: "loader/status",
    payload: boolean,
  };
}

export function clear() {
  return {
    type: "loader/clear",
  };
}

export function setData(data) {
  return {
    type: "loader/setData",
    payload: data,
  };
}

export function setMessage(string) {
  return {
    type: "loader/setMessage",
    payload: string,
  };
}

const initialState = {
  status: false,
  message: null,
  data: null,
};

export default function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case "loader/status":
      return {
        ...state,
        status: action.payload,
      };
    case "loader/setData":
      return {
        ...state,
        data: action.payload,
      };
    case "loader/setMessage":
      return {
        ...state,
        data: action.payload,
      };
    case "loader/clear":
      return {
        status: false,
        message: null,
        data: null,
      };
    default:
      return state;
  }
}
