import { createReducer } from "redux-starter-kit";
import * as actions from "./actions";
import filterDeep from "../modules/filterDeep";
import createTreeFromFlatList from "../modules/createTreeFromFlatList";

export const contacts = createReducer([], {
  [actions.setContacts]: (state, action) => {
    return createTreeFromFlatList(action.payload);
  },
  [actions.removeContact]: (state, action) => {
    return filterDeep(state, action.payload);
  }
});
