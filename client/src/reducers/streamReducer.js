import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      const newObject = {};
      action.payload.forEach((item) => (newObject[item.id] = item));
      return { ...state, ...newObject };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
        console.log(action.payload);
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      const { [action.payload]: omit, ...newState } = state;
      return newState;

    default:
      return state;
  }
};

export default streamReducer;
