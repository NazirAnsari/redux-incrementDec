import { Increment_number, Decrement_number } from "../Action/counterAction";
const initialCounter = {
  counter: 0,
};
export function couterReducer(state = initialCounter, action) {
  switch (action.type) {
    case Increment_number: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case Decrement_number: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    default:
      return state;
  }
}
