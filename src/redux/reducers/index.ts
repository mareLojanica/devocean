import { combineReducers } from "redux"

import { loadReducer } from "./loadReducer/loadReducer"

export default combineReducers({ businessData: loadReducer })
