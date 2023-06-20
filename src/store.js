import { createStore } from "redux";
import { couterReducer } from "./Reducer/couterReducer";

export const store = createStore(couterReducer);
