//Action

export const Increment_number = "Increment Number";
export const Decrement_number = "Decrement Number";

//action creators
export const IncremntNumber = (number) => ({ number, type: Increment_number });
export const DecrementNumber = (number) => ({ number, type: Decrement_number });
