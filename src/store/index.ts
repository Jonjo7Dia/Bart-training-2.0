import {  createStore } from "redux";

import {pagesReducer} from './pagesReducer'
const store = createStore(pagesReducer);

export default store;
