import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import * as actions from "./actions";
import * as reducers from "./reducers";

const reducer = { ...reducers };
const middleware = [...getDefaultMiddleware()];
const preloadedState = {};

const store = configureStore({
  reducer,
  middleware,
  preloadedState,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;

// SET initial data
store.dispatch(actions.setContacts(require("./dataset.json")));
